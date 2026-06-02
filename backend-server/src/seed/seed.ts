import type { InferSelectModel } from "drizzle-orm";
import { readFile } from "fs/promises";
import { dataTable } from "../lib/db/schema.ts";
import { db } from "../lib/db/index.ts";
import { join } from "path";

export async function seed() {
  const file = await readFile("src/seed/data.txt", "utf-8");

  const students: InferSelectModel<typeof dataTable>[] = [];
  for (const entry of file.split("\n")) {
    const [name, id] = entry.split("-");
    if (!name || !id) {
      console.log(`ohoy skipped entry: ${entry}. name: ${name}, id: ${id}`);
      continue
    }
    const student: InferSelectModel<typeof dataTable> = {
      name,
      id: Number(id),
      img: join("images", id.trim() + ".jpeg"),
    }
    students.push(student);
  }

  const res = await db.insert(dataTable).values(students);
  return res;
}

await seed();
