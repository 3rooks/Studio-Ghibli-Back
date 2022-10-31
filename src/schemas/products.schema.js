import mongoose from 'mongoose';

const { Schema } = mongoose;

export const collection = 'Products';
export const productSchema = new Schema(
    {
        _id: { type: String, _id: false, require: true, unique: true },
        title: { type: String, unique: true },
        originalTitle: { type: String },
        originalTitleRomanised: { type: String },
        image: { type: String },
        movieBanner: { type: String },
        description: { type: String },
        director: { type: String },
        producer: { type: String },
        releaseYear: { type: String },
        minDuration: { type: String },
        info: { type: String },
        price: { type: String }
    },
    {
        timestamps: true,
        versionKey: false
    }
);
