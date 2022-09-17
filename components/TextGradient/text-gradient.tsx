import { createElement } from "react";

import styles from "./text-gradient.module.css";

type TextGradientProps = {
  children: string;
  as?: string;
};

export function TextGradient({ children, as = "span" }: TextGradientProps) {
  return createElement(as, { className: styles.textGradient }, children);
}
