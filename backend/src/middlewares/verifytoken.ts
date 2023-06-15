import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const { JWT_KEY } = process.env;

export const VerifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers["token"] as string;
  try {
    if (!token) {
      return res.status(401).json({ message: "Forbidden" });
    }
    const decoded = jwt.verify(token, JWT_KEY!);
  } catch (error: any) {
    return res.json(error.message);
  }
  next();
};
