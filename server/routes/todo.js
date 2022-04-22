const express = require('express');
const router = express.Router();
// const Todo = require('../models/todo');
const {
    getTodo,
    postTodo,
    deleteTodo
} = require ('../controllers/todo');

router
    .get('/', getTodo)
    .post('/', postTodo)
    .delete('/delete/:id', deleteTodo)

module.exports = router;