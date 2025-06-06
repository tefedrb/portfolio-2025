import { TaskbarAreaItemInterface } from '../../../types/globalTypes';
import '../taskbar.css';
import TaskbarAreaItem  from './taskbar-area-item';

const TaskbarArea = ({ taskBarAreaItems }: { taskBarAreaItems: TaskbarAreaItemInterface[] }) => {

  const renderTaskbarAreaItems = () => {
    return taskBarAreaItems.map((item) => (
      <TaskbarAreaItem key={item.name} item={item} />
    ));
  }
  
  return (
    <div className="taskbar-area">{renderTaskbarAreaItems()}</div>
  )
}

export default TaskbarArea;