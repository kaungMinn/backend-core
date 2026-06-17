import { DatabasePool } from 'some-postgres-pool-type';
import type { UserRepository } from '../modules/user/user.repository.ts';

export interface AppContainer {
  userRepo: UserRepository;
  // Easily add more as your app grows:
  // orderRepo: OrderRepository;
  // productRepo: ProductRepository;
}

export interface GlobalAppState {
  db: DatabasePool;
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