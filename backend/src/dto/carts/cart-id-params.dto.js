import ajv from '#config/ajv.js';
import { idDTOSchema } from '#constants/dto-types.js';
import { Type } from '@sinclair/typebox';

const cartIdParamsDTOSchema = Type.Object(
    {
        cartId: idDTOSchema
    },
    {
        additionalProperties: false,
        errorMessage: {
            additionalProperties: 'Object format is invalid'
        }
    }
);

const validateSchemaParams = ajv.compile(cartIdParamsDTOSchema);

const cartIdParamsDTO = (req, res, next) => {
    console.log(req.params);
    const isDTOValid = validateSchemaParams(req.params);

    if (!isDTOValid)
        return res.status(400).json({
            errors: validateSchemaParams.errors.map((error) => error.message)
        });

    next();
};

export default cartIdParamsDTO;
