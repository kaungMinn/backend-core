import type { Database } from "@/lib/db.js";
import  { users } from "./user.schema.js";
import { eq } from "drizzle-orm";

export interface UserRepository {
  findById(id: string): Promise<any>;
  findByEmail(email: string): Promise<any>; 
}

export class UserPostgresRepository implements UserRepository {
  constructor(private db: Database) {} 
  findById(id: string): Promise<any> {
    throw new Error("Method not implemented.");
  }

  async findByEmail(email: string) {
    // Implement the logic
    const result = await this.db.select().from(users).where(eq(users.email, email));
    return result[0];
  }

  async create(data: typeof users.$inferInsert) {
      return await this.db.insert(users).values(data).returning();
    }
}