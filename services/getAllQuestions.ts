import { readdir } from "fs/promises";
import { CONTENT_DIR } from "./constant";
import { getQuestionBySlug } from "./getQuestionBySlug";

export async function getAllQuestions() {
  const slugs = await readdir(CONTENT_DIR);
  const questions = await Promise.all(
    slugs.map((s) => getQuestionBySlug(s.replace(/\.md$/, "")))
  );

  return questions;
}
