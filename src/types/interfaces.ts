export interface TaskListProps {
    tasks: Task[];
    onComplete(id: number): void;
    onDelete(id: number): void;
}

export interface TaskItemProps {
    task: Task;
    onComplete: () => void;
    onDelete: () => void;
}

export type Task = {
    id: number;
    title: string;
    completed: boolean;
}

export interface AddTaskFormProps {
    onAddTask: (taskTitle: string) => void
}