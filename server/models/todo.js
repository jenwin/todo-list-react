const mongoose = require('mongoose');

const todoSchema = mongoose.Schema([{
        id: { type: Number, required: true },
        add: { type: String, required: true },
}]);

module.exports = mongoose.model('Todo', todoSchema);