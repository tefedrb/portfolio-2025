import { useProfileContext } from '../../useProfileContext';
import MiniFile from './MiniFile';
import styled from 'styled-components';
import PathToFile from '../svg/PathToFile';

interface FileNameProps {
  name?: string;
  open: boolean;
}

interface FileDropDownWrapProps {
  vertical: boolean;
  name?: string;
}

interface AllFilesWrapProps {
  numOfFiles: number;
  name?: string;
}
interface FileWrapperProps {
  name?: string;
}

const FileDropDownWrap = styled.div<FileDropDownWrapProps>`
  display: flex;
  // Removed for mobile view testing....
  // height: 100%;
  @media (max-width: 948px) and (min-height: 500px){
    display: none;
  }
  width: 100%;
`
const AllFilesWrap = styled.div<AllFilesWrapProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  // ADJUSTED FOR MOBILE VIEW
  @media (max-width: 948px) and (min-height: 500px){
    display: none;
  }
  // ADJUSTED FOR MOBILE VIEW
  @media (max-height: 700px) and (min-height: 500px){
    padding-left: 12%;
  }
  @media (max-height: 380px){
    margin-top: 12%;
  }
`
export const FileWrapper = styled.div<FileWrapperProps>`
  pointer-events: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0;
  width: 100%;
  color: green;
  font-size: 12px;
  @media (max-width: 948px){
    margin: 0;
    justify-content: center;
    padding: 2px;
  }
`

export const FileName = styled.p<FileNameProps>`
  background-color: ${props => props.open ? "rgb(0,4,127)" : "none"}; 
  width: auto;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-text: center;
  margin: 2px;
  // white-space: ${props => props.open ? "wrap" : "nowrap" };
  white-space: nowrap;
  font-size: 17px;

  @media (max-width: 948px){
    margin-right: 5px;
    margin-left: 5px;
  }

  @media screen and (max-width: 651px), screen and (max-height: 757px){
    font-size: 14px;
    white-space: nowrap;
    // width: auto;
  }
`

interface FileDropDownProps {
  name?: string;
  files: { name: string }[];
  display: boolean;
}

const FileDropDown: React.FC<FileDropDownProps> = (props: FileDropDownProps) => {
  const { globalStateUpdater } = useProfileContext();
  const { verticalDisplay, globalState: { fileLoaded } } = useProfileContext();

  const files = props?.files.map((fileData, key) => (
      <FileWrapper name={"fileWrapper"} key={key}>
        <span onClick={() => globalStateUpdater("fileLoaded", fileData.name, false)}>
          <MiniFile 
            data={fileData}
            mini={true}
            open={fileLoaded === fileData.name ? true : false}
          />
        </span>
        <FileName open={fileLoaded === fileData.name ? true : false}>{fileData.name}</FileName>
      </FileWrapper>
    )
  );

  return (
    <FileDropDownWrap vertical={verticalDisplay} name={"fileDropDown"}>
      {props.display ? <PathToFile numOfFiles={props?.files.length}/> : ""}
      <AllFilesWrap 
        numOfFiles={props?.files.length} 
        name={"AllFilesWrap"}
      >
        {props.display && !verticalDisplay ? files : ""}
      </AllFilesWrap>
    </FileDropDownWrap>
  )
}

export default FileDropDown;