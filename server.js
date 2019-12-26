require('dotenv').config();
const express=require('express');
const app=express();
const controller=require('./controller');

//middlewares
const { uploadImage } = require('./middlewares/uploadImage');
const auth=require('./middlewares/auth.js');


//routes
app.post('/user/upload_image',auth,uploadImage.single('image'),controller.save.bind(controller));
app.post('/user/get_image',auth,controller.download.bind(controller));
app.post('/user/delete_image',auth,controller.delete.bind(controller));


app.listen(APPLICATION_PORT,()=>{
    console.log(`server is running on port ${port}`);
});