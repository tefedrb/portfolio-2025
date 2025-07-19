import { isMobile } from 'react-device-detect';
import { useDoubleClick } from '../../hooks/hooks';
import './File.css';
import Draggable from 'react-draggable';
import FileWrapper from '../shared/FolderFileWrapper';
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
}

const File = ({ title, file, windowIsClosed, defaultPos = undefined, img }: FileProps) => {
  const [ doubleTouchCallback ] = useDoubleClick(handleClick, isMobile ? 'touchstart' : 'click');
  const { addWindow } = useWindowContext();

  function handleClick(){
    if(windowIsClosed){
      addWindow({ type: "file", key: title, data: [file] });
    }
  };

  return (
		<Draggable
      // bounds={'parent'} 
      defaultPosition={defaultPos ?? undefined}
    >
			<FileWrapper textColor={'black'} ref={doubleTouchCallback} name={"fileWrSap"}>
        <img draggable={false} src={img ? img : img} alt={title} />
        <label>{title}</label>
			</FileWrapper>
		</Draggable>
  );
}

export default File;