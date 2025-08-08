import styled from 'styled-components';
import NavigationPanel from './NavigationPanel';
import MiniFile from '../file-folder/file/MiniFile';
import { useProfileContext } from '../../contexts/useProfileContext';
import { FileName, FileWrapper } from '../file-folder/file/FileDropDown';


interface MobileNavAdapterProps {
  name?: string;
}

const MobileNavAdapter: React.FC<MobileNavAdapterProps> = () => {
  const { globalState, globalStateUpdater } = useProfileContext();
  const { filesDisplayed, fileLoaded } = globalState;

  const files = () => {
    return filesDisplayed.map((file, key) => (
      <FileWrapper name={"FileWrap"} key={key}>
        <span onClick={() => globalStateUpdater("fileLoaded", file.name, false)}>
          <MiniFile data={file} mini={true} />
        </span>
        <FileName open={fileLoaded === file.name}>{file.name}</FileName>
      </FileWrapper>
    ));
  };

  return (
    <MobileNavWrapper>
      <MobileFilePopUp>{files()}</MobileFilePopUp>
      <NavigationPanel />
    </MobileNavWrapper>
  );
};

export default MobileNavAdapter;

const MobileFilePopUp = styled.div`
  display: none;
  // MOBILE VIEW ALTERATION -> testing and min-height
  @media (max-width: 948px) and (min-height: 500px) {
    display: flex;
    background-color: rgba(79, 79, 79, 0.73);
    height: auto;
    width: auto;
    padding: 0.2em;
    align-items: center;
    justify-content: space-around;
  }
`;

const MobileNavWrapper = styled.div`
  // height: 100%;
  // width: 100%;
  pointer-events: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: rgba(79, 79, 79, 0.73);
  box-shadow: 1px -5px 27px -7px rgba(79, 79, 79, 0.73);
  min-height: 95%;

  // MOBILE VIEW ALTERATION -> Adjusted margin: 20px to margin-left: 20px;
  margin-left: 10px;
  margin-right: 10px;
  min-width: 150px;

  @media (max-height: 700px) and (max-width: 948px) {
    min-width: 110px;
  }

  @media (max-width: 948px) and (min-height: 500px) {
    min-width: 95%;
    min-height: 14.5%;
    margin-top: 0px;
    margin-bottom: 10px;
    background-color: transparent;
    box-shadow: none;
  }
`;