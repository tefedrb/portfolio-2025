import { useContext } from "react";
import { Context, ContextState } from "./context";

export const useProfileContext = () => useContext<ContextState>(Context);