import mongoose from 'mongoose';
import uuid from 'uuid-random';

const { Schema } = mongoose;

export const collection = 'Carts';
export const cartSchema = new Schema(
    {
        _id: {
            type: String,
            _id: false,
            require: true,
            unique: true,
            default: () => uuid()
        },
        products: [
            {
                _id: false,
                product: {
                    type: Schema.Types.String,
                    ref: 'Products'
                },
                quantity: { type: Number, default: 1, require: true }
            }
        ]
    },
    {
        timestamps: false,
        versionKey: false
    }
);

cartSchema.pre('find', function () {
    this.populate('products.product');
});
cartSchema.pre('findOne', function () {
    this.populate('products.product');
});
cartSchema.pre('findById', function () {
    this.populate('products.product');
});
