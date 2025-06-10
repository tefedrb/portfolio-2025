import { useState, useCallback, useMemo } from 'react';

import Project from '../components/folderContents/Project';
import Equipped from '../components/folderContents/Equipped';
import Bookshop from '../components/folderContents/Bookshop';
import About from '../components/folderContents/About';
import Contact from '../components/folderContents/Contact';
import { ContextStateInterface } from '../contexts/globalContext';

export const ProviderValue = () => {
  const [ openFolder, setOpenFolder ] = useState("About");
  const changeOpenFolder = useCallback((folder: string) => {
    console.log({ clicking: "here", folder });
    setOpenFolder(folder);
  }, [setOpenFolder]);

  const [ blueScreen, updateBlueScreen ] = useState(false);

  const [ isMobileHack, signalMobileHack ] = useState(false);

  const files = useMemo(() => {
    return {
      "equipped.java":
        {
          link: "Equipped",
          name: "equipped.java",
          content: <Project component={<Equipped/>}/>
        },
      "bookshop-crutch.js":
        {
          link: "Bookshop-Crutch",
          name: "bookshop-crutch.js",
          content: <Project component={<Bookshop/>}/> 
        }, 
      // {
      //     name: "movie-db.js"
      // }
      "about.js":
        {   
          link: "About",
          name: "about.js",
          content: <Project component={<About/>}/>
        },
      "contact.js": 
        {   
          link: "Contact",
          name: "contact.js",
          content: <Project flexbox={true} component={<Contact/>}/>
        } 
    }
  }, []);

  const folder = useMemo(() => {
    return {
      "About": [files["about.js"]],
      "Projects": [files["equipped.java"], files["bookshop-crutch.js"]],
      "Contact": [files["contact.js"]],
    }
  }, [files]);

  interface GlobalState {
    folderLoc: [number, number];
    filesDisplayed: Array<{name: string}>;
    fileLoaded: string;
    monitorPower: boolean;
  }

  const [ globalState, setGlobalState ] = useState<GlobalState>({
    folderLoc: [100, 20],
    filesDisplayed: [{name: "about.js"}],
    fileLoaded: "about.js",
    monitorPower: true
  });

  const [ verticalDisplay, isVerticalDisplay ] = useState(false);

  const globalStateUpdater = useCallback((
    prop: keyof GlobalState, 
    value: string | boolean | [number, number] | Array<{name: string}>, 
    switcher: boolean
  ) => {
    if(switcher){
      value = !globalState[prop];
    }
    setGlobalState(prev => {
      return {
        ...prev,
        [prop]: value
      }
    })
  }, [globalState]);

  const saveStateForMobileHack = useCallback((item: string, value: string | boolean) => {
    localStorage.setItem(`${item}`, `${value}`);
  }, []);

  const checkStorageForMobileHack = useCallback(() => {
    const mobileHack = localStorage.getItem('isMobileHack');
    if(mobileHack === 'true'){
      return true;
    } else {
      return false;
    }
  }, []);

  const rehydrateStateFromStorage = useCallback((item: string) => {
    return localStorage.getItem(item);
  }, []);

  const value = useMemo((): ContextStateInterface => {
    return { 
      globalState, 
      files,
      folder,
      verticalDisplay,
      blueScreen,
      isMobileHack,
      openFolder,
      changeOpenFolder,
      globalStateUpdater,
      rehydrateStateFromStorage,
      saveStateForMobileHack,
      checkStorageForMobileHack,
      signalMobileHack,
      isVerticalDisplay,
      updateBlueScreen
    }
  }, [
    globalState, 
    files, 
    folder, 
    verticalDisplay, 
    blueScreen, 
    isMobileHack, 
    openFolder,
    changeOpenFolder,
    globalStateUpdater, 
    rehydrateStateFromStorage,
    saveStateForMobileHack,
    checkStorageForMobileHack,
    signalMobileHack,
    isVerticalDisplay,
    updateBlueScreen
  ]);
  return value;
}
