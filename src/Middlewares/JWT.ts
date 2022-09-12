import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

dotenv.config();

const jwtSecret: string = process.env.JWT_SECRET || "";

export const jwtMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader: string = req.headers.authorization || "";
    const token = authHeader?.split(" ")[1];
    jwt.verify(token, jwtSecret);
    next();
  } catch (err) {
    res.status(401).send({
      err: "Unauthorized User !!",
    });
  }
};
