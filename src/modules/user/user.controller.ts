import { type Request, type Response, type NextFunction } from 'express';
import { asyncHandler } from '../../middleware/asyncHandler.js';


export const getUser = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;

  if (typeof id !== 'string') {
    return res.error('Invalid user ID provided', 400);
  }
  
  const user = await req.state.userRepo.findById(id);
  
  if (!user) return res.error('User not found', 404);
  
  res.success(user);
});