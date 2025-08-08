import styled from 'styled-components';
import { FC } from 'react';
import OpenFile from '../file-folder/file/OpenFile';

interface MainDisplayProps {
  openFolder?: string;
  name?: string;
}

const Screen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  height: 100%;
  width: 100%;
  overflow: auto;
  pointer-events: auto;

  @media (max-width: 400px) and (max-height: 500px), (max-width: 946px) and (min-height: 500px) {
    height: 80%;
  }
`;


const MainDisplay: FC<MainDisplayProps> = (props: MainDisplayProps) => {
  const { openFolder } = props;
  console.log(openFolder, "<--- MainDisplay");
  return (
    <Screen>
      <OpenFile
        color="green"
        name="file"
        size={{ width: "63%", height: "100%" }}
      />
    </Screen>
  );
};

export default MainDisplay;