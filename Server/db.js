const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODBURI,{
    useNewUrlParser : true,
    useUnifiedTopology : true,
}).then(()=>{console.log('Connection successful')})
.catch((err) => {console.log(err)});

module.exports = mongoose;