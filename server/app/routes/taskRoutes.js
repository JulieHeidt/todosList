var express = require('express')
var apiRouter = express.Router() //get an instance of express router
var taskController = require('../controllers/tasksController')
var Task = requier('../models/Task')
var usersController = require('../controllers/usersController')
var User = require('../models/User')

