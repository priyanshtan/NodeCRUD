const mongoose = require('mongoose')

const connect = async()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/bookDB')
            console.log('Connected to MongoDB')

    }
    catch(err){
        console.log(err)

    }
}
module.exports = connect