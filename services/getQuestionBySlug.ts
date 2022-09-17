import { join } from "path";
import matter from "gray-matter";
import { readFile } from "fs/promises";

import { CONTENT_DIR } from "./constant";

export async function getQuestionBySlug(slug: string) {
  const fullPath = join(CONTENT_DIR, `${slug}.md`);
  const fileContent = await readFile(fullPath, "utf-8");

  const { data, content } = matter(fileContent);

  data.slug = slug;

  return { data, content };
}
