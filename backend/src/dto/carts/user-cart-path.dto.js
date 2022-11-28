import ajv from '#config/ajv.js';
import { idDTOSchema } from '#constants/dto-product-types.js';
import { Type } from '@sinclair/typebox';

const UserCartParamsDTOSchema = Type.Object(
    {
        cartId: idDTOSchema,
        productId: idDTOSchema
    },
    {
        additionalProperties: false,
        errorMessage: {
            additionalProperties: 'Object format is invalid'
        }
    }
);

const validateSchemaParams = ajv.compile(UserCartParamsDTOSchema);

export const userCartIdProductIdParamsDTO = (req, res, next) => {
    const isDTOValid = validateSchemaParams(req.params);

    if (!isDTOValid)
        return res.status(400).json({
            errors: validateSchemaParams.errors.map((error) => error.message)
        });

    next();
};
