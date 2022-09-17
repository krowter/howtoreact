import type { NextPage } from "next";
import Head from "next/head";

import { TextGradient } from "components/TextGradient";
import { InputSearch } from "components/InputSearch";
import { getAllQuestions } from "services/getAllQuestions";
import { Question } from "types/content";

import styles from "styles/home.module.css";

type HomeProps = {
  questions: Question[];
};

function Home(props: HomeProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>HowToReact</title>
        <meta
          name="description"
          content="Koleksi pertanyaan umum mengenai react js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <span className={styles.heading}>
          HowTo<TextGradient>React</TextGradient>
        </span>

        <p className={styles.description}>
          Koleksi pertanyaan-pertanyaan umum mengenai React JS
        </p>
        <InputSearch questions={props.questions} />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const questions = await getAllQuestions();
  return {
    props: { questions },
  };
}

export default Home;
