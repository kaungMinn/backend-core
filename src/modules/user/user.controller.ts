import { type Request, type Response, type NextFunction } from 'express';
import { asyncHandler } from '../../middleware/asyncHandler.js';
import type { RegisterUserDto } from './user.dto.js';


export const getUser = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;

  if (typeof id !== 'string') {
    return res.error('Invalid user ID provided', 400);
  }

  const {userRepo} = req.state.container; 

  const user = await userRepo.findById(id);

  if (!user) return res.error('User not found', 404);
  
  res.success(user);
});



export const register = async (req: Request, res: Response) => {
  const dto : RegisterUserDto = {
    email: req.body.email,
    password: req.body.password,
  };

  const user = await req.state.container.userService.register(dto);
  res.success(user)
}