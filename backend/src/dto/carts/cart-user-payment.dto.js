import { paymentPriceDTOSchema, pmDTOSchema } from '#constants/dto-types.js';
import ajv from '#lib/ajv.js';
import { Type } from '@sinclair/typebox';

const postCartPaymentDTOSchema = Type.Object(
    {
        pmid: pmDTOSchema,
        amount: paymentPriceDTOSchema
    },
    {
        additionalProperties: false,
        errorMessage: {
            additionalProperties: 'Object format is invalid'
        }
    }
);

const validateSchema = ajv.compile(postCartPaymentDTOSchema);

const postCartPaymentDTO = (req, res, next) => {
    const isDTOValid = validateSchema(req.body);

    if (!isDTOValid)
        return res.status(400).json({
            errors: validateSchema.errors.map((error) => error.message)
        });

    next();
};

export default postCartPaymentDTO;
