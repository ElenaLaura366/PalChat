import jwt from "jsonwebtoken";

export const generateToken = (userID, res) => {
  const token = jwt.sign({ userID }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true, //accessible only by web server prevent XSS cross site attacks
    sameSite: "strict", //CSRF attacks protection
    secure: process.env.NODE_ENV !== "developement", //https
  });
  return token;
};
