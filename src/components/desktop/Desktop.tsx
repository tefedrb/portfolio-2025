import { useState, useEffect, useRef, MutableRefObject } from 'react';
import './Desktop.css';
import Window, { RenderFilesProps } from '../window/XPWindow';
import { projectFiles } from '../file/projectFileData';
import { UnknownObject } from '../../types/globalTypes';
import NewXPFolder from '../folder/NewXPFolder';
import  NewRecycleBin from '../recycle/NewRecycleBin';
import { FILE_ICON_PATH } from '../constants/icon-file-paths';
import Taskbar from '../taskbar/taskbar';

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
        title={"About.txt"} 
        img={FILE_ICON_PATH}
        alt={"about file"}
      />
       <NewXPFolder
        addWindow={addWindow}
        windowIsClosed={allOpenWindows["Projects"] ? false : true} 
        defaultPos={{x: 20, y: 40}}
        files={projectFiles}
        title={"Contact.txt"} 
        img={FILE_ICON_PATH}
        alt={"contact file"}
      />
      <NewXPFolder
        addWindow={addWindow}
        windowIsClosed={allOpenWindows["Projects"] ? false : true} 
        defaultPos={{x: 20, y: 60}}
        files={projectFiles}
        title={"Projects"}
      />
      {desktopInfo ? <NewRecycleBin desktopInfo={desktopInfo.current} /> : null}
      {renderWindows()}
      <Taskbar />
    </div>
  );
}

export default Desktop;