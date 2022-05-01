import mongoose from "mongoose";

const { Schema, model } = mongoose;

const UserSchema = new Schema(
  {
    googleId: { type: String, required: true },
    displayName: { type: String, required: true },
    displayImage: String,
  },
  {
    timestamps: true,
  }
);

const User = model("user", UserSchema);

export default User;
