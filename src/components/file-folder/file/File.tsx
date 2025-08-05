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

  const [ doubleTouchCallback ] = useDoubleClick(handleClick, isMobile ? 'touchstart' : 'click');
  const { addWindow } = useWindowContext();

  function handleClick(){
    if(windowIsClosed){
      addWindow({ type: "file", key: title, data: [file] });
    }
  };

  const fileIsSelected = fileSelected?.title === title;

  return (
		<Draggable
      // bounds={'parent'} 
      defaultPosition={defaultPos ?? undefined}
    >
			<FileWrapper
        onClick={() => setFileSelected?.(file)}
        fileIsSelected={fileIsSelected} 
        height={height}
        textcolor={'black'} 
        ref={doubleTouchCallback} 
        name={"fileWrSap"}
      >
        <img draggable={false} src={img ? img : img} alt={title} />
        <span style={{ backgroundColor: fileIsSelected ? '#80808069' : 'transparent' }} className="file-title">{title}</span>
			</FileWrapper>
		</Draggable>
  );
}

export default File;