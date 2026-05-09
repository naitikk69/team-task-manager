
const Task = require('../models/Task');

exports.createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json(task);
};

exports.getTasks = async (req, res) => {
  const query = {};

  if (req.query.status) {
    query.status = req.query.status;
  }

  const tasks = await Task.find(query);
  res.json(tasks);
};
