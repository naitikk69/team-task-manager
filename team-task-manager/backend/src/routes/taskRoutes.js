
const router = require('express').Router();

const authenticate = require('../middleware/authenticate');

const taskController = require('../controllers/taskController');

router.post('/', authenticate, taskController.createTask);

router.get('/', authenticate, taskController.getTasks);

module.exports = router;
