const mongoose = require('mongoose');
const Task = require('./models/task.js')

mongoose.connect('mongodb://localhost:27017/kanbanDB', {useNewUrlParser: true, useUnifiedTopology: true});

// const newTask = new Task(
//     {
//         content: 'Jogging',
//         listName: 'In progress'
//     }
// )

// newTask.save(() => {
//     console.log('Task written!');
// });