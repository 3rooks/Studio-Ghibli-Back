import { ENTITY } from '#constants/entities.js';
import mongoose from 'mongoose';
import uuid from 'uuid-random';

const { Schema, model } = mongoose;

const USER_SCHEMA = new Schema(
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

        image: { type: String, default: '' },
        cart: {
            type: Schema.Types.String,
            ref: ENTITY.CARTS
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

export const USER_MODEL = model(ENTITY.USERS, USER_SCHEMA);
