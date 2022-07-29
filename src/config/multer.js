import multer from 'multer';
import uuidV4 from '#lib/uuidRandom.js';
import IMAGE_FORMATS from '#constants/image-formats.js';
import { extname } from 'path';
import { IMG_PATH } from '#utils/paths.js';
import { InvalidMimetypeFormatException } from '#errors/invalid-mimetype.exception.js';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, IMG_PATH);
    },
    filename: (req, file, cb) => {
        cb(null, `${uuidV4()}${extname(file.originalname)}`);
    }
});

// extname(file.originalname).toLowerCase()

const upload = multer({
    storage,
    limits: { fileSize: 10000000 },
    fileFilter: (req, file, cb) => {
        if (!Object.values(IMAGE_FORMATS).includes(file.mimetype))
            cb(new InvalidMimetypeFormatException());
        else cb(null, true);
    }
});

export default upload;
