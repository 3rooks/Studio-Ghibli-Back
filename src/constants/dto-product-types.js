import { Type } from '@sinclair/typebox';

export const idDTOSchema = Type.String({
    format: 'uuid',
    errorMessage: {
        type: 'Invalid type _id, should be a string',
        format: 'Invalid format _id, should be uuidv4'
    }
});

export const titleDTOSchema = Type.String({
    minLength: 5,
    maxLength: 50,
    errorMessage: {
        type: 'Invalid type title, should be a string',
        format: 'Invalid format title, should be a string',
        minLength: 'Title must have at least 5 characters min',
        maxLength: 'Title must have at least 50 characters max'
    }
});

export const originalTitleDTOSchema = Type.String({
    minLength: 2,
    maxLength: 50,
    errorMessage: {
        type: 'Invalid type title, should be a string',
        format: 'Invalid format title, should be a string',
        minLength: 'Original title must have at least 2 characters min',
        maxLength: 'Original title must have at least 50 characters max'
    }
});

export const originalTitleRomanisedDTOSchema = Type.String({
    minLength: 5,
    maxLength: 50,
    errorMessage: {
        type: 'Invalid type title, should be a string',
        format: 'Invalid format title, should be a string',
        minLength:
            'Original title romanised must have at least 5 characters min',
        maxLength:
            'Original title romanised must have at least 50 characters max'
    }
});

export const imageDTOSchema = Type.String({
    minLength: 10,
    maxLength: 100,
    errorMessage: {
        type: 'Invalid type title, should be a string',
        format: 'Invalid format title, should be a string',
        minLength: 'Image must have at least 10 characters min',
        maxLength: 'Image must have at least 100 characters max'
    }
});

export const descriptionDTOSchema = Type.String({
    minLength: 10,
    maxLength: 1000,
    errorMessage: {
        type: 'Invalid type title, should be a string',
        format: 'Invalid format title, should be a string',
        minLength: 'Description must have at least 10 characters min',
        maxLength: 'Description must have at least 1000 characters max'
    }
});

export const directorDTOSchema = Type.String({
    minLength: 2,
    maxLength: 50,
    errorMessage: {
        type: 'Invalid type title, should be a string',
        format: 'Invalid format title, should be a string',
        minLength: 'Director must have at least 2 characters min',
        maxLength: 'Director must have at least 50 characters max'
    }
});

export const producerDTOSchema = Type.String({
    minLength: 2,
    maxLength: 50,
    errorMessage: {
        type: 'Invalid type title, should be a string',
        format: 'Invalid format title, should be a string',
        minLength: 'Producer must have at least 2 characters min',
        maxLength: 'Producer must have at least 50 characters max'
    }
});

export const releaseYearDTOSchema = Type.String({
    minLength: 4,
    maxLength: 4,
    errorMessage: {
        type: 'Invalid type title, should be a string',
        format: 'Invalid format title, should be a string',
        minLength: 'Release year must have at least 4 characters min',
        maxLength: 'Release year must have at least 4 characters max'
    }
});

export const minDurationDTOSchema = Type.String({
    minLength: 2,
    maxLength: 4,
    errorMessage: {
        type: 'Invalid type title, should be a string',
        format: 'Invalid format title, should be a string',
        minLength: 'Min duration must have at least 2 characters min',
        maxLength: 'Min duration must have at least 4 characters max'
    }
});

export const infoDTOSchema = Type.String({
    minLength: 10,
    maxLength: 100,
    errorMessage: {
        type: 'Invalid type title, should be a string',
        format: 'Invalid format title, should be a string',
        minLength: 'Info have at least 10 characters min',
        maxLength: 'Info have at least 100 characters max'
    }
});

export const priceDTOSchema = Type.String({
    minLength: 2,
    maxLength: 4,
    errorMessage: {
        type: 'Invalid type title, should be a string',
        format: 'Invalid format title, should be a string',
        minLength: 'Price must have at least 2 characters min',
        maxLength: 'Price must have at least 4 characters max'
    }
});
