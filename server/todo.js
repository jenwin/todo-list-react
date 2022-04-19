const express = require('express');
const router = express.Router();
const Todo = require('./models/todo');

router
    .post('/', async (req, res) => {
    const todoItem = req.body;
    try {
        const todo = await new Todo(todoItem).save();
        res.send(todo);
    } catch (err) {
        res.send(err);
    }
}).get('/', async (req, res) => {
    try {
        const todo = await Todo.find();
        res.send(todo);
    } catch (err) {
        res.send(err);
    }
}).delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const todo = await Todo.findByIdAndDelete({ _id: id });
        res.send(todo);
    } catch (err) {
        res.send(err);
    }
})

module.exports = router;