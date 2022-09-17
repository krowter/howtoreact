import { GetStaticProps } from "next";
import ReactMarkdown from "react-markdown";

import { getAllQuestions } from "services/getAllQuestions";
import { getQuestionBySlug } from "services/getQuestionBySlug";
import { Question } from "types/content";

type QuestionBySlugProps = {
  question: Question;
};

export default function QuestionBySlug(props: QuestionBySlugProps) {
  return <ReactMarkdown>{props.question.content}</ReactMarkdown>;
}

export const getStaticProps: GetStaticProps = async function ({ params }) {
  const question = await getQuestionBySlug(params?.slug as string);

  return {
    props: { question },
  };
};

export const getStaticPaths = async () => {
  const questions = await getAllQuestions();

  return {
    paths: questions.map((q) => ({
      params: {
        slug: q.data.slug,
      },
    })),
    fallback: false,
  };
};
