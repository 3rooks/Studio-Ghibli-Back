import mongoose from 'mongoose';

const { Schema } = mongoose;

export const collection = 'users';
export const userSchema = new Schema(
    {
        username: { type: String, require: true },
        email: { type: String, require: true },
        password: { type: String, require: true }
    },
    {
        timestamps: true,
        versionKey: false
    }
);
