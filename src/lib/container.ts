import { UserPostgresRepository } from "../modules/user/user.repository.js";
import type { AppContainer } from "../types/express.js";

export const getContainer = (db: any): AppContainer => ({
  userRepo: new UserPostgresRepository(db),
  // Add new repos here once, and they are available everywhere
});