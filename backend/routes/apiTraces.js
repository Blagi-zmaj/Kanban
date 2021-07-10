const express = require('express');
const router = express.Router();
const taskActions = require('./apiActions.js')

router.get('/lists/:listName/tasks/:task', taskActions.getOneTask);
router.get('/lists/:listName/tasks', taskActions.getAllTasks);
router.post('/lists/:listName/tasks', taskActions.writeNewTask);
router.put('/lists/:listName/tasks/:task', taskActions.updateTask);
router.delete('/lists/:listName/tasks/:task', taskActions.deleteTask);

module.exports = router;