import { InputSuggestions } from "./InputSuggestions";

import styles from "./input-search.module.css";

export function InputSearch() {
  return (
    <div className={styles.prefixWrapper}>
      <span className={[styles.prefix, styles.capsule].join(" ")}>#ask</span>

      <div className={styles.inputWrapper}>
        <input className={[styles.input, styles.capsule].join(" ")} />

        <InputSuggestions />
      </div>
    </div>
  );
}
