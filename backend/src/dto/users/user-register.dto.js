import ajv from '#config/ajv.js';
import {
    emailDTOSchema,
    passwordDTOSchema,
    usernameDTOSchema
} from '#constants/dto-types.js';
import { Type } from '@sinclair/typebox';

const userRegisterDTOSchema = Type.Object(
    {
        username: usernameDTOSchema,
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

const validateSchema = ajv.compile(userRegisterDTOSchema);

const userRegisterDTO = (req, res, next) => {
    const isDTOValid = validateSchema(req.body);

    if (!isDTOValid)
        return res.status(400).json({
            errors: validateSchema.errors.map((error) => error.message)
        });

    next();
};

export default userRegisterDTO;
