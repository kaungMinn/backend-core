import { type Request, type Response, type NextFunction } from 'express';

export const contextMiddleware = (req: Request, _res: Response, next: NextFunction) => {
  // Inject your db client (or pool) here
  req.db = { connected: true }; 
  next();
};