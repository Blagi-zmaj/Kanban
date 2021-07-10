const express = require('express');
const router = express.Router();
const taskActions = require('./apiActions.js')

router.get('/lists/:listName/tasks/:id', taskActions.getOneTask);
router.get('/lists/:listName/tasks', taskActions.getListAllTasks);
router.post('/lists/:listName/tasks', taskActions.writeNewTask);
router.put('/lists/:listName/tasks/:id', taskActions.updateTask);
router.delete('/lists/:listName/tasks/:id', taskActions.deleteTask);

module.exports = router;