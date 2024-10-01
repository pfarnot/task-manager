import { useEffect, useState } from 'react'
import { Container, Typography } from '@mui/material';
import './App.css'
import { Task } from './types/interfaces';
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';
import { fetchTasks } from './service/taskService';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const fetchedTasks = await fetchTasks();
        setTasks(fetchedTasks);
      } catch (error) {
        console.error('Error al cargar las tareas:', error);
      }
    };

    loadTasks();
  }, []);
  // If you want to persist tasks to local storage
  /*useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') ?? '[]') || [];
    setTasks(storedTasks);
  }, []);
  
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);*/

  const addTask = (title: string) => {
    const newTask = { id: tasks.length + 1, title, completed: false };
    setTasks([...tasks, newTask]);
  };

  const completeTask = (taskId: number) => {
    setTasks(
      tasks.map((task: Task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId: number) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };


  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Gestión de Tareas
      </Typography>
      <AddTaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onComplete={completeTask} onDelete={deleteTask} />
    </Container>
  )
}

export default App
