const express = require('express')

const router = express.Router()

var self = {
  setLanguage: function (language) {
    let langCurrentChanged = false
    global.config.application.langs.find(lang => {
      if (lang === language) {
        global.lang = require('../../languages/' + lang)
        global.lang.current = lang
        langCurrentChanged = true
      }
    })
    if (!langCurrentChanged) {
      global.lang = require('../../languages/' + global.config.site.language)
      global.lang.current = global.config.site.language
    }
  },
  changeLaguageByNav: function (language) {
    router.get((req, res, next) => {
      res.redirect('/' + language)
    })
  }
}

module.exports = self
