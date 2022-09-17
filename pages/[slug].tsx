import { GetStaticProps } from "next";
import ReactMarkdown from "react-markdown";
import Head from "next/head";

import { getAllQuestions } from "services/getAllQuestions";
import { getQuestionBySlug } from "services/getQuestionBySlug";
import { Question } from "types/content";

import styles from "styles/question.module.css";

type QuestionBySlugProps = {
  question: Question;
};

export default function QuestionBySlug(props: QuestionBySlugProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>HowToReact - {props.question.data.indexes[0]}</title>
        <meta name="description" content={props.question.data.indexes[0]} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ReactMarkdown>{props.question.content}</ReactMarkdown>
    </div>
  );
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
