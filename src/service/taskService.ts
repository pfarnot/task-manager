// API Base URL
const API_URL = 'https://jsonplaceholder.typicode.com/todos';
/**
 * Get the list of tasks from the API
 */
export const fetchTasks = async (limit = 5) => {
  try {
    const response = await fetch(`${API_URL}?_limit=${limit}`);
    if (!response.ok) {
      throw new Error('Error al obtener las tareas');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error en fetchTasks:', error);
    throw error;
  }
};

