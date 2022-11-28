import ajv from '#config/ajv.js';
import { imageDTOSchema } from '#constants/dto-types.js';
import { Type } from '@sinclair/typebox';

const userImageDTOSchema = Type.Object(
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

const validateSchema = ajv.compile(userImageDTOSchema);

const userImageDTO = (req, res, next) => {
    const isDTOValid = validateSchema(req.body);

    if (!isDTOValid)
        return res.status(400).json({
            errors: validateSchema.errors.map((error) => error.message)
        });

    next();
};

export default userImageDTO;
