import { ENTITY } from '#constants/entities.js';
import mongoose from 'mongoose';
import uuid from 'uuid-random';

const { Schema } = mongoose;

const PRODUCT_SCHEMA = new Schema(
    {
        _id: {
            type: String,
            _id: false,
            unique: true,
            default: () => uuid()
        },
        title: { type: String, unique: true },
        originalTitle: { type: String },
        originalTitleRomanised: { type: String },
        image: { type: String },
        movieBanner: { type: String },
        description: { type: String },
        director: { type: String },
        producer: { type: String },
        releaseYear: { type: Number },
        minDuration: { type: Number },
        info: { type: String },
        price: { type: Number }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const PRODUCT_MODEL = mongoose.model(ENTITY.PRODUCTS, PRODUCT_SCHEMA);
export default PRODUCT_MODEL;