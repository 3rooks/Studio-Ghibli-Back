import ajv from '#config/ajv.js';
import { passwordDTOSchema } from '#constants/dto-user-types.js';
import { Type } from '@sinclair/typebox';

const UnregisterDTOSchema = Type.Object(
    {
        password: passwordDTOSchema
    },
    {
        additionalProperties: false,
        errorMessage: {
            additionalProperties: 'Object format is invalid'
        }
    }
);

const validateSchema = ajv.compile(UnregisterDTOSchema);

const userUnregisterDTO = (req, res, next) => {
    const isDTOValid = validateSchema(req.body);

    if (!isDTOValid)
        return res.status(400).json({
            errors: validateSchema.errors.map((error) => error.message)
        });

    next();
};

export default userUnregisterDTO;
