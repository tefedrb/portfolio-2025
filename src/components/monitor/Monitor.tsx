import { useProfileContext } from '../../useProfileContext';
import './monitor.scss';
import powerBtn from '../../assets/power3.svg';

interface MonitorProps {
  children: React.ReactNode;
}

const Monitor = (props: MonitorProps) => {
  const { globalState, globalStateUpdater } = useProfileContext();
  const { monitorPower } = globalState;

  const powerHandler = () => {
    globalStateUpdater("monitorPower", true, true);
  };

  return (
    <div className="monitorWrap">
      <div className="monitorTop">
        <div className="monitorInfo">
          <p className="monitorName">
            Minitron
          </p>
          <p className="monitorVersion">
            Multiscan
          </p>
        </div>
      </div>
      <div className="topEdgeWrap">
        <div className="topEdge"></div>
      </div>
      <div className="monitorLeft"></div>
      <div className="leftEdgeWrap">
        <div className="leftEdge"></div>
      </div>
      {props.children}
      <div className="rightEdgeWrap">
        <div className="rightEdge"></div>
      </div>
      <div className="monitorRight"></div>
      <div className="bottomEdgeWrap">
        <div className="bottomEdge"></div>
      </div>
      <div className="monitorBottom">
        <p className="version">v1.0.0</p>
        <p className="logo">TB</p>
        <div className={`on-indicator ${monitorPower ? "none" : "off-indicator"}`}></div>
        <div onClick={powerHandler} className="power-button">
          <img
            src={powerBtn}
            alt="powerbutton"
          />
        </div>
      </div>
    </div>
  );
};

export default Monitor;