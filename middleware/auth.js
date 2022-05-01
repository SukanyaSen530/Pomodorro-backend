export const protectedRoutes = async function (req, res, next) {
  if (req.user) next();
  else return res.status(403).json({ message: "Unauthorized!" });
};
