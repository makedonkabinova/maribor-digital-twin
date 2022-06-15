const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController.js');
const {authenticateUser, authenticateRestaurant} = require("../middleware/authentication");

/*
 * GET
 */
router.get('/', orderController.list);

/*
 * GET
 */
router.get('/:id', orderController.show);

/*
 * POST
 */
router.post('/', orderController.create);

/*
 * PUT
 */
router.put('/:id', orderController.update);
router.put('/claim/:id', authenticateUser, orderController.claim);
router.put('/complete/:id', authenticateRestaurant, orderController.complete);

/*
 * DELETE
 */
router.delete('/:id', orderController.remove);

module.exports = router;
