import { UserPostgresRepository } from "../modules/user/user.repository.js";
import type { AppContainer } from "../types/express.js";
import type { Database } from "./db.js";

export const getContainer = (db: Database): AppContainer => ({
  userRepo: new UserPostgresRepository(db),
});