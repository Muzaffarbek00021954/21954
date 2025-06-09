const express = require('express');
const router = express.Router();
const controller = require('../controllers/plantsController');

const { body } = require('express-validator');

router.post('/add', [
  body('type').notEmpty().withMessage('Type is required'),
  body('variety').notEmpty().withMessage('Variety is required'),
  body('plantingDate').isISO8601().withMessage('Valid planting date is required'),
  body('location').notEmpty().withMessage('Location is required')
], controller.addPlant);

router.post('/edit/:id', [
  body('type').notEmpty().withMessage('Type is required'),
  body('variety').notEmpty().withMessage('Variety is required'),
  body('plantingDate').isISO8601().withMessage('Valid planting date is required'),
  body('location').notEmpty().withMessage('Location is required')
], controller.updatePlant);

router.get('/', controller.viewAllPlants);
router.get('/create', controller.showAddForm);
router.get('/edit/:id', controller.showEditForm);
router.post('/delete/:id', controller.deletePlant);


module.exports = router;