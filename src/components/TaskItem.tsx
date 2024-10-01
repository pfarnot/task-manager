import { ListItem, ListItemText, IconButton, Checkbox } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { TaskItemProps } from '../types/interfaces';

const TaskItem = ({ task, onComplete, onDelete }: TaskItemProps) => {
    return (
        <ListItem
            secondaryAction={
                <>
                    <IconButton edge="end" onClick={() => onDelete()}>
                        <DeleteIcon />
                    </IconButton>
                </>
            }
        >
            <Checkbox
                edge="start"
                checked={task.completed}
                onChange={() => onComplete()}
            />
            <ListItemText primary={task.title} />
        </ListItem>
    );
};

export default TaskItem;
