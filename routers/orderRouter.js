const express = require('express')
const asyncHandler = require('express-async-handler')
const OrderContoller = require('../controllers/orderControllers')

const router = express()
const orderControllers = new OrderContoller()

router.post('/create', asyncHandler(orderControllers.CreateOrder))
router.get('/getorders', asyncHandler(orderControllers.GetOrders))
router.put('/update-order/:id', asyncHandler(orderControllers.updateOrders))
router.delete('/delete-order/:id', asyncHandler(orderControllers.deleteOrders))

module.exports = router