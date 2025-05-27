import './RecycleBin.css';
import Draggable from 'react-draggable';
import recycle from '/windows-xp-remix/recyclingBinRemix2Web.webp'
import { useRef } from 'react';
import styled from 'styled-components';

interface RecycleBinProps {
  desktopInfo: {
    clientWidth: number;
    clientHeight: number;
  } | null | undefined;
}

const RecycleBinWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 75px;
  height: auto;
  align-items: center;
  img {
    width: 100%;
    height: 100%;
  }
`;

const NewRecycleBin = ({ desktopInfo }: RecycleBinProps) => { 
  const nodeRef = useRef(null);
  console.log({ desktopInfo, width: desktopInfo?.clientWidth, height: desktopInfo?.clientHeight });
  return (
    <Draggable
      bounds={'parent'} 
      // 105 and 155 are the offset needed for a solid view of the bin - should change this
      defaultPosition={{ 
        x: desktopInfo?.clientWidth ? 
          desktopInfo?.clientWidth - 100: 0, 
        y: desktopInfo?.clientHeight ? 
          desktopInfo?.clientHeight - 475 : 0
      }}
      // defaultPosition={{ x: 20, y: 200 }}
      nodeRef={nodeRef}
    > 
      <RecycleBinWrapper className="recycle-bin-container" ref={nodeRef}>
        <img draggable={false} src={recycle} />
        <label style={{ width: "100px", textAlign: "center" }}>Recycle Bin</label>
      </RecycleBinWrapper>
    </Draggable>
  );
}

export default NewRecycleBin;