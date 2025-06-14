const express = require('express')
const router = express.Router()
const {createBook,getAllBook} = require('../Models/controller/bookController')

router.post('/book/create',createBook)
router.get('/book',getAllBook)


module.exports=router 