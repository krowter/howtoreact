import React, { useMemo, useState } from "react";
import fuzzysort from "fuzzysort";

import { InputSuggestions } from "./InputSuggestions";
import { Question } from "types/content";

import styles from "./input-search.module.css";
import { transformQuestionIndexes } from "./utils";

export function InputSearch({ questions }: { questions: Question[] }) {
  const questionIndexes = useMemo(
    () => questions.map(transformQuestionIndexes).flat(2),
    [questions.length]
  );

  const [suggestions, setSuggestions] = useState<
    Fuzzysort.KeyResults<{ index: string; slug: string }>
    // @ts-ignore TODO: find out about this 'total' thing
  >([]);

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    const keyword = e.target.value;

    let result = fuzzysort.go(keyword, questionIndexes, { key: "index" });

    result.forEach((single) => {
      single.obj.index = fuzzysort.highlight(single, "<b>", "</b>") as string;
    });
    setSuggestions(result);
  }

  return (
    <div className={styles.prefixWrapper}>
      <span className={[styles.prefix, styles.capsule].join(" ")}>#ask</span>

      <div className={styles.inputWrapper}>
        <input
          onChange={handleSearch}
          className={[styles.input, styles.capsule].join(" ")}
        />

        <InputSuggestions suggestions={suggestions} />
      </div>
    </div>
  );
}
