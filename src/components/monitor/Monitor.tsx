import { useContext } from 'react';
import { Context } from '../../provider';
import './monitor.scss';
import powerBtn from '../../imgs/power3.svg';

const Monitor = (props: any) => {
  const { globalState, globalStateUpdater } = useContext(Context);
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
        <p className="logo">PONY</p>
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