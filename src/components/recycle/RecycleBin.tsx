import './RecycleBin.css';
import Draggable from 'react-draggable';
import recycle from '../../assets/icons/recycle.png'

interface RecycleBinProps {
  desktopInfo: {
    clientWidth: number;
    clientHeight: number;
  } | null | undefined;
}

const RecycleBin = ({ desktopInfo }: RecycleBinProps) => { 
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
    > 
      <div className="outer-can-container">
        <div className="can-container">
          <div id="recycle-can">
            <div className="top-side-can"></div>
            <div className="left-side-can">
              <img src={recycle} />
            </div>
            <div className="right-side-can"></div>
          </div>
        </div>
        <span>Recycle Bin</span>
      </div>
    </Draggable>
  );
}

export default RecycleBin;