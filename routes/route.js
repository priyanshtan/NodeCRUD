const express = require('express')
const router = express.Router()
const {createBook,getAllBook,getBookById,updateBook,deleteBook} = require('../Models/controller/bookController')

router.post('/book/create',createBook)
router.get('/book',getAllBook)
router.get('/book/:id',getBookById)
router.put('/book/update/:id',updateBook)
router.delete('/book/delete/:id',deleteBook)



module.exports=router 