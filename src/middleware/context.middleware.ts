import { type Request, type Response, type NextFunction } from 'express';
import { getContainer } from '../lib/container.js';
import { db } from '../lib/db.js';

export const contextMiddleware = (req: Request, _res: Response, next: NextFunction) => {

  req.state = {
    db,
    container: getContainer(db),
    requestId: crypto.randomUUID(),
  };
  next();
};