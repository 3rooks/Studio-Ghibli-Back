import { Type } from '@sinclair/typebox';

export const usernameDTOSchema = Type.String({
    minLength: 2,
    maxLength: 20,
    errorMessage: {
        type: '${0#} must be a string',
        format: '${0#} should be a string',
        minLength: '${0#} must have at least 2 letters',
        maxLength: '${0#} must have a maximum of 15 letters'
    }
});

export const emailDTOSchema = Type.String({
    format: 'email',
    errorMessage: {
        type: '${0#} should be a string',
        format: '${0#} must comply RFC 5322'
    }
});

export const passwordDTOSchema = Type.String({
    format: 'password',
    minLength: 8,
    maxLength: 20,
    errorMessage: {
        type: '${0#} should be a string',
        format: '${0#} must have a lowercase, an uppercase and a number',
        minLength: '${0#} must have at least 8 letters',
        maxLength: '${0#} must have a maximum of 20 letters'
    }
});

export const imageDTOSchema = Type.String({
    minLength: 10,
    maxLength: 1000,
    errorMessage: {
        type: '${0#} should be a string',
        format: '${0#} should be a string',
        minLength: '${0#} must have at least 100 letters',
        maxLength: '${0#} must have a maximum of 1000 letters'
    }
});
