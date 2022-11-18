import cloudinary from '#config/cloudinary.js';
import { unlink } from 'fs/promises';

const multerDTO = async (req, res, next) => {
    try {
        const { path } = req.file;
        const { url } = await cloudinary.v2.uploader.upload(path);
        req.body.image = url;
        await unlink(path);
        next();
    } catch (error) {
        req.body.image = 'http://localhost:8080/images/favicon.ico';
        next();
    }
};

export default multerDTO;
