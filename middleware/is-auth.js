module.exports = function (req, res, next) {
  if (!req.session.isLoggedIn) {
    return res.redirect('/' + global.lang.current + '/examples/store/auth/login')
  }
  next()
}
