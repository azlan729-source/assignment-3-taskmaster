const { Task } = require('../models');

exports.createTask = async (req, res) => {
  try {
   const { title, description, status } = req.body;

const task = await Task.create({
  title,
  description,
  status,
  userId: req.user.id,
});

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const { page = 1, limit = 5, status } = req.query;

    const offset = (page - 1) * limit;

    const where = {
      userId: req.user.id,
    };

    if (status) {
      where.status = status;
    }

    const tasks = await Task.findAndCountAll({
      where,
      limit: parseInt(limit),
      offset: parseInt(offset),
    });

    res.json({
      total: tasks.count,
      page: parseInt(page),
      data: tasks.rows,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findOne({
      where: {
        id: req.params.id,
        userId: req.user.id,
      },
    });

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    await task.update(req.body);

    res.json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findOne({
      where: {
        id: req.params.id,
        userId: req.user.id,
      },
    });

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    await task.destroy();

    res.json({ message: 'Task deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};