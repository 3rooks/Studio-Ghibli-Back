import { idDTOSchema } from '#constants/dto-types.js';
import ajv from '#lib/ajv.js';
import { Type } from '@sinclair/typebox';

const productIdParamsDTOSchema = Type.Object(
    {
        productId: idDTOSchema
    },
    {
        additionalProperties: false,
        errorMessage: {
            additionalProperties: 'Object format is invalid'
        }
    }
);

const validateSchema = ajv.compile(productIdParamsDTOSchema);

const productIdParamsDTO = (req, res, next) => {
    const { productId } = req.params;
    const isDTOValid = validateSchema({ productId });

    if (!isDTOValid)
        return res.status(400).json({
            errors: validateSchema.errors.map((error) => error.message)
        });

    next();
};

export default productIdParamsDTO;
