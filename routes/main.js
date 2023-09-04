
const express = require('express')

const mainController = require('../controllers/main')

const router = express.Router()

router.get('/basics/web-applications', mainController.getBasicWebApplications)

router.get('/basics/global-variables', mainController.getGlobalVariables)

router.get('/basics/modules', mainController.getModules)

router.get('/libraries/express', mainController.getLibrariesExpress)

router.get('/libraries/path', mainController.getLibrariesPath)

router.get('/libraries/mysql-sequelize', mainController.getLibrariesMysqlSequelize)

router.get('/libraries/mongodb-mongoose', mainController.getLibrariesMongodbMongoose)

router.get('/', mainController.getHome)

router.post('/set-language', mainController.postSetLanguage)

module.exports = router
