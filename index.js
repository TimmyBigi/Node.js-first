const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDb = require('./src/config/db');
const idmeRoutes = require('./src/routes/id.me.routes')

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(morgan('dev'));

app.get('/',(req,res)=>{
    res.send('hello')
});

app.use('/', idmeRoutes);




app.listen(port,()=>{
    connectDb();
    console.log(`sever runnung now on port ${port}`)
});

