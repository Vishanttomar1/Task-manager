const mongoose = require('mongoose')
const ConnectString = 'mongodb://localhost:27017'



mongoose.connect(ConnectString)
.then(()=> console.log('CONNECTED TO DB...'))
.catch((err)=>console.log(err))