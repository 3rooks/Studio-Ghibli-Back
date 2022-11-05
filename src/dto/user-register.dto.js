import ajv from '#config/ajv.js';
import {
    emailDTOSchema,
    imageDTOSchema,
    passwordDTOSchema,
    usernameDTOSchema
} from '#constants/dto-user-types.js';
import { Type } from '@sinclair/typebox';

const RegisterDTOSchema = Type.Object(
    {
        username: usernameDTOSchema,
        email: emailDTOSchema,
        password: passwordDTOSchema,
        image: imageDTOSchema
    },
    {
        additionalProperties: false,
        errorMessage: {
            additionalProperties: 'Object format is invalid'
        }
    }
);

const validateSchema = ajv.compile(RegisterDTOSchema);

const userRegisterDTO = (req, res, next) => {
    const isDTOValid = validateSchema(req.body);

    if (!isDTOValid)
        return res.status(400).json({
            errors: validateSchema.errors.map((error) => error.message)
        });

    next();
};

export default userRegisterDTO;
