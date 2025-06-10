import { useDoubleClick } from "../../hooks/hooks";
import { isMobile } from "react-device-detect";
import Draggable from 'react-draggable'; 
import { OpenFileInterface } from "../../../types/globalTypes";
import { FOLDER_CLOSED_PATH, FOLDER_OPEN_PATH } from "../../constants/icon-file-paths";
import FolderWrapper from "../shared/FolderFileWrapper";
import { FileIconInterface } from "../../window/windowTypes";

interface FolderProps {
  title: string;
  windowData: OpenFileInterface | FileIconInterface[];
  windowIsClosed: boolean;
  defaultPos: { x: number; y: number };
  img?: string;
  alt?: string;
  addWindow: ({ key, data }: {
    key: string;
    type: string;
    data: OpenFileInterface | FileIconInterface[];
  }) => void;
}

const XPFolder = (props: FolderProps) => {
  const [ doubleTouchCallback ] = useDoubleClick(handleClick, isMobile ? 'touchstart' : 'click');

  const img = props.windowIsClosed ? FOLDER_CLOSED_PATH : FOLDER_OPEN_PATH;

  function handleClick(){
    if(props.windowIsClosed){
      props.addWindow({ type: "folder", key: props.title, data: props.windowData });
    }
  };

  return (
		<Draggable
      bounds={'parent'} 
      defaultPosition={props.defaultPos}
    >
			<FolderWrapper ref={doubleTouchCallback} name={"folderWrSap"}>
        <img draggable={false} src={props.img ? props.img : img} alt={props.title} />
        <label>{props.title}</label>
			</FolderWrapper>
		</Draggable>
  );
};

export default XPFolder;
