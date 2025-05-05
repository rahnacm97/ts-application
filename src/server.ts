import express from 'express';
import path, { dirname } from 'path';
import {connectDB} from './db/connectDB'
const app = express()
connectDB()
import userRouter from './router/user'
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use('/',userRouter);
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'../views'))
app.use(express.static(path.join(__dirname,'../public')))

const PORT:number = 3000;
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})
