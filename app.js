const path = require('node:path')

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const { findAvailablePort } = require('./util/free-port')
const errorCrontroller = require('./controllers/error')
const User = require('./models/user')

const app = express()

global.config = require('./config')
global.i18n = require('./system/helpers/i18n')

global.i18n.setLanguage()

const languages = global.config.application.languages

app.set('view engine', 'ejs')
app.set('views', 'views')

const adminRoutes = require('./routes/store/admin')
const shopRoutes = require('./routes/store/shop')
const homeRoutes = require('./routes/main')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use((req, res, next) => {
  User.findById('64f1940fbd12a77f1016519a')
    .then(user => {
      req.user = user
      next()
    })
    .catch(err => {
      console.log(err)
    })
})

app.use('/:lang(' + languages + ')/examples/store/admin', adminRoutes)
app.use('/:lang(' + languages + ')/examples/store', shopRoutes)
app.use('/:lang(' + languages + ')/', homeRoutes)

app.use('/examples/store/admin', adminRoutes)
app.use('/examples/store', shopRoutes)
app.use('/', homeRoutes)

app.use(errorCrontroller.get404)

mongoose.connect('mongodb+srv://antoniomartinezcv:G3LSmw5jQv4v0a67@cluster0.qza9hqi.mongodb.net/shop?retryWrites=true&w=majority')
User.findOne().then(user => {
  if (!user) {
    const user = new User({
      name: 'Antonio',
      email: 'antonio@test.com',
      cart: {
        items: []
      }
    })
    user.save()
  }

  // Check if the environment variable is set to production environment
  const desiredPort = process.env.PORT || 3000

  // Check if the port is available with findAvailablePort method
  findAvailablePort(desiredPort).then(port => {
    app.listen(port, () => {
      console.log(`server listening on port http://localhost:${port}`)
    })
  })
})
  .catch(err => {
    console.log(err)
  })
