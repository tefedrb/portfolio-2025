import { useState, useEffect } from 'react';
import Folder from '../folder/Folder';
import styled from 'styled-components';
import { useProfileContext } from '../../useProfileContext';

interface NavWrapperProps {
  name?: string;
}

const NavWrapper = styled.nav<NavWrapperProps>`
  pointer-events: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  flex-grow: 1;
  width: 100%;

  @media (max-height: 400px) and (max-width: 700px){
    width: 100%;
  }

  @media (max-width: 948px){
    padding: 1%;
  }
  @media (max-width: 948px) and (min-height: 500px){
    flex-direction: row;
    margin-top: 0px;
    background-color: rgba(79, 79, 79, 0.73);
    box-shadow: 1px -5px 27px -7px rgba(79,79,79,0.73);
  }
`

interface NavigationPanelProps {
  changeFolder: (folder: string) => void;
}

const NavigationPanel = (props: NavigationPanelProps) => {
  const [ openFolder, changeOpenFolder ] = useState("About");
  const { 
    folder, 
    saveStateForMobileHack, 
    rehydrateStateFromStorage, 
    checkStorageForMobileHack, 
    globalState, 
    globalStateUpdater 
  } = useProfileContext();
  const { fileLoaded } = globalState;

  useEffect(() => {

    /* TODO: Create a centralized function in context that has all the switches
        and updates in it's own state - this function will rehydrate all the 
        components when hack is initiated and window gets reloaded */

    if(checkStorageForMobileHack()){
      console.log('checkStorageForMobileHack', checkStorageForMobileHack());
      globalStateUpdater("fileLoaded", rehydrateStateFromStorage('fileOpen') as string, false);
      changeOpenFolder(rehydrateStateFromStorage('folderOpen') as string);

      saveStateForMobileHack('isMobileHack', 'false');
    } else {
      saveStateForMobileHack('fileOpen', fileLoaded);
      saveStateForMobileHack('folderOpen', openFolder);
    }

    props.changeFolder(openFolder);
    globalStateUpdater("filesDisplayed", folder[openFolder], false);
  }, [
    // openFolder, 
    // fileLoaded, 
    globalStateUpdater, 
    props, 
    rehydrateStateFromStorage, 
    saveStateForMobileHack, 
    checkStorageForMobileHack, 
    folder
  ]);

  return (
    <NavWrapper name={"navWrapper"}> 
      <Folder
        changeOpenFolder={changeOpenFolder} 
        openFolder={openFolder} 
        title={"Projects"}
        files={folder["Projects"]}
      />
      <Folder      
        changeOpenFolder={changeOpenFolder} 
        openFolder={openFolder} 
        title={"About"}
        files={folder["About"]}
      />
      <Folder 
        changeOpenFolder={changeOpenFolder} 
        openFolder={openFolder}
        title={"Contact"}
        files={folder["Contact"]}
      />
    </NavWrapper>
  )
}

export default NavigationPanel;