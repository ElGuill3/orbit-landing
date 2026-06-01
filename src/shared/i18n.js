import { createContext, useContext } from "react";
import translations from "./translations.js";

const LangCtx = createContext();
const useLang = () => useContext(LangCtx);

export { LangCtx, useLang, translations };
