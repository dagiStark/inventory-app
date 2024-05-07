const express = require('express')

const router = express.Router();



const itemController = require('../controllers/itemController')


// Routes of items

// get request for overall home page

router.get('/', itemController.index)

// get request for creating spare part

// post request for creating spare part

// get request for deleting spare part

// post request for deleting spare part

// get request for updating spare part

// post request for updating spare part

// get request for reading spare part

