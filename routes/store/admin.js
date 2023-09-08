const express = require('express')
const { body } = require('express-validator')

const addminController = require('../../controllers/admin')
const isAuth = require('../../middleware/is-auth')

const router = express.Router()

// /admin/add-product => GET
router.get('/add-product', isAuth, addminController.getAddProduct)

// /admin/add-product => GET
router.get('/products', isAuth, addminController.getProducts)

// /admin/add-product => POST
router.post(
  '/add-product',
  [
    body('title')
      .isString()
      .isLength({ min: 3 })
      .trim(),
    body('price')
      .isFloat(),
    body('description')
      .isLength({ min: 5, max: 400 })
      .trim()
  ],
  isAuth,
  addminController.postAddProduct
)

router.get('/edit-product/:productId', isAuth, addminController.getEditProduct)

router.post(
  '/edit-product',
  [
    body('title')
      .isString()
      .isLength({ min: 3 })
      .trim(),
    body('price')
      .isFloat(),
    body('description')
      .isLength({ min: 5, max: 400 })
      .trim()
  ],
  isAuth,
  addminController.postEditProduct
)

router.post('/delete-product', isAuth, addminController.postDeleteProduct)

module.exports = router
