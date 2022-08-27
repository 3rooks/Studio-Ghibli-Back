import mongoose from 'mongoose';

const { Schema } = mongoose;

export const collection = 'cart';
export const cartSchema = new Schema(
    {
        id: { type: String, require: true, unique: true },
        products: [
            {
                product: { type: String, require: true },
                quantity: { type: Number, default: 0 }
            }
        ]
    },
    {
        timestamps: true,
        versionKey: false
    }
);
