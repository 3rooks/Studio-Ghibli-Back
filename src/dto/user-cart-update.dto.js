import ajv from '#config/ajv.js';
import {
    idDTOSchema,
    quantityDTOSchema
} from '#constants/dto-product-types.js';
import { Type } from '@sinclair/typebox';

const UserCartBodyDTOSchema = Type.Object(
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

const UserCartParamsDTOSchema = Type.Object(
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

const validateSchemaBody = ajv.compile(UserCartBodyDTOSchema);
const validateSchemaParams = ajv.compile(UserCartParamsDTOSchema);

export const userCartBodyDTO = (req, res, next) => {
    const isDTOValid = validateSchemaBody(req.body);

    if (!isDTOValid)
        return res.status(400).json({
            errors: validateSchemaBody.errors.map((error) => error.message)
        });

    next();
};

export const userCartParamsDTO = (req, res, next) => {
    const isDTOValid = validateSchemaParams(req.params);

    if (!isDTOValid)
        return res.status(400).json({
            errors: validateSchemaParams.errors.map((error) => error.message)
        });

    next();
};
