import cloudinary from '#config/cloudinary.js';
import { unlink } from 'fs/promises';

const multerDTO = async (req, res, next) => {
    const { path } = req.file;

    try {
        const { url } = await cloudinary.v2.uploader.upload(path);
        req.body.image = url;

        await unlink(path);
        next();
    } catch (error) {
        console.log(error);
    }
};

export default multerDTO;
