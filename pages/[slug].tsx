import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { getQuestionBySlug } from "services/getQuestionBySlug";

export default function QuestionBySlug(props) {
  const {
    query: { slug },
  } = useRouter();

  return <h1>asd</h1>;
}

export async function getStaticProps({ params }: GetStaticProps) {
  //   const questions = await getQuestionBySlug();
  return {
    // props: { questions },
    props: 123,
  };
}
