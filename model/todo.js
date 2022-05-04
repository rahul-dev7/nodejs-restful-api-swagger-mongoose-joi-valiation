const mongoose = require('mongoose');


const todoSchema = mongoose.Schema({
    id: {
        type: Number,
        unique: true,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }  
});

module.exports = mongoose.model('Todo', todoSchema);