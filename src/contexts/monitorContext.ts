import { createContext } from "react";

export interface MonitorContextState {
  window: {
    [key: string]: {
      name: string;
      files: File[];
    };
  };
}

const defaultState = {
  window: {},
}

export const MonitorContext = createContext<MonitorContextState>(defaultState);