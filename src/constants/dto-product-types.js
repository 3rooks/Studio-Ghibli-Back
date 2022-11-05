import { Type } from '@sinclair/typebox';

export const idDTOSchema = Type.String({
    format: 'uuid',
    errorMessage: {
        type: '${0#} must be a string',
        format: '${0#} should be a uuidv4'
    }
});

export const titleDTOSchema = Type.String({
    minLength: 5,
    maxLength: 50,
    errorMessage: {
        type: '${0#} must be a string',
        format: '${0#} should be a string',
        minLength: '${0#} must have at least 5 letters',
        maxLength: '${0#} must have a maximum of 50 letters'
    }
});

export const originalTitleDTOSchema = Type.String({
    minLength: 5,
    maxLength: 50,
    errorMessage: {
        type: '${0#} should be a string',
        format: '${0#} should be a string',
        minLength: '${0#} must have at least 5 letters',
        maxLength: '${0#} must have a maximum of 50 letters'
    }
});

export const originalTitleRomanisedDTOSchema = Type.String({
    minLength: 5,
    maxLength: 50,
    errorMessage: {
        type: '${0#} should be a string',
        format: '${0#} should be a string',
        minLength: '${0#} must have at least 5 letters',
        maxLength: '${0#} must have a maximum of 50 letters'
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

export const descriptionDTOSchema = Type.String({
    minLength: 10,
    maxLength: 1000,
    errorMessage: {
        type: '${0#} should be a string',
        format: '${0#} should be a string',
        minLength: '${0#} must have at least 100 letters',
        maxLength: '${0#} must have a maximum of 1000 letters'
    }
});

export const directorDTOSchema = Type.String({
    minLength: 2,
    maxLength: 100,
    errorMessage: {
        type: '${0#} should be a string',
        format: '${0#} should be a string',
        minLength: '${0#} must have at least 2 letters',
        maxLength: '${0#} must have a maximum of 100 letters'
    }
});

export const producerDTOSchema = Type.String({
    minLength: 2,
    maxLength: 100,
    errorMessage: {
        type: '${0#} should be a string',
        format: '${0#} should be a string',
        minLength: '${0#} must have at least 2 letters',
        maxLength: '${0#} must have a maximum of 100 letters'
    }
});

export const releaseYearDTOSchema = Type.Number({
    minimum: 1700,
    maximum: 2050,
    errorMessage: {
        type: '${0#} should be a number',
        format: '${0#} should be a YYYY',
        minimum: '${0#} should be above 1700',
        maximum: '${0#} should be below 2050'
    }
});

export const minDurationDTOSchema = Type.Number({
    minimum: 60,
    maximum: 180,
    errorMessage: {
        type: '${0#} should be a number',
        format: '${0#} should be a hh--MM--ss',
        minimum: '${0#} should be above 60 minutes',
        maximum: '${0#} should be below 180 minutes'
    }
});

export const infoDTOSchema = Type.String({
    minLength: 10,
    maxLength: 1000,
    errorMessage: {
        type: '${0#} should be a string',
        format: '${0#} should be a string',
        minLength: '${0#} must have at least 100 letters',
        maxLength: '${0#} must have a maximum of 1000 letters'
    }
});

export const priceDTOSchema = Type.Number({
    minimum: 100,
    maximum: 500,
    errorMessage: {
        type: '${0#} should be a number',
        format: '${0#} should be a number',
        minimum: '${0#} should be above 100',
        maximum: '${0#} should be below 500'
    }
});

export const quantityDTOSchema = Type.Number({
    minimum: 1,
    maximum: 100,
    errorMessage: {
        type: '${0#} should be a number',
        format: '${0#} should be a number',
        minimum: '${0#} should be above 1',
        maximum: '${0#} should be below 100'
    }
});
