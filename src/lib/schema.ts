import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const media = pgTable('media', {
  id: serial('id').primaryKey(),
  filename: text('filename').notNull(),
  url: text('url').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});