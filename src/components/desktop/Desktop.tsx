import { useState, useEffect, useRef, MutableRefObject } from 'react';
import './Desktop.css';
import XPFolder from '../folder/XPFolder';
import Window, { RenderFilesProps } from '../window/XPWindow';
import RecycleBin from '../recycle/RecycleBin';
import { projectData } from '../file/projectFileData';
import { UnknownObject } from '../../types/globalTypes';
const Desktop = () => {
  // Create functionality for opening and closing windows
  const [allOpenWindows, updateWindows] = useState<UnknownObject>({});
  const [desktopInfo, updateDesktopInfo] = useState<MutableRefObject<undefined> | null>(null);

  const desktopRef = useRef();

  useEffect(() => {
    console.log(desktopRef, "<--- cur")
    updateDesktopInfo(desktopRef);
  }, [desktopRef]);

  const addWindow = (key: string, data: UnknownObject) => {
    updateWindows(prevState => {
      data.name = key;
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

  interface WindowUnknown {
    name: string; 
    files: RenderFilesProps;
  }

  const renderWindows = () => {
    return Object
      .values(allOpenWindows)
      .map((win, idx) => <Window close={closeWindow} data={win as WindowUnknown} key={idx} />);
  };

  return (
    <div ref={desktopRef as unknown as React.RefObject<HTMLDivElement>} className="desktop">
      <XPFolder
        addWindow={(title: string, files: string[]) => addWindow(title, files)} 
        windowIsClosed={allOpenWindows["About"] ? false : true} 
        defaultPos={{x: 20, y: 20}}
        title={"About"} 
        files={[]}
      />
      <XPFolder 
        addWindow={addWindow}
        windowIsClosed={allOpenWindows["Projects"] ? false : true} 
        defaultPos={{x: 20, y: 40}}
        files={projectData}
        title={"Projects"} 
      />
      <XPFolder 
        addWindow={addWindow}
        windowIsClosed={allOpenWindows["Contact"] ? false : true} 
        defaultPos={{x: 20, y: 60}} 
        title={"Contact"} 
      />
      {desktopInfo ? <RecycleBin desktopInfo={desktopInfo.current} /> : null}
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