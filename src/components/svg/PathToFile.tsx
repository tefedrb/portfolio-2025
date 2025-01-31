import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useProfileContext } from '../../useProfileContext';
import { getViewportXY } from '../../utils/viewportUtils';

const PathWrap = styled.div`
  @media (max-height: 700px) {
    display: none;
  }
`;

// const Lines = styled.svg`
//   height: 100vh;
//   width: 100vw;
//   position: absolute;
// `;

interface PathToFileProps {
  numOfFiles: number;
}

interface Sizes {
  originalScrnSize?: [number, number];
  loaded?: boolean;
  folderY?: number;
  xValue?: number;
}

const PathToFile = (props: PathToFileProps) => {
  const context = useProfileContext();
  const { globalState, verticalDisplay } = context;
  const [sizes, updateSizes] = useState<Sizes>({});

  useEffect(() => {
    if (!sizes.loaded && typeof globalState.folderLoc[1] === 'number') {
      console.log('globalState.folderLoc', globalState.folderLoc);
      updateSizes({
        originalScrnSize: getViewportXY(),
        loaded: true,
        folderY: globalState?.folderLoc[1],
        xValue: globalState?.folderLoc[0],
      });
    }
  }, [globalState, sizes.loaded]);

  // const filePath = () =>
  //   sizes.folderY ? (
  //     <svg style={{ height: '100vh', width: '100vw', position: 'absolute' }}>
  //       <path
  //         d={`M 20 ${sizes.folderY + 50} H 35 V 90 H ${sizes.xValue! + 10} v -5`}
  //         fill="transparent"
  //         stroke="white"
  //       />
  //     </svg>
  //   ) : (
  //     ''
  //   );

  // const newStuff = { height: '100vh', width: '100vw', position: 'absolute' };

  // const displayPath = (xyArr: [number, number]) => {
  //   const x =
  //     sizes?.xValue! - (sizes?.originalScrnSize?.[0]! - xyArr[0]) + 50;
  //   const y =
  //     sizes?.folderY! - (sizes?.originalScrnSize?.[1]! - xyArr[1]) + 10;

  //   const dString = `M 20 ${y} H 35 V 90 H ${x} v -5`;

  //   const linePath = sizes?.xValue ? (
  //     <Lines>
  //       <path d={dString} fill="transparent" stroke="white" />
  //     </Lines>
  //   ) : (
  //     <p></p>
  //   );
  //   return linePath;
  // };

  const buildPath = () => {
    const length = props.numOfFiles;
    const buildString = () => {
      let output = '';
      let increment = 128.5;
      for (let i = 1; i < length; i++) {
        output += ` H 10 V ${increment} H 20`;
        increment += 88.5;
      }
      return output;
    };

    return (
      <svg
        style={{
          height: `${props.numOfFiles === 1 ? '50px' : '100%'}`,
          width: '20px',
        }}
      >
        <path
          d={`M 10 10 V 40 H 20${buildString()}`}
          fill="transparent"
          stroke="rgba(255, 255, 255, .3)" 
        />
      </svg>
    );
  };

  const buildAltPath = () => {
    return (
      <svg style={{ height: '20px', width: '100%' }}>
        <path
          d={`M 10 10 H ${70}`}
          fill="transparent"
          stroke="white" 
        />
      </svg>
    );
  };

  return (
    <PathWrap>
      {verticalDisplay ? buildAltPath() : buildPath()}
    </PathWrap>
  );
};

export default PathToFile;