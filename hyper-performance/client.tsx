import { hydrate } from "react-dom";
import { ClientRoot } from "./ClientRoot";

document.querySelector('style[data-next-hide-fouc="true"]')?.remove();

const appElement = document.getElementById("__next");

if (!appElement) {
  throw new Error("Expected to find and element with the ID '__next'");
}

hydrate(<ClientRoot />, appElement);
