const express = require('express');
require('dotenv').config({path: __dirname+'\\config.env'});
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(cookieParser());
app.use(require('./routes/auth'))


const PORT = process.env.PORT||8000;

app.listen(PORT,()=>{
    console.log(`server running on : http://localhost:${PORT}`); 
})
