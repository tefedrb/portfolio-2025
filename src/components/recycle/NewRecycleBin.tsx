import './RecycleBin.css';
import Draggable, { DraggableData } from 'react-draggable';
import recycle from '/windows-xp-remix/recyclingBinRemix2Web.webp'
import { useEffect, useRef, useState } from 'react';
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
  const [position, setPosition] = useState({ x: desktopInfo?.clientWidth || 0, y: desktopInfo?.clientHeight || 0 });

  const handleDrag = (e: unknown, data: DraggableData) => {
    setPosition({ x: data.x, y: data.y });
  }

  useEffect(() => {
    const x = desktopInfo?.clientWidth || 0;
    const y = desktopInfo?.clientHeight || 0;
    setPosition({ x: x - 100, y: y - 365 });
  }, [desktopInfo]);

  useEffect(() => {
    const handleResize = () => {
      const x = desktopInfo?.clientWidth || 0;
      const y = desktopInfo?.clientHeight || 0;
      setPosition({ x: x - 100, y: y - 365 });
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [desktopInfo]);


  return (
    <Draggable
      bounds={'parent'} 
      position={position ?? undefined}
      onStop={(_, data) => setPosition({ x: data.x, y: data.y })}
      onDrag={handleDrag}
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