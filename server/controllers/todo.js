const Todo = require('../models/todo');

exports.getTodo = async (req, res) => {
    try {
        const todo = await Todo.find();
        res.status(200).res.json({
            message: `${todo}`
        });
    } catch (error) {
        res.status(404).json({
            message: `${error}`
        });
    }
}

exports.postTodo = async (req, res) => {
    try {
        const todo = await new Todo(req.body).save();
        res.send(todo);
    } catch (error) {
        res.send(error);
    }
}

exports.deleteTodo = async (req, res) => {
    const { id } = req.params;
    try {
        const todo = await Todo.findByIdAndDelete({
            _id: id
        });
        res.status(200).json({
            message: "Your todo has been deleted.",
            todo
        });
    } catch (error) {
        res.status(404).json({
            message: `${error}`
        });
    }
}