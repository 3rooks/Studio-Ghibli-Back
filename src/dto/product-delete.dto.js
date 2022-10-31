import { Type } from '@sinclair/typebox';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import addErrors from 'ajv-errors';
import { idDTOSchema } from '#constants/dto-product-types.js';

const ProductDeleteDTOSchema = Type.Object(
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

const ajv = new Ajv({ allErrors: true })
    .addKeyword('kind')
    .addKeyword('modifier');
addFormats(ajv, ['uuid']);
addErrors(ajv);

const validateSchema = ajv.compile(ProductDeleteDTOSchema);

const productDeleteDTO = (req, res, next) => {
    const isDTOValid = validateSchema(req.params);

    if (!isDTOValid)
        return res.status(400).json({
            errors: validateSchema.errors.map((error) => error.message)
        });

    next();
};

export default productDeleteDTO;
