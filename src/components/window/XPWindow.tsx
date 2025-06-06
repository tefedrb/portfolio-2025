import { Rnd } from "react-rnd";
import './XPWindow.css';
import ProjectFile from "../file/ProjectFile";


export interface RenderFilesProps {
  img: string;
  title: string;
}

const renderFiles = (files: { img: string, title: string }[]) => {
  console.log({ files }, "<--- files")
  return (files && files.length > 0) ? 
    files.map((file, key) => <ProjectFile img={file.img} title={file.title} key={key} />) : null;
}

export interface WindowProps {
  data: {
    name: string;
    files: RenderFilesProps[];
  };
  close: (name: string) => void;
}

const Window = ({ data, close }: WindowProps) => {
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
            <img src="/windows-xp-remix/folderClosedRemixWeb.webp" alt="Window Icon" className="window-icon" />
            <div className="title-bar-text">{data.name}</div>
          </div>
          <div className="title-bar-controls">
            <button className="minimize" aria-label="Minimize"></button>
            <button className="maximize" aria-label="Maximize"></button>
            <button 
              className="close"
              onTouchStart={() => close ? close(data.name) : null}
              onClick={() => close ? close(data.name) : null}  aria-label="Close"
            />
          </div>
        </div>
        <div className="window-body">
          <div className="inner-window-body">
            {renderFiles(data.files)}
          </div>
        </div>
      </div> 
    </Rnd>  
  );
};

export default Window;