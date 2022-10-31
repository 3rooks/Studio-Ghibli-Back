import mongoose from 'mongoose';

const { Schema } = mongoose;

export const collection = 'Users';
export const userSchema = new Schema(
    {
        _id: { type: String, _id: false, require: true, unique: true },
        username: { type: String, require: true },
        email: { type: String, require: true, unique: true },
        password: { type: String, require: true },

        image: { type: String },
        cart: [
            {
                products: {
                    type: String,
                    require: true,
                    ref: 'Products',
                    quantity: { type: Number, default: 0 }
                }
            }
        ]
    },
    {
        timestamps: true,
        versionKey: false
    }
);
