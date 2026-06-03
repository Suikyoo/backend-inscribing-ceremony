import type { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { readFile } from "fs/promises";
import { dataTable, studentsTable, tagsTable } from "../lib/db/schema.ts";
import { db } from "../lib/db/index.ts";
import { join } from "path";

export async function seed() {
  const file = await readFile("src/seed/data.txt", "utf-8");

  const students: InferSelectModel<typeof dataTable>[] = [];
  const tags: InferInsertModel<typeof tagsTable>[] = [];

  for (const entry of file.split("\n")) {
    const [name, id] = entry.split("-");
    if (!name || !id) {
      console.log(`ohoy skipped entry: ${entry}. name: ${name}, id: ${id}`);
      continue
    }
    const student: InferSelectModel<typeof dataTable> = {
      name,
      id: Number(id),
      imgs: [
        join(id.trim() + "_0" + ".jpeg"),
        join(id.trim() + "_1" + ".jpeg"),
      ],
    }

    const tag: InferInsertModel<typeof tagsTable> = {
      userId: Number(id),
      title: "Data",
      metaData1: "metadata 1",
      metaData2: "metadata 2",
    }
    students.push(student);
    tags.push(tag);
  }

  await db.delete(tagsTable);
  console.log("tags table cleared");
  await db.insert(tagsTable).values(tags);
  console.log("tags table seeded");

  await db.delete(dataTable);
  console.log("data table cleared");
  await db.insert(dataTable).values(students);
  console.log("data table seeded");

  await db.delete(studentsTable);
  console.log("students table cleared");
  
}

await seed();
