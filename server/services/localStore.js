import fs from "node:fs/promises";
import { randomUUID } from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";
const dataFile = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "../local-data.json",
);
export async function readLocal() {
  try {
    return JSON.parse(await fs.readFile(dataFile, "utf8"));
  } catch {
    return { leads: [], users: [], subscribers: [] };
  }
}
export async function writeLocal(data) {
  await fs.writeFile(dataFile, JSON.stringify(data, null, 2), "utf8");
}
export async function insertLocal(collection, entry) {
  const data = await readLocal();
  const item = {
    _id: randomUUID(),
    createdAt: new Date().toISOString(),
    ...entry,
  };
  data[collection].unshift(item);
  await writeLocal(data);
  return item;
}
