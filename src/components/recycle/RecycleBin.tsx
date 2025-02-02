import './RecycleBin.css';
import Draggable from 'react-draggable';
import recycle from '../../imgs/icons/recycle.png'

interface RecycleBinProps {
  desktopInfo: {
    clientWidth: number;
    clientHeight: number;
  };
}

const RecycleBin = ({ desktopInfo }: RecycleBinProps) => { 
  return (
    <Draggable
      bounds={'parent'} 
      // 105 and 155 are the offset needed for a solid view of the bin - should change this
      defaultPosition={{ x: desktopInfo?.clientWidth - 105, y: desktopInfo?.clientHeight - 155}}
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