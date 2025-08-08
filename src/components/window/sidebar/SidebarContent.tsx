import { SIDEBAR_CONTENT_ICON } from "../../constants/icon-file-paths";
import { SidebarData } from "./Sidebar";

const SidebarContent = ({ data }: { data: SidebarData }) => {

  const { header, links } = data;

  return (
    <div className="sidebar-content">
      <div className="sidebar-header">
        <span>{header}</span>
        <img src={SIDEBAR_CONTENT_ICON} alt="Section icon" />
      </div>
      <div className="sidebar-body">
        <ul>
          {(links &&
            links.map(({ icon, emoji, text }, index) => {
              return (
                <li key={`${text}-${index}`}>
                  {emoji ? (
                    <span className="sidebar-emoji" aria-hidden="true">{emoji}</span>
                  ) : (
                    icon && <img src={icon} alt="" aria-hidden="true" />
                  )}
                  <span>{text}</span>
                </li>
              );
            })) || <li>No links</li>}
        </ul>
      </div>
    </div>
  );
};

export default SidebarContent;