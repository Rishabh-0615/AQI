import jwt from "jsonwebtoken";
import { User } from "../models/userModel.js";

export const isAuth = async (req, res, next) => {
  try {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1]; 

    if (!token) {
      return res.status(401).json({ message: "Unauthorized: Please login" });
    }


    const decodedData = jwt.verify(token, process.env.JWT_SEC);

    req.user = await User.findById(decodedData.id);

    if (!req.user) {
      return res.status(404).json({ message: "User not found" });
    }

    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Session expired. Please log in again." });
    }
    res.status(500).json({ message: "Authorization error. Please log in." });
  }
};
