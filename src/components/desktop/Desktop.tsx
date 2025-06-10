import { MutableRefObject, useEffect, useRef, useState } from 'react';
import './Desktop.css';
import Window from '../window/XPWindow';
import { Files } from '../file-folder/file/projectFileData';
import { OpenFileInterface } from '../../types/globalTypes';
import XPFolder from '../file-folder/folder/XPFolder';
import NewRecycleBin from '../recycle/NewRecycleBin';
import { FILE_ICON_PATH } from '../constants/icon-file-paths';
import Taskbar from '../taskbar/taskbar';
import { FileIconInterface } from '../window/windowTypes';
import { useWindowContext } from '../../contexts/windowContext';

const Desktop = () => {
  const [desktopInfo, updateDesktopInfo] = useState<MutableRefObject<undefined> | null>(null);

  const desktopRef = useRef();

  useEffect(() => {
    updateDesktopInfo(desktopRef);
  }, [desktopRef]);
  
  const { allOpenWindows, addWindow } = useWindowContext();

  const renderWindows = () => {
    const windowTitle = Object.keys(allOpenWindows);
    const allWindowData = Object.values(allOpenWindows);
    
    return allWindowData
      .map((window, idx) => 
        <Window 
          data={{ 
            type: window.type,
            name: windowTitle[idx], 
            windowData: window.type === "file" ? window.data as OpenFileInterface : window.data as FileIconInterface[] 
          }} 
          key={idx} 
        />
      );
  };

  return (
      <div ref={desktopRef as unknown as React.RefObject<HTMLDivElement>} className="desktop">
        {/* <XPFolder
          addWindow={addWindow}
          windowIsClosed={allOpenWindows["About"] ? false : true} 
          defaultPos={{x: 20, y: 20}}
          windowData={[]}
          title={"About.txt"} 
          img={FILE_ICON_PATH}
          alt={"about file"}
        /> */}
        {/* <XPFolder
          addWindow={addWindow}
          windowIsClosed={allOpenWindows["Projects"] ? false : true}
          defaultPos={{x: 20, y: 40}}
          windowData={Files}
          title={"Contact.txt"} 
          img={FILE_ICON_PATH}
          alt={"contact file"}
        /> */}
        <XPFolder
          addWindow={addWindow}
          windowIsClosed={allOpenWindows["Projects"] ? false : true} 
          defaultPos={{x: 20, y: 60}}
          windowData={Files}
          title={"Projects"}
        />
        {desktopInfo ? <NewRecycleBin desktopInfo={desktopInfo.current} /> : null}
        {renderWindows()}
        <Taskbar />
      </div>
  );
}

export default Desktop;