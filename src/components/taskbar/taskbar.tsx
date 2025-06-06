import Clock from "./clock/Clock";
import Start from "./start/Start"
import TaskbarArea from "./taskbar-area/taskbar-area";

const Taskbar = () => {
  return (
    <div className="title-bar taskbar">
      <Start />
      <TaskbarArea taskBarAreaItems={[]} />
      <Clock />
    </div>
  )
}

export default Taskbar;