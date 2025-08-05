import { Rnd } from "react-rnd";
import './XPWindow.css';
import File from "../file-folder/file/File";
import { OpenFileInterface } from "../../types/globalTypes";
import OpenFile from "../file-folder/file/OpenFile";
import { FileIconInterface } from "./windowTypes";
import { useWindowContext } from '../../contexts/windowContext';
import XPWindowNav from "./XPWindowNav";
import { FOLDER_CLOSED_ICON } from "../constants/icon-file-paths";
import Sidebar from "./sidebar/Sidebar";
import { useState } from "react";

interface RenderContentProps {
  windowData: OpenFileInterface | FileIconInterface[] | FileIconInterface;
  type: string;
  fileSelected: FileIconInterface | null;
  setFileSelected: (file: FileIconInterface | null) => void;
}

const renderContent = (data: RenderContentProps) => {
  const { windowData, type, fileSelected, setFileSelected } = data;

  if(type === "file"){
    return <OpenFile data={data.windowData as OpenFileInterface} />
  }
  if(type === "folder"){
    return (windowData as FileIconInterface[])
      .map((file, key) => <File
        setFileSelected={setFileSelected}
        fileSelected={fileSelected}
        height={75}
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
  const [fileSelected, setFileSelected] = useState<FileIconInterface | null>(null);

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
      minWidth={'550px'}
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
            <Sidebar />
            <div className="inner-window-body-content">
              {renderContent({ windowData: data.windowData, type: data.type, fileSelected, setFileSelected })}
            </div>
          </div>
        </div>
      </div>
    </Rnd>
  );
};

export default Window;