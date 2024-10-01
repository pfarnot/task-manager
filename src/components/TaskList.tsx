import { List } from '@mui/material';
import TaskItem from './TaskItem';
import { TaskListProps } from '../types/interfaces';

const TaskList = ({ tasks, onComplete, onDelete }: TaskListProps ) => {
  return (
    <List>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onComplete={() => onComplete(task.id)}
          onDelete={() => onDelete(task.id)}
        />
      ))}
    </List>
  );
};

export default TaskList;
