import ajv from '#config/ajv.js';
import { usernameDTOSchema } from '#constants/dto-types.js';
import { Type } from '@sinclair/typebox';

const userUsernameDTOSchema = Type.Object(
    {
        username: usernameDTOSchema
    },
    {
        additionalProperties: false,
        errorMessage: {
            additionalProperties: 'Object format is invalid'
        }
    }
);

const validateSchema = ajv.compile(userUsernameDTOSchema);

const userUsernameDTO = (req, res, next) => {
    const isDTOValid = validateSchema(req.body);

    if (!isDTOValid)
        return res.status(400).json({
            errors: validateSchema.errors.map((error) => error.message)
        });

    next();
};

export default userUsernameDTO;
