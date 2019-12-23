require('dotenv').config();
const express=require('express');
const app=express();
const controller=require('./controller');

//middlewares
const { uploadImage } = require('./middlewares/uploadImage');
const auth=require('./middlewares/auth.js');


//routes
app.post('/user/upload_image',auth,uploadImage.single('image'),controller.save.bind(controller));
app.post('/user/get_image',controller.download.bind(controller));
//app.delete('/user/delete_image',controller.delete(req,res));


app.listen(APPLICATION_PORT,()=>{
    console.log(`server is running on port ${port}`);
});