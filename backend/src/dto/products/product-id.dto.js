import ajv from '#config/ajv.js';
import { idDTOSchema } from '#constants/dto-product-types.js';
import { Type } from '@sinclair/typebox';

const ProductGetByIdDTOSchema = Type.Object(
    {
        id: idDTOSchema
    },
    {
        additionalProperties: false,
        errorMessage: {
            additionalProperties: 'Object format is invalid'
        }
    }
);

const validateSchema = ajv.compile(ProductGetByIdDTOSchema);

const productIdDTO = (req, res, next) => {
    const isDTOValid = validateSchema(req.params);

    if (!isDTOValid)
        return res.status(400).json({
            errors: validateSchema.errors.map((error) => error.message)
        });

    next();
};

export default productIdDTO;
