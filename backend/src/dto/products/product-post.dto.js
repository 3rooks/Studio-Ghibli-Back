import ajv from '#config/ajv.js';
import {
    descriptionDTOSchema,
    directorDTOSchema,
    imageDTOSchema,
    infoDTOSchema,
    minDurationDTOSchema,
    originalTitleDTOSchema,
    originalTitleRomanisedDTOSchema,
    priceDTOSchema,
    producerDTOSchema,
    releaseYearDTOSchema,
    titleDTOSchema
} from '#constants/dto-types.js';

import { Type } from '@sinclair/typebox';

const postProductDTOSchema = Type.Object(
    {
        title: titleDTOSchema,
        originalTitle: originalTitleDTOSchema,
        originalTitleRomanised: originalTitleRomanisedDTOSchema,
        image: imageDTOSchema,
        description: descriptionDTOSchema,
        director: directorDTOSchema,
        producer: producerDTOSchema,
        releaseYear: releaseYearDTOSchema,
        minDuration: minDurationDTOSchema,
        info: infoDTOSchema,
        price: priceDTOSchema
    },
    {
        additionalProperties: false,
        errorMessage: {
            additionalProperties: 'Object format is invalid'
        }
    }
);

const validateSchema = ajv.compile(postProductDTOSchema);

const postProductDTO = (req, res, next) => {
    const isDTOValid = validateSchema(req.body);

    if (!isDTOValid)
        return res.status(400).json({
            errors: validateSchema.errors.map((error) => error.message)
        });

    next();
};

export default postProductDTO;
