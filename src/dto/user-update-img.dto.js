import { Type } from '@sinclair/typebox';
import Ajv from 'ajv';
import addErrors from 'ajv-errors';
import { imageDTOSchema } from '#constants/dto-user-types.js';

const UpdatePicDTOSchema = Type.Object(
    {
        pic: imageDTOSchema
    },
    {
        additionalProperties: false,
        errorMessage: {
            additionalProperties: 'Object format is invalid'
        }
    }
);

const ajv = new Ajv({ allErrors: true })
    .addKeyword('kind')
    .addKeyword('modifier');

addErrors(ajv);

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
