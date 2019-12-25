const jwt=require('jsonwebtoken');

module.exports=function auth(req,res,next){
    const token=req.header('x-auth-token');
    if(!token)return res.status(401).json('access denied');
    try {
        const decoded=jwt.verify(token,process.env.JSON_WEB_TOKE);
        req.content=decoded;
        //validation size of file and extenstion of file
            if(req.file)
            {
                let fileExt=['.png','.jpg','.jpeg','.svg'];
                let file=req.file;
                if(file.size>process.env.FILE_SIZE_LIMITATION||(!fileExt.includes(path.extname(file.originalname)))){
                return res.json({
                    message:'سایز یا پسوند فایل مشکل دارد',
                    success:false
                });
            }
        }
        next();
    } catch (err) {
        return res.status(400).json('invalid token');
    }
}