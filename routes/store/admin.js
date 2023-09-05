const express = require('express')

const addminController = require('../../controllers/admin')
const isAuth = require('../../middleware/is-auth')

const router = express.Router()

// /admin/add-product => GET
router.get('/add-product', isAuth, addminController.getAddProduct)

// /admin/add-product => GET
router.get('/products', isAuth, addminController.getProducts)

// /admin/add-product => POST
router.post('/add-product', isAuth, addminController.postAddProduct)

router.get('/edit-product/:productId', isAuth, addminController.getEditProduct)

router.post('/edit-product', isAuth, addminController.postEditProduct)

router.post('/delete-product', isAuth, addminController.postDeleteProduct)

module.exports = router
