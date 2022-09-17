import type { NextPage } from "next";
import Head from "next/head";

import { TextGradient } from "components/TextGradient";

import styles from "../styles/home.module.css";
import { InputSearch } from "components/InputSearch";

const Home: NextPage = () => {
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

        <InputSearch />
      </main>
    </div>
  );
};

export default Home;
