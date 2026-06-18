import { UserPostgresRepository } from './user.repository.js';
import bcrypt from 'bcrypt';

export class UserService {
  constructor(private userRepo: UserPostgresRepository) {}

  async register(userData: any) {

    const existing = await this.userRepo.findByEmail(userData.email);
    if (existing) throw new Error("Email already taken");

    const hashedPassword = await bcrypt.hash(userData.password, 10);

    return await this.userRepo.create({
      email: userData.email,
      passwordHash: hashedPassword,
    });
  }
}