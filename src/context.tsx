import { createContext } from "react";

export interface GlobalState {
  folderLoc: [number, number];
  filesDisplayed: Array<{name: string}>;
  fileLoaded: string;
  monitorPower: boolean;
}

export interface GlobalStateUpdater {
  (prop: keyof GlobalState, value: string | boolean | [number, number] | Array<{name: string}> | string, switcher: boolean): void;
}

export interface ContextState {
  globalState: GlobalState;
  files: {
    [key: string]: {
      link: string;
      name: string;
      content: JSX.Element;
    }
  };
  folder: {
    [key: string]: Array<{
      link: string;
      name: string;
      content: JSX.Element;
    }>;
  };
  openFolder: string;
  verticalDisplay: boolean;
  blueScreen: boolean;
  isMobileHack: boolean;
  changeOpenFolder: (folder: string) => void;
  globalStateUpdater: GlobalStateUpdater;
  rehydrateStateFromStorage: (item: string) => string | null;
  saveStateForMobileHack: (item: string, value: string | boolean) => void;
  checkStorageForMobileHack: () => boolean;
  signalMobileHack: React.Dispatch<React.SetStateAction<boolean>>;
  isVerticalDisplay: React.Dispatch<React.SetStateAction<boolean>>;
  updateBlueScreen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const defaultState: ContextState = {
  globalState: {
    folderLoc: [100, 20],
    filesDisplayed: [{name: "about.js"}],
    fileLoaded: "about.js",
    monitorPower: true
  },
  files: {},
  folder: {},
  openFolder: "About",
  verticalDisplay: false,
  blueScreen: false,
  isMobileHack: false,
  changeOpenFolder: () => {},
  globalStateUpdater: () => {},
  rehydrateStateFromStorage: () => null,
  saveStateForMobileHack: () => {},
  checkStorageForMobileHack: () => false,
  signalMobileHack: () => {},
  isVerticalDisplay: () => {},
  updateBlueScreen: () => {}
};

export const Context = createContext<ContextState>(defaultState);
