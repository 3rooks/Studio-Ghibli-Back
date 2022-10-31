import { Type } from '@sinclair/typebox';

export const idDTOSchema = Type.String({
    format: 'uuid',
    errorMessage: {
        type: 'Invalid type _id, should be a string',
        format: 'Invalid format _id, should be uuidv4'
    }
});

export const usernameDTOSchema = Type.String({
    minLength: 2,
    maxLength: 15,
    errorMessage: {
        minLength: 'Username must have at least 2 characters min',
        maxLength: 'Username must have at least 15 characters max'
    }
});

export const emailDTOSchema = Type.String({
    format: 'email',
    errorMessage: {
        type: 'Invalid email, should be a string',
        format: 'Invalid format email, must comply RFC 5322'
    }
});

export const passwordDTOSchema = Type.String({
    format: 'password',
    minLength: 8,
    maxLength: 20,
    errorMessage: {
        type: 'Invalid password, should be a string',
        format: 'Invalid format password, should have an uppercase-lowercase and at least one number',
        minLength: 'Password must have at least 8 characters min',
        maxLength: 'Password must have at least 20 characters max'
    }
});

export const imageDTOSchema = Type.String({
    minLength: 0,
    errorMessage: {
        type: 'Invalid picture, should be a string',
        format: 'Invalid format picture, should be a string'
    }
});
