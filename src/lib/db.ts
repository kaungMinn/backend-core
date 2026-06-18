// import pg from 'pg';
// const { Pool } = pg;

import {drizzle} from 'drizzle-orm/postgres-js';
import postgres from "postgres";
import { config } from "../config/config.js";

// const connectionString = process.env.DATABASE_URL || 'postgresql://user:password@localhost:5432/your_db_name';

// export const db = new Pool({
//   connectionString,
//   max: 20, 
//   idleTimeoutMillis: 30000,
//   connectionTimeoutMillis: 2000,
// });

// db.on('error', (err) => {
//   console.error('Unexpected error on idle client', err);
//   process.exit(-1);
// });

const queryClient = postgres(config.DATABASE_URL);
export const db = drizzle(queryClient);

export type Database = typeof db;