const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use('/auth', authRoutes);
app.use('/tasks', taskRoutes);

// test route
app.get('/', (req, res) => {
    res.send('API is running...');
});

module.exports = app;