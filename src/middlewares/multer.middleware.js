import cloudinary from '#config/cloudinary.js';
import { IMAGE_FORMATS } from '#constants/image-formats.js';
import { USER_RESPONSE } from '#constants/response-status-json.js';
import { IMG_PATH } from '#utils/paths.js';
import { unlink } from 'fs/promises';
import multer from 'multer';
import { extname } from 'path';
import uuid from 'uuid-random';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, IMG_PATH);
    },
    filename: (req, file, cb) => {
        // extname(file.originalname).toLowerCase()
        cb(null, `${uuid()}${extname(file.originalname)}`);
    }
});

const upload = multer({
    storage,
    limits: { fileSize: 10000000 },
    fileFilter: (req, file, cb) => {
        if (!Object.values(IMAGE_FORMATS).includes(file.mimetype))
            cb(new Error('Incorrect image format'));
        else cb(null, true);
    }
}).single('image');

const uploadCloud = async (req, res, next) => {
    try {
        const { path } = req.file;
        const { url } = await cloudinary.v2.uploader.upload(path);
        req.body.image = url;
        await unlink(path);
        next();
    } catch (error) {
        res.status(503).json(USER_RESPONSE[503]);
    }
};

export { upload, uploadCloud };
