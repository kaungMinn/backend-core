import type { UserRepository } from '../modules/user/user.repository.ts';
import type { UserService } from '@/modules/user/user.service.ts';
import type { Database } from '@/lib/db.ts';

export interface AppContainer {
  userRepo: UserRepository;
  userService: UserService;
}

export interface GlobalAppState {
  db: Database;
  container: AppContainer;
  requestId: string;
}

declare global {
  namespace Express {
    interface Request {
      state: GlobalAppState;
      user?: { id: string; role: string };
    };
    interface Response {
      success: (data: any) => void;
      error: (message: string, status?: number) => void;
    }
  }
}