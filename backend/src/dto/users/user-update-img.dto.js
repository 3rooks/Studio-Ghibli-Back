import ajv from '#config/ajv.js';
import { imageDTOSchema } from '#constants/dto-user-types.js';
import { Type } from '@sinclair/typebox';

const UpdatePicDTOSchema = Type.Object(
    {
        image: imageDTOSchema
    },
    {
        additionalProperties: false,
        errorMessage: {
            additionalProperties: 'Object format is invalid'
        }
    }
);

const validateSchema = ajv.compile(UpdatePicDTOSchema);

const userUpdateImgDTO = (req, res, next) => {
    const isDTOValid = validateSchema(req.body);

    if (!isDTOValid)
        return res.status(400).json({
            errors: validateSchema.errors.map((error) => error.message)
        });

    next();
};

export default userUpdateImgDTO;
