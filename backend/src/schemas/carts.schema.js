import { ENTITY } from '#constants/entities.js';
import mongoose from 'mongoose';
import uuid from 'uuid-random';

const { Schema } = mongoose;

const CART_SCHEMA = new Schema(
    {
        _id: {
            type: String,
            _id: false,
            unique: true,
            default: () => uuid()
        },
        products: [
            {
                _id: {
                    _id: false
                },
                product: {
                    type: Schema.Types.String,
                    ref: ENTITY.PRODUCTS
                },
                quantity: { type: Number, default: 1 }
            }
        ]
    },
    {
        timestamps: false,
        versionKey: false
    }
);

CART_SCHEMA.pre('find', function () {
    this.populate('products.product');
});
CART_SCHEMA.pre('findOne', function () {
    this.populate('products.product');
});
CART_SCHEMA.pre('findById', function () {
    this.populate('products.product');
});

const CART_MODEL = mongoose.model(ENTITY.CARTS, CART_SCHEMA);
export default CART_MODEL;
