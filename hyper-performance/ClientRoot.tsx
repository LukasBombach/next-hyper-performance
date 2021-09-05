import { createPortal } from "react-dom";
import { useState, useEffect } from "react";
import { TestButton } from "./TestButton";

import type { VFC } from "react";

const HydratedTestButton = () => {
  const domNode = document.querySelector("button");

  if (!domNode) {
    console.error(new Error("exected to find a button element"));
    return null;
  }

  return createPortal(<TestButton />, domNode);
};

export const ClientRoot: VFC = () => {
  const [isInHydration, setIsInHydration] = useState(true);

  useEffect(() => {
    setIsInHydration(false);
  }, [isInHydration]);

  return isInHydration ? null : <HydratedTestButton />;
};
