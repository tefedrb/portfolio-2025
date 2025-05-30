import { useDoubleClick } from "../hooks/hooks";
import { isMobile } from "react-device-detect";
import styled from "styled-components";
import Draggable from 'react-draggable'; 
import { UnknownObject } from "../../types/globalTypes";
import { FOLDER_CLOSED_PATH, FOLDER_OPEN_PATH } from "../constants/icon-file-paths";

interface FolderWrapperProps {
  name: string;
}

const FolderWrapper = styled.div<FolderWrapperProps>`
  display: flex;
  flex-direction: column;
  width: 75px;
  height: auto;
  align-items: center;
  img {
    width: 100%;
    height: 100%;
  }
  // ADJUSTING FOR MOBILE VIEW
  @media (max-width: 948px) and (min-height: 500px) {
    // width: auto;
    width: 55px;
    height: auto;
    margin-right: 0;
  }
  @media (max-width: 667px) and (max-height: 375px) {
  
  }
  
  @media screen and (max-width: 651px), screen and (max-height: 757px) {
    margin-top: 2%;
    color: green;
    flex-direction: column;
    justify-content: center;
  }
`;

interface FolderProps {
  title: string;
  files: UnknownObject[];
  windowIsClosed: boolean;
  defaultPos: { x: number; y: number };
  img?: string;
  alt?: string;
  addWindow: ({ key, data }: {
    key: string;
    data: UnknownObject[];
  }) => void;
}

const NewXPFolder = (props: FolderProps) => {
  const [ doubleTouchCallback ] = useDoubleClick(handleClick, isMobile ? 'touchstart' : 'click');

  const img = props.windowIsClosed ? FOLDER_CLOSED_PATH : FOLDER_OPEN_PATH;

  function handleClick(){
    if(props.windowIsClosed){
      props.addWindow({ key: props.title, data: props.files });
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

export default NewXPFolder;
