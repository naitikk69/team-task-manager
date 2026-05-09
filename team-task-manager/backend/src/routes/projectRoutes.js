
const router = require('express').Router();

const authenticate = require('../middleware/authenticate');
const requireRole = require('../middleware/requireRole');

const projectController = require('../controllers/projectController');

router.post('/', authenticate, projectController.createProject);

router.get('/', authenticate, projectController.getProjects);

router.delete(
  '/:id',
  authenticate,
  requireRole('admin'),
  projectController.deleteProject
);

module.exports = router;
