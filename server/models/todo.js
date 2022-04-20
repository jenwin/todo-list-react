const mongoose = require('mongoose');

const todoSchema = mongoose.Schema([{
        id: { type: Number, required: true },
        text: { type: String, required: true },
}]);

module.exports = mongoose.model('Todo', todoSchema);