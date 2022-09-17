import styles from "./input-suggestions.module.css";

type InputSuggestionsProps = {
  suggestions: (string | null)[];
};

export function InputSuggestions({ suggestions }: InputSuggestionsProps) {
  return (
    <ul className={styles.suggestions}>
      {suggestions.map((suggestion) =>
        suggestion === null ? null : (
          <li
            dangerouslySetInnerHTML={{ __html: suggestion }}
            className={styles.suggestion}
          ></li>
        )
      )}
    </ul>
  );
}
