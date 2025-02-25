require('dotenv').config();
const express=require('express');
const helmet = require('helmet');
const app=express();
const controller=require('./controller');

//middlewares
app.use(helmet());//for security configuration
const { uploadImage } = require('./middlewares/uploadImage');
const auth=require('./middlewares/auth.js');


//routes
app.post('/user/upload_image',auth,uploadImage.single('image'),controller.save.bind(controller));
app.post('/user/get_image',auth,controller.download.bind(controller));
app.post('/user/delete_image',auth,controller.delete.bind(controller));

//web server
const port=process.env.APPLICATION_PORT;
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});