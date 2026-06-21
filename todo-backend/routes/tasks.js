const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: tasks.length, data: tasks });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Erro ao buscar tarefas' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { title } = req.body;
    if (!title || title.trim() === '') {
      return res.status(400).json({ success: false, message: 'O título é obrigatório' });
    }
    const task = await Task.create({ title });
    res.status(201).json({ success: true, data: task });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Erro ao criar tarefa' });
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ success: false, message: 'Tarefa não encontrada' });
    task.completed = !task.completed;
    await task.save();
    res.status(200).json({ success: true, data: task });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Erro ao atualizar tarefa' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ success: false, message: 'Tarefa não encontrada' });
    res.status(200).json({ success: true, message: 'Tarefa excluída com sucesso' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Erro ao excluir tarefa' });
  }
});

module.exports = router;