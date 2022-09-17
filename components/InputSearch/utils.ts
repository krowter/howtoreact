import { Question } from "types/content";

export function transformQuestionIndexes(question: Question) {
  const indexes = question.data.indexes.map((index, i) => ({
    index,
    slug: question.data.slug,
  }));

  return indexes;
}
