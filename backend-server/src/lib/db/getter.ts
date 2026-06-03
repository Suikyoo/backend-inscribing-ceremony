import { eq, type InferSelectModel } from "drizzle-orm";
import { db } from "./index.ts";
import { studentsTable, tagsTable } from "./schema.ts";

export async function getAllStudents(): Promise<InferSelectModel<typeof studentsTable>[]> {
  return await db.select().from(studentsTable);
};

export async function getAllStudentIds(): Promise<number[]> {
  const student_ids = await db.select({id: studentsTable.id}).from(studentsTable);
  return student_ids.map(i => i.id);
};
export async function getStudentsById(id: number): Promise<InferSelectModel<typeof studentsTable>[]> {
  return await db.select().from(studentsTable).where(eq(studentsTable.id, Number(id)));
}

export async function getTagByStudentId(id: number): Promise<InferSelectModel<typeof tagsTable>[]> {
  return await db.select().from(tagsTable).where(eq(tagsTable.userId, id))
}
