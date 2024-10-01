import { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { AddTaskFormProps } from '../types/interfaces';

const AddTaskForm = ({ onAddTask }: AddTaskFormProps) => {
    const [taskTitle, setTaskTitle] = useState<string>('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (taskTitle.trim()) {
            onAddTask(taskTitle);
            setTaskTitle('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Nueva Tarea"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                fullWidth
            />
            <Button variant="contained" type="submit" sx={{ mt: 2 }}>
                Agregar Tarea
            </Button>
        </form>
    );
};

export default AddTaskForm;
