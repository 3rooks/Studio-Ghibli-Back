import ajv from '#config/ajv.js';
import { emailDTOSchema } from '#constants/dto-types.js';
import { Type } from '@sinclair/typebox';

const userEmailDTOSchema = Type.Object(
    {
        email: emailDTOSchema
    },
    {
        additionalProperties: false,
        errorMessage: {
            additionalProperties: 'Object format is invalid'
        }
    }
);

const validateSchema = ajv.compile(userEmailDTOSchema);

const userEmailDTO = (req, res, next) => {
    const isDTOValid = validateSchema(req.body);

    if (!isDTOValid)
        return res.status(400).json({
            errors: validateSchema.errors.map((error) => error.message)
        });

    next();
};

export default userEmailDTO;
