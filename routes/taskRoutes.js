const express = require('express');
const { getTasks, addTask, updateTask, deleteTask, getCompletedTasks } = require('../controllers/taskController');

const router = express.Router();

router.get('/', getTasks);
router.post('/', addTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);
router.get('/completed', getCompletedTasks);

module.exports = router;
//created a new file in the routes folder called taskRoutes.js