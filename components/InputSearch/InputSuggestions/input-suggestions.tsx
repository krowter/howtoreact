import Link from "next/link";

import styles from "./input-suggestions.module.css";

type InputSuggestionsProps = {
  suggestions: Fuzzysort.KeyResults<{ index: string; slug: string }>;
};

export function InputSuggestions({ suggestions }: InputSuggestionsProps) {
  return (
    <ul className={styles.suggestions}>
      {suggestions.map((suggestion) =>
        suggestion === null ? null : (
          <Link href={suggestion.obj.slug} key={suggestion.obj.index}>
            <li
              dangerouslySetInnerHTML={{ __html: suggestion.obj.index }}
              className={styles.suggestion}
            ></li>
          </Link>
        )
      )}
    </ul>
  );
}
