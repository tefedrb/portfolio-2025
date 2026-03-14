import { useDoubleClick } from "../../hooks/hooks";
import { isMobile } from "react-device-detect";
import Draggable from 'react-draggable'; 
import { OpenFileInterface } from "../../../types/globalTypes";
import { FOLDER_CLOSED_PATH, FOLDER_OPEN_PATH } from "../../constants/icon-file-paths";
import styles from "../shared/FolderFileWrapper.module.css";
import { FileIconInterface } from "../../window/windowTypes";
import { useWindowContext } from "../../../contexts/windowContext";
import { useCallback, useRef } from "react";

interface FolderProps {
  title: string;
  windowData: OpenFileInterface | FileIconInterface[];
  defaultPos: { x: number; y: number };
  img?: string;
  alt?: string;
}

const XPFolder = ({ title, windowData, defaultPos }: FolderProps) => {
  const { allOpenWindows, addWindow } = useWindowContext();

  const isWindowOpen = allOpenWindows[title];

  const handleClick = useCallback(() => {
    if(!isWindowOpen){
      console.log({ windowData });
      addWindow({ type: "folder", key: title, data: windowData });
    };
  }, [isWindowOpen, title, windowData, addWindow]);

  const [ doubleTouchCallback ] = useDoubleClick(handleClick, isMobile ? 'touchstart' : 'click');

  const nodeRef = useRef<HTMLDivElement>(null);

  const combinedRef = useCallback((node: HTMLDivElement | null) => {
    (nodeRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
    doubleTouchCallback(node);
  }, [doubleTouchCallback]);

  const img = isWindowOpen ? FOLDER_OPEN_PATH : FOLDER_CLOSED_PATH;

  return (
		<Draggable
      nodeRef={nodeRef}
      bounds={'parent'}
      defaultPosition={defaultPos}
    >
			<div ref={combinedRef} className={`${styles.wrapper} ${styles.folder}`}>
        <img draggable={false} src={img ? img : img} alt={title} />
        <label>{title}</label>
			</div>
		</Draggable>
  );
};

export default XPFolder;
