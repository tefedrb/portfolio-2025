import { useCallback, useRef } from 'react';
import { isMobile } from 'react-device-detect';
import { useDoubleClick } from '../../hooks/hooks';
import './File.css';
import Draggable from 'react-draggable';
import styles from '../shared/FolderFileWrapper.module.css';
import { useWindowContext } from '../../../contexts/windowContext';
import { FileIconInterface } from '../../window/windowTypes';
import { OpenFileInterface } from '../../../types/globalTypes';

interface FileProps {
  title: string;
  file: FileIconInterface;
  windowIsClosed: boolean;
  addWindow: (window: { type: string; key: string; data: OpenFileInterface | FileIconInterface[] }) => void;
  defaultPos?: { x: number; y: number } | undefined;
  img?: string;
  alt?: string;
  height?: number;
  fileSelected?: FileIconInterface | null;
  setFileSelected?: (file: FileIconInterface | null) => void;
}

const File = (props: FileProps) => {
  const { 
    title, 
    file, 
    windowIsClosed, 
    defaultPos = undefined, 
    img, 
    height, 
    fileSelected, 
    setFileSelected 
  } = props;

  const { addWindow } = useWindowContext();

  function handleClick(){
    if(windowIsClosed){
      addWindow({ type: "file", key: title, data: [file] });
    }
  };

  const [ doubleTouchCallback ] = useDoubleClick(handleClick, isMobile ? 'touchstart' : 'click');

  const nodeRef = useRef<HTMLDivElement>(null);

  const combinedRef = useCallback((node: HTMLDivElement | null) => {
    (nodeRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
    doubleTouchCallback(node);
  }, [doubleTouchCallback]);

  const fileIsSelected = fileSelected?.title === title;

  return (
		<Draggable
      nodeRef={nodeRef}
      // bounds={'parent'}
      defaultPosition={defaultPos ?? undefined}
    >
			<div
        onClick={() => setFileSelected?.(file)}
        className={`${styles.wrapper} ${styles.file}`}
        style={{ color: 'black', height: height ? `${height}px` : undefined }}
        ref={combinedRef}
      >
        <img draggable={false} src={img ? img : img} alt={title} />
        <span style={{ backgroundColor: fileIsSelected ? '#80808069' : 'transparent' }} className="file-title">{title}</span>
			</div>
		</Draggable>
  );
}

export default File;