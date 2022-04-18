const express = require('express');
const router = express.Router();
const Todo = require('./models/todo');

router
    .post('/', async (req, res) => {
    const todoItem = req.body;
    //add the todo to the database
    try {
        const todo = await new Todo(todoItem).save();
        res.send(todo);
    } catch (err) {
        res.send(err);
    }
});

module.exports = router;