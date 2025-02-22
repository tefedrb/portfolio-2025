import './RecycleBin.css';
import Draggable from 'react-draggable';
import recycle from '/windows-xp/user-trash-full-xp.svg'
import { useRef } from 'react';

interface RecycleBinProps {
  desktopInfo: {
    clientWidth: number;
    clientHeight: number;
  } | null | undefined;
}

const NewRecycleBin = ({ desktopInfo }: RecycleBinProps) => { 
  const nodeRef = useRef(null);
  return (
    <Draggable
      bounds={'parent'} 
      // 105 and 155 are the offset needed for a solid view of the bin - should change this
      defaultPosition={{ 
        x: desktopInfo?.clientWidth ? 
          desktopInfo?.clientWidth - 105 : 0, 
        y: desktopInfo?.clientHeight ? 
          desktopInfo?.clientHeight - 155 : 0
      }}
      nodeRef={nodeRef}
    > 
      <div className="recycle-bin-container" ref={nodeRef}>
        <img src={recycle} />
        <label>Recycle Bin</label>
      </div>
    </Draggable>
  );
}

export default NewRecycleBin;