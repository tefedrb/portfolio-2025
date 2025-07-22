import { 
  ARROW_DOWN_ICON,
  DOUBLE_FOLDERS_ICON,
  GO_TO_NEXT_ICON, 
  GO_TO_PARENT_FOLDER, 
  GO_TO_PREVIOUS_ICON, 
  MAGNIFYING_GLASS_ICON, 
  PROGRAMS_ICON
} from "../constants/icon-file-paths";

const XPWindowNavIcons = () => {
  return (
    <section className="nav-icons">
      <div className="nav-icons-left">
        <img src={GO_TO_PREVIOUS_ICON} />
        <div>
          <img id="nav-icons-left-arrow-down" src={ARROW_DOWN_ICON} />
        </div>  
        <img src={GO_TO_NEXT_ICON} />
        <div>
          <img id="nav-icons-left-arrow-down" src={ARROW_DOWN_ICON} />
        </div>
        <img src={GO_TO_PARENT_FOLDER} />
      </div>
      <div className="nav-icons-right">
        <img src={MAGNIFYING_GLASS_ICON} />
        <img src={DOUBLE_FOLDERS_ICON} />
      </div>
      <div className="nav-icons-right-2">
        <img src={PROGRAMS_ICON} />
      </div>
      <div className="nav-icons-far-right">
        <label className="search-bar">Address</label>
        <input type="text" />
        <span>
          <img src={ARROW_DOWN_ICON} />
        </span>
      </div>
    </section>
  )
}

export default XPWindowNavIcons;