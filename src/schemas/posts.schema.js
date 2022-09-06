import mongoose from 'mongoose';

const { Schema } = mongoose;

export const collection = 'posts';
export const postSchema = new Schema(
    {
        id: { type: String, require: true, unique: true },
        title: { type: String, require: true },
        description: { type: String, require: true },
        author: {
            id: { type: Schema.Types.ObjectId, require: true },
            username: { type: String, require: true }
        },
        comments: [
            {
                author: {
                    id: { type: Schema.Types.ObjectId, require: true },
                    username: { type: String, require: true }
                },
                content: { type: String, require: true }
            }
        ]
    },
    {
        timestamps: true,
        versionKey: false
    }
);
