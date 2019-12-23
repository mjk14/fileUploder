const multer  = require('multer');
const mkdirp  = require('mkdirp');

const ImageStorage = multer.diskStorage({
    destination : (req , file , cb) => {
        let dir = `./public/uploads/images`;
        mkdirp(dir , err => cb(err , dir));
    },
    filename: (req , file , cb) => {
        cb(null, req.content.url);
    }
});
const imageFilter = (req , file , cb) => {
     cb(null , true);
}
const uploadImage = multer({ 
    storage : ImageStorage,
    limits : {
        fileSize :process.env.FILE_SIZE_LIMITATION
    },
    fileFilter : imageFilter
});


module.exports = {
    uploadImage
}