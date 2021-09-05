import { hydrate } from "react-dom";
import { ClientRoot } from "./ClientRoot";

// Remove Next.js' fouc optimization as this hides the body element
document.querySelector('style[data-next-hide-fouc="true"]')?.remove();

// Create a dummy render root that we use to init the hydration
// We cannot hydrate our actual app because this would re-render
// our SSR generated HTML. So instead we render to a useless div
// and hydrate parts of our page with portals
const dummyRenderRoot = document.createElement("div");
document.body.appendChild(dummyRenderRoot);

hydrate(<ClientRoot />, dummyRenderRoot);
