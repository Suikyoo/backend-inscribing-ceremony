import { sql } from "drizzle-orm";
import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const dataTable = pgTable('data', {
	id: serial('id').primaryKey(),
	name: text('name').notNull(),
  //link to the image
  imgs: text('imgs').array().notNull().default(sql`ARRAY[]::text[]`),
})

export const studentsTable = pgTable('students', {
	id: serial('id').primaryKey(),
	name: text('name').notNull(),
  //link to the image
  imgs: text('imgs').array().notNull().default(sql`ARRAY[]::text[]`),
});
export const tagsTable = pgTable('tags', {
	id: serial('id').primaryKey(),
  userId: serial('user_id'),
  title: text("title").notNull(),
  metaData1: text("metadata_1"),
  metaData2: text("metadata_2"),
});

