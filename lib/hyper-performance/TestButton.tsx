import type { VFC } from "react";

export const TestButton: VFC = () => (
  <button onClick={() => console.log("i am interactive")}>
    Click me, I am interactive
  </button>
);
