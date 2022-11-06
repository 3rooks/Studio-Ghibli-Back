import mongoose from 'mongoose';
import uuid from 'uuid-random';

const { Schema } = mongoose;

export const collection = 'Users';
export const userSchema = new Schema(
    {
        _id: {
            type: String,
            _id: false,
            unique: true,
            default: () => uuid()
        },
        username: { type: String, require: true },
        email: { type: String, require: true, unique: true },
        password: { type: String, require: true },

        image: { type: String },
        cart: {
            type: Schema.Types.String,
            ref: 'Carts'
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

userSchema.pre('find', function () {
    this.populate('cart');
});
userSchema.pre('findOne', function () {
    this.populate('cart');
});
userSchema.pre('findById', function () {
    this.populate('cart');
});
