import './RecycleBin.css';
import Draggable, { DraggableData } from 'react-draggable';
import recycle from '/windows-xp-remix/recyclingBinRemix2Web.webp'
import { useEffect, useRef, useState } from 'react';

interface RecycleBinProps {
  desktopInfo: {
    clientWidth: number;
    clientHeight: number;
  } | null | undefined;
}


const RecycleBin = ({ desktopInfo }: RecycleBinProps) => { 
  const nodeRef = useRef(null);
  const [position, setPosition] = useState({ x: desktopInfo?.clientWidth || 0, y: desktopInfo?.clientHeight || 0 });

  const handleDrag = (e: unknown, data: DraggableData) => {
    setPosition({ x: data.x, y: data.y });
  }

  useEffect(() => {
    const x = desktopInfo?.clientWidth || 0;
    const y = desktopInfo?.clientHeight || 0;
    setPosition({ x: x - 100, y: y - 250 });
  }, [desktopInfo]);

  useEffect(() => {
    const handleResize = () => {
      const x = desktopInfo?.clientWidth || 0;
      const y = desktopInfo?.clientHeight || 0;
      setPosition({ x: x - 100, y: y - 250 });
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
      <div className="recycle-bin-container" ref={nodeRef}>
        <img className="recycle-bin-image" draggable={false} src={recycle} />
        <label className="recycle-bin-label">Recycle Bin</label>
      </div>
    </Draggable>
  );
}

export default RecycleBin;