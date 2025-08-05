import { SIDEBAR_CONTENT_ICON } from "../../constants/icon-file-paths";
import { SidebarData } from "./Sidebar";

const SidebarContent = ({ data }: { data: SidebarData }) => {

  const { header, links } = data;

  return (
    <div className="sidebar-content">
      <div className="sidebar-header">
        <span>{header}</span>
        <img src={SIDEBAR_CONTENT_ICON} />
      </div>
      <div className="sidebar-body">
        <ul>
          {links && links.map(({ icon, text }) => {
            return <li>
              <img src={icon ?? ""} /><span>{text}</span>
            </li>
          }) || <li>No links</li>}
        </ul>
      </div>
    </div>
  );
};

export default SidebarContent;