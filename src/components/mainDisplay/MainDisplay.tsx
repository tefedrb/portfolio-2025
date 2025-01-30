import styled from 'styled-components';
import { FC } from 'react';
import OpenFile from '../file/OpenFile';

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

interface Size {
  width: string;
  height: string;
}

interface OpenFileProps {
  color: string;
  name: string;
  size: Size;
}

const MainDisplay: FC = () => {
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