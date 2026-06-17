import { type Request, type Response, type NextFunction } from 'express';
import { UserPostgresRepository } from '../modules/user/user.repository.js';

export const contextMiddleware = (req: Request, _res: Response, next: NextFunction) => {
  // Inject your db client (or pool) here
  const db = { connected: true }; 

  req.state = {
    db,
    userRepo: new UserPostgresRepository(db),
    requestId: crypto.randomUUID(),
  };
  next();
};