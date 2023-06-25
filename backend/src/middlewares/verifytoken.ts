import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { IUserInfo } from "../types/user.types";
dotenv.config();

const { JWT_KEY } = process.env;

interface Extended extends Request {
  user?: IUserInfo;
}

export const VerifyToken = (
  req: Extended,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers["token"] as string;
  try {
    if (!token) {
      return res.status(401).json({ message: "Forbidden" });
    }
    const decoded = jwt.verify(token, JWT_KEY!) as IUserInfo;
    req.user = decoded;
  } catch (error: any) {
    return res.json(error.message);
  }
  next();
};
