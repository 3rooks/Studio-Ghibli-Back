import mongoose from 'mongoose';

const { Schema } = mongoose;

export const collection = 'carts';
export const cartSchema = new Schema(
    {
        id: { type: String, require: true, unique: true },
        products: [
            {
                product: {
                    type: Schema.Types.ObjectId,
                    require: true,
                    ref: 'products'
                },
                quantity: { type: Number, default: 0, require: true }
            }
        ]
    },
    {
        timestamps: true,
        versionKey: false
    }
);

cartSchema.pre('find', function () {
    this.populate('products.product');
});

cartSchema.pre('findOne', function () {
    this.populate('products.product');
});
