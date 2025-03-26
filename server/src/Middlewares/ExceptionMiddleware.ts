import type { Exception } from "@Exceptions/Exception";
import type { Request, Response, NextFunction } from "express";

export const ExceptionMiddleware = async (err: Exception, req: Request, res: Response, next: NextFunction) => {
  res.status(err.status).json({ message: err.message });
};