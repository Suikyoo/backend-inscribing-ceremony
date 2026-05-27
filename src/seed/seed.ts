import type { InferSelectModel } from "drizzle-orm";
import { readFile } from "fs/promises";
import { studentsTable } from "../lib/db/schema.ts";
import { db } from "../lib/db/index.ts";
import { storageUrl } from "../lib/env/index.ts";

export async function seed() {
  const file = await readFile("src/seed/data.txt", "utf-8");

  const students: InferSelectModel<typeof studentsTable>[] = [];
  for (const entry of file.split("\n")) {
    const [name, id] = entry.split("-");
    if (!name || !id) {
      console.log(`ohoy skipped entry: ${entry}. name: ${name}, id: ${id}`);
      continue
    }
    const student: InferSelectModel<typeof studentsTable> = {
      name,
      id: Number(id),
      visible: false,
      img: storageUrl?.trim() + id.trim() + ".jpeg",
    }
    students.push(student);
  }

  const res = await db.insert(studentsTable).values(students);
  return res;
}

await seed();
