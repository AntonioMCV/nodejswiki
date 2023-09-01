exports.getBasicWebApplications = (req, res, next) => {
  res.render('basics/web-applications', {
    pageTitle: 'Basic Web Applications',
    path: '/basics/web-applications',
    translates: global.lang.basics.webApplications
  })
}

exports.getLibrariesExpress = (req, res, next) => {
  res.render('libraries/express', {
    pageTitle: 'Library Express',
    path: '/libraries/express',
    translates: global.lang.libraries.express
  })
}

exports.getLibrariesPath = (req, res, next) => {
  res.render('libraries/path', {
    pageTitle: 'Library path',
    path: '/libraries/path',
    translates: global.lang.libraries.path
  })
}

exports.getLibrariesMysqlSequelize = (req, res, next) => {
  res.render('libraries/mysql', {
    pageTitle: 'Library mysql',
    path: '/libraries/mysql',
    translates: global.lang.libraries.mysqlSequelize
  })
}

exports.getLibrariesMongodbMongoose = (req, res, next) => {
  res.render('libraries/mongodb', {
    pageTitle: 'Library mongodb',
    path: '/libraries/mongodb',
    translates: global.lang.libraries.mongodbMongoose
  })
}

exports.getHome = (req, res, next) => {
  return res.render('home', {
    pageTitle: 'NodeJS Wiki Home Page',
    path: '/',
    translates: global.lang.home
  })
}

exports.postSetLanguage = (req, res, next) => {
  const language = req.body.language
  let path = req.body.path

  global.config.application.langs.find(lang => {
    if (lang === path.split('/')[1]) {
      path = path.replace('/' + lang, '')
    }
  })
  global.i18n.setLanguage(language)
  res.redirect('/' + language + path)
}
