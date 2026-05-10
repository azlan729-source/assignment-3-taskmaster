import { useEffect, useState } from 'react';
import api from '../services/api';

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await api.get('/tasks');
        console.log('GET TASKS RESPONSE:', res.data);

        const taskData = Array.isArray(res.data)
          ? res.data
          : res.data.data || [];

        setTasks(taskData);
      } catch (err) {
        console.error(err);
      }
    };

    fetchTasks();
  }, []);

  const createTask = async () => {
  if (!title.trim()) {
    alert('Task title is required');
    return;
  }

  try {
    const res = await api.post('/tasks', { title });

    const newTask = res.data.data || res.data;

    setTasks((prevTasks) => [newTask, ...prevTasks]);

    setTitle('');
  } catch (err) {
    alert(err.response?.data?.message || 'Failed to create task');
    console.error(err);
  }
};

  const logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  return (
    <div>
      <h2>Dashboard</h2>

      <button onClick={logout}>Logout</button>

      <br />
      <br />

      <input
        placeholder="New Task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button onClick={createTask}>Add Task</button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title} - {task.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;