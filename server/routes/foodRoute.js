const express = require('express');
const router = express.Router();
const { getFoodItems, addFoodItem, modifyAvailability } = require('../controllers/foodController')

router.get('/menu', getFoodItems);

router.post('/add', addFoodItem);

router.post('/available', modifyAvailability);

module.exports = router;