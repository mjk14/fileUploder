const fs=require('fs');
const path=require('path');
module.exports=new class{
    save(req,res){
        try {
            let filePath=path.resolve(`./public/uploads/images/${req.content.url}`);
            if(fs.existsSync(filePath))
            {
                return res.json({
                    message : 'فایل شما با موفقیت آپلود گردید',
                    success : true
                });
            } else {
                return res.json({
                    message : 'فایل شما آپلود نشد',
                    success : false
                });
            }
        } catch (err) {
            return res.status(500).json({
                message:'internal error',
                success:false
            });
        }
    }
    
    download(req,res){
        let filePath=path.resolve(`./public/uploads/images/${req.content.url}`);
        if(!fs.existsSync(filePath))
        {
            return res.status(404).json({
                message:'فایل موجود نیست',
                success:false
            });
        }
        return res.download(filePath);
    }
    delete(req,res){
        let filePath=path.resolve(`./public/uploads/images/${req.content.url}`);
        if(fs.existsSync(filePath))
        {
            fs.unlink(`./public/uploads/images/${req.content.url}`, (err) => {
                if (err) {
                    return res.status(500).json({
                        message:'عملیات حذف موفقیت آمیز نبود',
                        success:false
                    });
                }
                return res.status(200).json({
                    message:'عملیات حذف موفقیت آمیز بود',
                    success:true
                });
            });
        } else{
            return res.status(404).json({
                message:'فایل وجود ندارد',
                success:false
            })
        }
    }

}