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

