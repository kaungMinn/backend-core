export interface UserRepository {
  findById(id: string): Promise<any>;
}

export class UserPostgresRepository implements UserRepository {
  constructor(private db: any) {} // Injected DB client

  async findById(id: string) {
    // Logic: req.state.db.query(...)
    return { id, name: "John Doe" };
  }
}