const express = require('express');
const router = express.Router();
const taskActions = require('./apiActions.js')

router.get('/lists/:listName/tasks/:id', taskActions.getOneTask);
router.get('/lists', taskActions.getListAllTasks);
router.post('/lists/', taskActions.writeNewTask);
router.put('/lists/:id', taskActions.updateTask);
router.delete('/lists/:id', taskActions.deleteTask);

module.exports = router;