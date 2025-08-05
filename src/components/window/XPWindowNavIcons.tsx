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
          <img id="nav-icons-arrow-down" src={ARROW_DOWN_ICON} />
        </div>  
        <img src={GO_TO_NEXT_ICON} />
        <div>
          <img id="nav-icons-arrow-down" src={ARROW_DOWN_ICON} />
        </div>
        <img src={GO_TO_PARENT_FOLDER} />
      </div>
      <div className="nav-icons-right">
        <img src={MAGNIFYING_GLASS_ICON} />
        <span>Search</span>
        <img src={DOUBLE_FOLDERS_ICON} />
        <span>Folders</span>
      </div>
      <div className="nav-icons-right-2">
        <img src={PROGRAMS_ICON} />
        <img id="nav-icons-arrow-down" src={ARROW_DOWN_ICON} />
      </div>
      <div className="nav-icons-far-right">
        <div className="nav-search-bar-warp">
          <label className="search-bar">
            <span>A<u>d</u>dress</span>
            <div className="nav-search-bar-input-warp">
              <input id="nav-search-bar" type="text" />
              <div className="input-adornment-wrap">
                <img id="input-adornment" src={ARROW_DOWN_ICON} />
              </div>
            </div>
          </label>
        </div>
      </div>
    </section>
  )
}

export default XPWindowNavIcons;