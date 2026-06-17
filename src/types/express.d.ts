import { DatabasePool } from 'some-postgres-pool-type';
import { RedisClientType } from 'redis';

export interface GlobalAppState {
  db: DatabasePool;
  redis: RedisClientType;
  requestId: string;
}

declare global {
  namespace Express {
    interface Request {
      state: GlobalAppState;
      user?: { id: string; role: string };
      db: any;
    };
    interface Response {
      success: (data: any) => void;
      error: (message: string, status?: number) => void;
    }
  }
}