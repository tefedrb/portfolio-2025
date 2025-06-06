import { TaskbarAreaItemInterface } from '../../../types/globalTypes';
import '../taskbar.css';

const TaskbarAreaItem = ({ item }: { item: TaskbarAreaItemInterface }) => {
  const { name, icon, onClick } = item;

  return (
    <div onClick={onClick} className="taskbar-area-item">
      <img src={icon} alt={name} />
      <span>{name}</span>
    </div>
  )
}

export default TaskbarAreaItem;