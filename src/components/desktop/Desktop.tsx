import { useState, useEffect, useRef, MutableRefObject } from 'react';
import './Desktop.css';
import Window, { RenderFilesProps } from '../window/XPWindow';
import { projectFiles } from '../file/projectFileData';
import { UnknownObject } from '../../types/globalTypes';
import NewXPFolder from '../folder/NewXPFolder';
import NewRecycleBin from '../recycle/NewRecycleBin';
const Desktop = () => {
  // Create functionality for opening and closing windows
  const [allOpenWindows, updateWindows] = useState<UnknownObject>({});
  const [desktopInfo, updateDesktopInfo] = useState<MutableRefObject<undefined> | null>(null);

  const desktopRef = useRef();

  useEffect(() => {
    updateDesktopInfo(desktopRef);
  }, [desktopRef]);

  const addWindow = ({ key, data }: { key: string, data: UnknownObject[] }) => {
    updateWindows(prevState => {
      // data.name = key;
      return {...prevState, [key]: data}
    });
  }

  const closeWindow = (windowName: string) => {
    updateWindows(prevState => {
      const state: UnknownObject = {...prevState};
      delete state[windowName]
      return state;
    });
  }

  const renderWindows = () => {
    console.log({ allOpenWindows }, "<--- allOpenWindows")
    const windowTitle = Object.keys(allOpenWindows);
    return Object
      .values(allOpenWindows)
      .map((files, idx ) => 
        <Window close={closeWindow} data={{ name: windowTitle[idx], files: files as RenderFilesProps[] }} key={idx} />
      );
  };

  return (
    <div ref={desktopRef as unknown as React.RefObject<HTMLDivElement>} className="desktop">
      <NewXPFolder
        addWindow={addWindow}
        windowIsClosed={allOpenWindows["About"] ? false : true} 
        defaultPos={{x: 20, y: 20}}
        files={[]}
        title={"About"} 
        img={"/windows-xp/File.ico"}
        alt={"about file"}
      />
       <NewXPFolder
        addWindow={addWindow}
        windowIsClosed={allOpenWindows["Projects"] ? false : true} 
        defaultPos={{x: 20, y: 40}}
        files={projectFiles}
        title={"Contact"} 
        img={"/windows-xp/File.ico"}
        alt={"contact file"}
      />
      <NewXPFolder
        addWindow={addWindow}
        windowIsClosed={allOpenWindows["Projects"] ? false : true} 
        defaultPos={{x: 20, y: 40}}
        files={projectFiles}
        title={"Projects"} 
        img={"/windows-xp/FolderClosed.ico"}
        alt={"/windows-xp/FolderClosed.ico"}
      />
      
      {/* <XPFolder 
        addWindow={addWindow}
        windowIsClosed={allOpenWindows["Projects"] ? false : true} 
        defaultPos={{x: 20, y: 40}}
        files={projectFiles}
        title={"Projects"} 
      />

      <XPFolder 
        addWindow={addWindow}
        windowIsClosed={allOpenWindows["Contact"] ? false : true} 
        defaultPos={{x: 20, y: 60}} 
        title={"Contact"} 
        files={[]}
      /> */}
      {desktopInfo ? <NewRecycleBin desktopInfo={desktopInfo.current} /> : null}
      {renderWindows()}
      <div className="title-bar toolbar">
        <div className="start-btn">
          <span>Start</span>
        </div>
      </div>
    </div>
  );
}

export default Desktop;