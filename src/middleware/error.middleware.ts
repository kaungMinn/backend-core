import {  type Request, type Response, type NextFunction } from 'express';

export const errorHandler = (
  err: any, 
  req: Request, 
  res: Response, 
  next: NextFunction
) => {
  console.error('🚨 Global Error Boundary:', err);

  // Use our standardized response helper
  res.error(err.message || 'Internal Server Error', err.status || 500);
};