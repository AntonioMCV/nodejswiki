const { validationResult } = require('express-validator')

const Product = require('../models/product')

exports.getAddProduct = (req, res, next) => {
  res.render('shop/admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false,
    hasError: false,
    errorMessage: [],
    validationErrors: [],
    translates: global.lang.examples.store.addOrEditProducts
  })
}

exports.postAddProduct = (req, res, next) => {
  console.log('add product controller')
  const title = req.body.title
  const image = req.file
  const price = req.body.price
  const description = req.body.description
  if (!image) {
    return res.status(442).render('shop/admin/edit-product', {
      pageTitle: 'Add Product',
      path: '/admin/edit-product',
      editing: false,
      hasError: true,
      product: {
        title: title,
        price: price,
        description: description
      },
      errorMessage: 'Attached file is not an image',
      validationErrors: [],
      translates: global.lang.examples.store.addOrEditProducts
    })
  }
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(442).render('shop/admin/edit-product', {
      pageTitle: 'Add Product',
      path: '/admin/edit-product',
      editing: false,
      hasError: true,
      product: {
        title: title,
        price: price,
        description: description
      },
      errorMessage: errors.array()[0].msg,
      validationErrors: errors.array(),
      translates: global.lang.examples.store.addOrEditProducts
    })
  }

  const imageUrl = image.path

  const product = new Product({
    title: title,
    price: price,
    description: description,
    imageUrl: imageUrl,
    userId: req.user
  })
  product
    .save()
    .then(result => {
      // console.log(result)
      console.log('Created Product')
      res.redirect('/' + global.lang.current + '/examples/store/admin/products')
    })
    .catch(err => {
      const error = new Error(err)
      error.httpStatusCode = 500
      return next(error)
    })
}

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit
  if (!editMode) {
    return res.redirect('/' + global.lang.current + '/examples/store')
  }
  const prodId = req.params.productId
  Product.findById(prodId)
    .then(product => {
      if (!product) {
        return res.redirect('/' + global.lang.current + '/examples/store')
      }
      res.render('shop/admin/edit-product', {
        pageTitle: 'Edit Product',
        path: '/admin/edit-product',
        editing: editMode,
        product: product,
        hasError: false,
        errorMessage: [],
        validationErrors: [],
        translates: global.lang.examples.store.addOrEditProducts
      })
    })
    .catch(err => {
      const error = new Error(err)
      error.httpStatusCode = 500
      return next(error)
    })
}

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId
  const updatedTitle = req.body.title
  const updatedPrice = req.body.price
  const updatedDescription = req.body.description
  const image = req.file

  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(442).render('shop/admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing: true,
      hasError: true,
      product: {
        title: updatedTitle,
        price: updatedPrice,
        description: updatedDescription,
        _id: prodId
      },
      errorMessage: errors.array()[0].msg,
      validationErrors: errors.array(),
      translates: global.lang.examples.store.addOrEditProducts
    })
  }

  Product.findById(prodId)
    .then(product => {
      if (product.userId.toString() !== req.user._id.toString()) {
        return res.redirect('/' + global.lang.current + '/examples/store')
      }
      product.title = updatedTitle
      product.price = updatedPrice
      product.description = updatedDescription
      if (image) {
        product.imageUrl = image.path
      }
      return product.save().then(result => {
        console.log('UPDATED PRODUCT')
        res.redirect('/' + global.lang.current + '/examples/store/admin/products')
      })
    })
    .catch(err => {
      const error = new Error(err)
      error.httpStatusCode = 500
      return next(error)
    })
}

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId
  Product.deleteOne({ _id: prodId, userId: req.user._id })
    .then(() => {
      console.log('DESTORYED PRODUCT')
      res.redirect('/' + global.lang.current + '/examples/store/admin/products')
    })
    .catch(err => {
      const error = new Error(err)
      error.httpStatusCode = 500
      return next(error)
    })
}

exports.getProducts = (req, res, next) => {
  Product.find({userId: req.user._id})
    .then(products => {
      console.log(products)
      res.render('shop/admin/products', {
        prods: products,
        pageTitle: 'Admin Products',
        path: '/admin/products',
        translates: global.lang.examples.store.adminProducts
      })
    })
    .catch(err => {
      const error = new Error(err)
      error.httpStatusCode = 500
      return next(error)
    })
}
