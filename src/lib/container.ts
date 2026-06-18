import { UserService } from "@/modules/user/user.service.js";
import { UserPostgresRepository } from "../modules/user/user.repository.js";
import type { AppContainer } from "../types/express.js";
import type { Database } from "./db.js";

export const getContainer = (db: Database): AppContainer => {
  const userRepo = new UserPostgresRepository(db);
  const userService = new UserService(userRepo);
  return ({
    userRepo,
    userService 
  })
};