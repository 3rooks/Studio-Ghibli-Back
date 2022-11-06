import ajv from '#config/ajv.js';
import { idDTOSchema } from '#constants/dto-product-types.js';
import { Type } from '@sinclair/typebox';

const UserCartDTOSchema = Type.Object(
    {
        product: idDTOSchema
    },
    {
        additionalProperties: false,
        errorMessage: {
            additionalProperties: 'Object format is invalid'
        }
    }
);

const validateSchema = ajv.compile(UserCartDTOSchema);

const userCartDTO = (req, res, next) => {
    const isDTOValid = validateSchema(req.body);

    if (!isDTOValid)
        return res.status(400).json({
            errors: validateSchema.errors.map((error) => error.message)
        });

    next();
};

export default userCartDTO;
