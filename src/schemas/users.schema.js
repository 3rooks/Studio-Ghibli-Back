import mongoose from 'mongoose';

const { Schema } = mongoose;

export const collection = 'users';
export const userSchema = new Schema(
    {
        id: { type: String, require: true, unique: true },
        username: { type: String, require: true },
        email: { type: String, require: true }
    },
    {
        timestamps: true,
        versionKey: false
    }
);
