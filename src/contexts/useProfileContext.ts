import { useContext } from "react";
import { GlobalContext, ContextStateInterface } from "./globalContext";

export const useProfileContext = () => useContext<ContextStateInterface>(GlobalContext);
