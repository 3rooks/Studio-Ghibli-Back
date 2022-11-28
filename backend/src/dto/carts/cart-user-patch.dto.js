import ajv from '#config/ajv.js';
import { quantityDTOSchema } from '#constants/dto-types.js';
import { Type } from '@sinclair/typebox';

const patchCartDTOSchema = Type.Object(
    {
        quantity: quantityDTOSchema
    },
    {
        additionalProperties: false,
        errorMessage: {
            additionalProperties: 'Object format is invalid'
        }
    }
);

const validateSchema = ajv.compile(patchCartDTOSchema);

const patchCartDTO = (req, res, next) => {
    const isDTOValid = validateSchema(req.body);

    if (!isDTOValid)
        return res.status(400).json({
            errors: validateSchema.errors.map((error) => error.message)
        });

    next();
};

export default patchCartDTO;
