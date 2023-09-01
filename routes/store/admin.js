const express = require('express')

const addminController = require('../../controllers/admin')

const router = express.Router()

// /admin/add-product => GET
router.get('/add-product', addminController.getAddProduct)

// /admin/add-product => GET
router.get('/products', addminController.getProducts)

// /admin/add-product => POST
router.post('/add-product', addminController.postAddProduct)

router.get('/edit-product/:productId', addminController.getEditProduct)

router.post('/edit-product', addminController.postEditProduct)

router.post('/delete-product', addminController.postDeleteProduct)

module.exports = router
