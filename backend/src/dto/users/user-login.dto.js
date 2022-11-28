import ajv from '#config/ajv.js';
import { emailDTOSchema, passwordDTOSchema } from '#constants/dto-types.js';
import { Type } from '@sinclair/typebox';

const userLoginDTOSchema = Type.Object(
    {
        email: emailDTOSchema,
        password: passwordDTOSchema
    },
    {
        additionalProperties: false,
        errorMessage: {
            additionalProperties: 'Object format is invalid'
        }
    }
);

const validateSchema = ajv.compile(userLoginDTOSchema);

const userLoginDTO = (req, res, next) => {
    const isDTOValid = validateSchema(req.body);

    if (!isDTOValid)
        return res.status(400).json({
            errors: validateSchema.errors.map((error) => error.message)
        });

    next();
};

export default userLoginDTO;
