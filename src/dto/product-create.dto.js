import { Type } from '@sinclair/typebox';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import addErrors from 'ajv-errors';
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
} from '#constants/dto-product-types.js';

const ProductCreateDTOSchema = Type.Object(
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

const ajv = new Ajv({ allErrors: true })
    .addKeyword('kind')
    .addKeyword('modifier');
addFormats(ajv, ['uuid']);
addErrors(ajv);

const validateSchema = ajv.compile(ProductCreateDTOSchema);

const productCreateDTO = (req, res, next) => {
    const isDTOValid = validateSchema(req.body);

    if (!isDTOValid)
        return res.status(400).json({
            errors: validateSchema.errors.map((error) => error.message)
        });

    next();
};

export default productCreateDTO;
