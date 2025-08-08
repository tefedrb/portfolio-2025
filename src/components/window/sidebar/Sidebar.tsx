import "./Sidebar.css";
import SidebarContent from "./SidebarContent";

export interface SidebarData {
  header: string;
  links: { icon?: string | null; emoji?: string | null; text: string; link: string | null }[] | null;
}

const sideBarData: SidebarData[] = [
  {
    header: "File and Folder Tasks",
    links: [
      { emoji: "📁", text: "Make a new folder", link: null },
      { emoji: "📂", text: "Move this folder", link: null },
      { emoji: "🔗", text: "Share this folder", link: null },
      { emoji: "📤", text: "Publish this folder", link: null },
    ],
  },
  {
    header: "Other Places",
    links: [
      { emoji: "🔍", text: "Search", link: null },
      { emoji: "📄", text: "My Documents", link: null },
      { emoji: "💻", text: "My Computer", link: null },
      { emoji: "🌐", text: "My Network Places", link: null },
    ],
  },
  {
    header: "Details",
    links: null,
  },
];

const Sidebar = () => {
  return (
    <div className="inner-window-sidebar">
      {sideBarData.map((data, index) => (
        <SidebarContent data={data} key={`${data.header}-${index}`} />
      ))}
    </div>
  );
};

export default Sidebar;