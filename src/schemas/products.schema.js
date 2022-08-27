import mongoose from 'mongoose';

const { Schema } = mongoose;

export const collection = 'product';
export const productSchema = new Schema(
    {
        id: { type: String, require: true, unique: true },
        name: { type: String, require: true, minLength: 2, maxLength: 20 },
        description: {
            type: String,
            require: true,
            minLength: 10,
            maxLength: 500
        },
        price: { type: Number, require: true, min: 1 },
        code: { type: Number, require: true },
        stock: { type: Number, require: true, min: 1 },
        thumbnail: { type: String, require: true }
    },
    {
        timestamps: true,
        versionKey: false
    }
);
