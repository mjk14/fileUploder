module.exports=new class{
    save(req,res){
        try {
            //req.body.image=req.file.path;
            if(req.file) {
                return res.json({
                    message : 'فایل شما با موفقیت آپلود گردید',
                    data : {
                        imagePath : 'http://localhost:3000/' + req.file.path.replace(/\\/g , '/') 
                    },
                    success : true
                });
            } else {
                return res.json({
                    message : 'فایل شما آپلود نشد',
                    success : false
                });
            }
        } catch (err) {
            return res.json({
                message:'internal error'
            });
        }
    }
    
    download(req,res){

    }
    delete(req,res){

    }

}