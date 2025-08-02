import XPWindowNavIcons from "./XPWindowNavIcons";
import "./XPWindowNav.css";
import { MOCK_LOGO_ICON_SML } from "../constants/icon-file-paths";

const XPWindowNav = () => {
  return (
    <div className="inner-window-nav">
      <div className="nav-wrap">
        <nav>
          <div className="menu-bar-left"> 
            <button><u>F</u>ile</button>
            <button><u>E</u>dit</button>
            <button><u>V</u>iew</button>
            <button><u>F</u>avorites</button>
            <button><u>T</u>ools</button>
            <button><u>H</u>elp</button>
          </div>
        </nav>
        <div className="menu-bar-right">
          <img src={MOCK_LOGO_ICON_SML} />
        </div>
      </div>
      <XPWindowNavIcons />
    </div>
  )
}

export default XPWindowNav;