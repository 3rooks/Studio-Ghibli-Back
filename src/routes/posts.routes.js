import uuid from 'uuid-random';
import { Router } from 'express';
import { normalize, schema, denormalize } from 'normalizr';

const posts = Router();

const POST_TEMPLATE = {
    id: uuid(),
    title: 'esto es una m*****',
    description: 'qweqweqwe',
    author: {
        id: 'juan',
        name: 'juan'
    },
    comments: [
        {
            id: uuid(),
            author: {
                id: 'pedro',
                name: 'pedro'
            },
            content: 'asdasdasdasd'
        },
        {
            id: uuid(),
            author: {
                id: 'juan',
                name: 'juan'
            },
            content: 'zxczxczxc'
        },
        {
            id: uuid(),
            author: {
                id: 'pablo',
                name: 'pablo'
            },
            content: 'rtyrtyrty'
        },
        {
            id: uuid(),
            author: {
                id: 'matias',
                name: 'matias'
            },
            content: 'fghfghfgh'
        },
        {
            id: uuid(),
            author: {
                id: 'juan',
                name: 'juan'
            },
            content: 'cvbcvbcvb'
        }
    ]
};
// entities
const author = new schema.Entity('authors');
const comment = new schema.Entity('comments', { author });
const post = new schema.Entity('posts', { author, comments: [comment] });

const normalizeData = normalize(POST_TEMPLATE, post);
const deNormalizeData = denormalize(
    normalizeData.result,
    post,
    normalizeData.entities
);

posts.get('/posts', async (req, res) => {
    res.json({ normalizeData });
});

posts.get('/posts-denormalized', (req, res) => {
    res.json({ deNormalizeData });
});

export default posts;
