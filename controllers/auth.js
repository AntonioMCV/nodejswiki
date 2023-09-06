const crypto = require('node:crypto')

// Package to encrypt passwords
const bcrypt = require('bcryptjs')
// Package to send emails
const nodemailer = require('nodemailer')
// Package to send emails with SendGrid
const sendgridTansport = require('nodemailer-sendgrid-transport')

const User = require('../models/user')

const transporter = nodemailer.createTransport(sendgridTansport({
  auth: {
    api_key: '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'
  },
  tls: {
    rejectUnauthorized: false
  }
}))

exports.getLogin = (req, res, next) => {
  res.render('shop/auth/login', {
    pageTitle: 'Login',
    path: '/login',
    errorMessage: req.flash('error')
  })
}

exports.getSignup = (req, res, next) => {
  res.render('shop/auth/signup', {
    pageTitle: 'Signup',
    path: '/signup',
    errorMessage: req.flash('error')
  })
}

exports.postLogin = (req, res, next) => {
  const email = req.body.email
  const password = req.body.password
  User.findOne({ email: email })
    .then((user) => {
      if (!user) {
        req.flash('error', 'Invalid email or password.')
        return res.redirect('/' + global.lang.current + '/examples/store/auth/login')
      }
      bcrypt
        .compare(password, user.password)
        .then((doMatch) => {
          if (doMatch) {
            // Create a new user in the database session collection
            req.session.isLoggedIn = true
            req.session.user = user
            return req.session.save((err) => {
              console.log(err)
              res.redirect('/' + global.lang.current + '/examples/store')
            })
          }
          res.redirect('/' + global.lang.current + '/examples/store/auth/login')
        }).catch((err) => {
          console.error(err)
          res.redirect('/' + global.lang.current + '/examples/store/auth/login')
        })
    })
    .catch((err) => {
      console.error(err)
    })
}

exports.postSignup = (req, res, next) => {
  const email = req.body.email
  const password = req.body.password
  const confirmPassword = req.body.confirmPassword
  User.findOne({ email: email})
    .then((userDoc) => {
      if (userDoc) {
        req.flash('error', 'E-Mail exits already, please pick a diferent one.')
        return res.redirect('/' + global.lang.current + '/examples/store/auth/signup')
      }
      return bcrypt.hash(password, 12)
        .then((hashedPassword) => {
          const user = new User({
            email: email,
            password: hashedPassword,
            cart: {items: []}
          })
          return user.save()
        })
        .then((result) => {
          res.redirect('/' + global.lang.current + '/examples/store/auth/login')
          // TODO fix 'UNABLE_TO_GET_ISSUER_CERT_LOCALLY' error to send email
          return transporter.sendMail({
            to: email,
            from: 'shop@nodejswiki.com',
            subject: 'Welcome to Shop Node.js Wiki',
            html: '<h1>Welcome to Shop Node.js Wiki!</h1>'
          })
        })
        .catch((err) => {
          console.error(err)
        })
    })
    .catch((err) => {
      console.error(err)
    })
}

exports.postLogout = (req, res, next) => {
  req.session.destroy((err) => {
    console.log(err)
  })
  res.redirect('/' + global.lang.current + '/examples/store')
}

exports.getReset = (req, res, next) => {
  res.render('shop/auth/reset', {
    pageTitle: 'Reset Password',
    path: '/reset',
    errorMessage: req.flash('error')
  })
}

exports.postReset = (req, res, next) => {
  crypto.randomBytes(32, (err, buffer) => {
    console.log(err)
    if (err) {
      return res.redirect('/' + global.lang.current + '/examples/store/auth/reset')
    }
    const token = buffer.toString('hex')
    User.findOne({ email: req.body.email })
      .then((user) => {
        if (!user) {
          req.flash('error', 'No account with that email found.')
          return res.redirect('/' + global.lang.current + '/examples/store/auth/reset')
        }
        user.resetToken = token
        user.resetTokenExpiration = Date.now() + 3600000 // 1 hour
        return user.save()
      })
      .then(result => {
        res.redirect('/' + global.lang.current + '/examples/store/')
        // TODO fix 'UNABLE_TO_GET_ISSUER_CERT_LOCALLY' error to send email
        return transporter.sendMail({
          to: req.body.email,
          from: 'shop@nodejswiki.com',
          subject: 'Password Reset',
          html: `
            <p>You request a password reset for your account</p>
            <p>Click on the following link to reset your password:</p>
            <p><a href="http://localhost:${global.port}/${global.lang.current}/examples/store/auth/reset/${token}">Reset Password</a></p>
          `
        })
      })
      .catch((err) => {
        console.log(err)
      })
  })
}

exports.getNewPassword = (req, res, next) => {
  const token = req.params.token
  User.findOne({ resetToken: token, resetTokenExpiration: { $gt: Date.now() } })
    .then((user) => {
      res.render('shop/auth/new-password', {
        pageTitle: 'New Password',
        path: '/new-password',
        errorMessage: req.flash('error'),
        userId: user._id.toString(),
        passwordToken: token
      })
    })
    .catch((err) => {
      console.log(err)
    })
}

exports.postNewPassword = (req, res, next) => {
  const newPassword = req.body.newPassword
  const userId = req.body.userId
  const passwordToken = req.body.passwordToken
  let resetUser

  User.findOne({
    resetToken: passwordToken,
    resetTokenExpiration: { $gt: Date.now() },
    _id: userId
  })
  .then((user) => {
    resetUser = user
    return bcrypt.hash(newPassword, 12)
  })
  .then((hashedPassword) => {
    resetUser.password = hashedPassword
    resetUser.resetToken = undefined
    resetUser.resetTokenExpiration = undefined
    return resetUser.save()
  })
  .then((result) => {
    res.redirect('/' + global.lang.current + '/examples/store/auth/login')
  })
  .catch((err) => {
    console.log(err)
  })
}
