import "./Sidebar.css";
import SidebarContent from "./SidebarContent";

export interface SidebarData {
  header: string;
  links: { icon: string | null, text: string, link: string | null }[] | null;
}

const sideBarData: SidebarData[] = [
  {
    header: "File And Folder Tasks",
    links: [
      { icon: null, text: "test", link: null },
      { icon: null, text: "test", link: null },
      { icon: null, text: "test", link: null },
      { icon: null, text: "test", link: null },
    ]
  },
  {
    header: "Other Places",
    links: [
      { icon: null, text: "test", link: null },
      { icon: null, text: "test", link: null },
      { icon: null, text: "test", link: null },
      { icon: null, text: "test", link: null },
    ]
  },
  {
    header: "details",
    links: null
  }
]

const Sidebar = () => {
  return (
    <div className="inner-window-sidebar">
      { sideBarData.map(data => <SidebarContent data={data} />) }
    </div>
  );
};

export default Sidebar;