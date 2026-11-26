import { createContext, type ElementType } from "react";

/** Element AppButton renders for links. Defaults to `<a>`; a router app provides its own (see main.tsx). */
export const LinkContext = createContext<ElementType>("a");
