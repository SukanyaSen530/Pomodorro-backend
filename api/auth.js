import dotenv from "dotenv";
import express from "express";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from "../models/User.js";

import { protectedRoutes } from "../middleware/auth.js";

//for accessing the .env file
dotenv.config();

const authRoutes = express.Router();

passport.use(
  new GoogleStrategy(
    {
      clientID: `${process.env.GOOGLE_CLIENT_ID}`,
      clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`,
      callbackURL: `${process.env.SERVER_URL}auth/google/callback`,
    },
    async (accessToken, refreshToken, profile, cb) => {
      User.findOne({ googleId: profile.id }, async (err, user) => {
        if (err) return cb(err, null);

        if (!user) {
          const newUser = new User({
            googleId: profile.id,
            displayName: profile.displayName,
            displayImage: profile?.photos[0]?.value || "",
          });

          await newUser.save();

          return cb(null, newUser);
        }

        return cb(null, user);
      });
    }
  )
);

authRoutes.get(
  "/google",
  passport.authenticate("google", { scope: ["profile"] })
);

authRoutes.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: `${process.env.CLIENT_URL}`,
    session: true,
  }),
  (req, res) => res.redirect(`${process.env.CLIENT_URL}tasks`)
);

authRoutes.get("/user", protectedRoutes, async (req, res) => {
  return res.status(200).json({ user: req.user });
});

authRoutes.post("/logout", async () => {
  if (req.user) {
    req.logout();
    return res.status(200).json({ message: "success" });
  } else {
    return res.status(400).json({ message: "User is not signed in." });
  }
});

export default authRoutes;
