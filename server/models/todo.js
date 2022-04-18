const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    todos: {
        id: { type: Number, required: true },
        todo: { type: String, required: true },
        completed: { type: Boolean }
    }
});

module.exports = mongoose.model('Todo', todoSchema);