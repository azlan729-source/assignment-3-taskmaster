import { useEffect, useState } from 'react';
import api from '../services/api';

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await api.get('/tasks');
        setTasks(res.data.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchTasks();
  }, []);

  const createTask = async () => {
    try {
      await api.post('/tasks', { title });
      setTitle('');

      const res = await api.get('/tasks');
      setTasks(res.data.data);
    } catch (err) {
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