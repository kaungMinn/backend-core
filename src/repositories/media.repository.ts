// // src/repositories/media.repository.ts
// import { db } from '../db/index.js'; // Import your new db instance
// import { media } from '../db/schema.js';

// export const mediaRepository = {
//   async save(data: typeof media.$inferInsert) {
//     return await db.insert(media).values(data).returning();
//   }
// };