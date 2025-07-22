import { Rnd } from "react-rnd";
import './XPWindow.css';
import File from "../file-folder/file/File";
import { OpenFileInterface } from "../../types/globalTypes";
import OpenFile from "../file-folder/file/OpenFile";
import { FileIconInterface } from "./windowTypes";
import { useWindowContext } from '../../contexts/windowContext';
import XPWindowNav from "./XPWindowNav";
import { FOLDER_CLOSED_ICON } from "../constants/icon-file-paths";
// import { Files } from "../file-folder/file/projectFileData";

const renderContent = (data: { windowData: OpenFileInterface | FileIconInterface[] | FileIconInterface, type: string }) => {
  // TODO: Add a check to see if the data is a file or a folder
  // TODO: If it is a file, render the file
  // TODO: If it is a folder, render the folder
  // TODO: If it is a folder, render the files in the folder
  // TODO: If it is a folder, render the folders in the folder
  // TODO: If it is a folder, render the files in the folder
  const { windowData, type } = data;

  if(type === "file"){
    return <OpenFile data={data.windowData as OpenFileInterface} />
  }
  if(type === "folder"){
    return (windowData as FileIconInterface[])
      .map((file, key) => <File
        img={file.img} 
        title={file.title} 
        key={key}
        file={file}
        windowIsClosed={true}
        // defaultPos={{x: 0, y: 0}}
        addWindow={() => {}}
      />);
  }
}

export interface WindowProps {
  data: {
    type: string;
    name: string;
    windowData: OpenFileInterface | FileIconInterface[];
  };
}

const Window = ({ data }: WindowProps) => {
  const { closeWindow } = useWindowContext();

  return (
    // find the middle of the screen and minus half the windows height & width to find the xy
    <Rnd
      default={{
        x: (window.innerWidth / 2) - (window.innerWidth) /2.5,
        y: (window.innerHeight / 2) - (window.innerHeight) /2.2,
        width: window.innerWidth - (window.innerWidth/4),
        height: window.innerHeight - (window.innerHeight/3),
      }}
      minHeight={'175px'}
      minWidth={'175px'}
    >
      <div className="window custom-window">
        <div className="title-bar">
          <div className="title-bar-header">
            <img src={FOLDER_CLOSED_ICON} alt="Window Icon" className="window-icon" />
            <div className="title-bar-text">{data.name}</div>
          </div>
          <div className="title-bar-controls">
            <button 
              className="minimize" 
              aria-label="Minimize"
              onClick={() => console.log("minimize")}
            />
            <button 
              className="maximize" 
              aria-label="Maximize" 
              onClick={() => console.log("maximize")}
            />
            <button 
              className="close"
              onTouchStart={() => closeWindow(data.name)}
              onClick={() => closeWindow(data.name)}  
              aria-label="Close"
            />
          </div>
        </div>
        <div className="window-body">
          <XPWindowNav />
          <div className="inner-window-body">
            <div className="inner-window-sidebar"></div>
            <div className="inner-window-body-content">
              {renderContent({ windowData: data.windowData, type: data.type })}
            </div>
          </div>
        </div>
      </div>
    </Rnd>
  );
};

export default Window;