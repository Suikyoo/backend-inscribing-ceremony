import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const dataTable = pgTable('data', {
	id: serial('id').primaryKey(),
	name: text('name').notNull(),
  //link to the image
  img: text('img')
})

export const studentsTable = pgTable('students', {
	id: serial('id').primaryKey(),
	name: text('name').notNull(),
  //link to the image
  img: text('img')
});

