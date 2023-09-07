const path = require('node:path')

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session)
// CSURF is a package generator tokens to protect against CSRF attacks
const csrf = require('csurf')
// Flash is a package to write in session and remove it once we have read it
const flash = require('connect-flash')

const { findAvailablePort } = require('./util/free-port')
const errorCrontroller = require('./controllers/error')
const User = require('./models/user')

const MONGODB_URI = 'mongodb+srv://antoniomartinezcv:G3LSmw5jQv4v0a67@cluster0.qza9hqi.mongodb.net/shop'

const app = express()

// Store to use for our session
const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: 'sessions'
})
const csrfProtection = csrf()

global.config = require('./config')
global.i18n = require('./system/helpers/i18n')

global.i18n.setLanguage()

const languages = global.config.application.languages

app.set('view engine', 'ejs')
app.set('views', 'views')

const adminRoutes = require('./routes/store/admin')
const shopRoutes = require('./routes/store/shop')
const authRoutes = require('./routes/store/auth')
const homeRoutes = require('./routes/main')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

// Session used to login or shop cart example
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  store: store
}))

app.use(csrfProtection)
app.use(flash())

app.use((req, res, next) => {
  res.locals.isAuthenticated = req.session.isLoggedIn
  res.locals.csrfToken = req.csrfToken()
  next()
})

app.use((req, res, next) => {
  if (!req.session.user) {
    return next()
  }
  User.findById(req.session.user._id)
    .then(user => {
      if (!user) {
        return next()
      }
      req.user = user
      next()
    })
    .catch(err => {
      next(new Error(err))
    })
})

app.use('/:lang(' + languages + ')/examples/store/admin', adminRoutes)
app.use('/:lang(' + languages + ')/examples/store/auth', authRoutes)
app.use('/:lang(' + languages + ')/examples/store', shopRoutes)
app.use('/:lang(' + languages + ')/', homeRoutes)

app.use('/examples/store/admin', adminRoutes)
app.use('/examples/store/auth', authRoutes)
app.use('/examples/store', shopRoutes)
app.use('/', homeRoutes)

app.use('/:lang(' + languages + ')/500', errorCrontroller.get500)
app.use('/500', errorCrontroller.get500)
app.use(errorCrontroller.get404)

app.use((error, req, res, next) => {
  res.status(500).render('500', {
    pageTitle: 'Error!',
    path: '/500',
    isAuthenticated: req.session.isLoggedIn
  })
})

mongoose
.connect(MONGODB_URI)
.then(result => {
  // Check if the environment variable is set to production environment
  const desiredPort = process.env.PORT || 3000

  // Check if the port is available with findAvailablePort method
  findAvailablePort(desiredPort).then(port => {
    app.listen(port, () => {
      global.port = port
      console.log(`server listening on port http://localhost:${port}`)
    })
  })
})
  .catch(err => {
    console.log(err)
  })
