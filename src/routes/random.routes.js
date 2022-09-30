import { Router } from 'express';
import { fork } from 'child_process';
import { RANDOM_PATH } from '#utils/paths.js';

const random = Router();

random.get('/random', (req, res) => {
    res.send();
});

random.post('/random/:num', (req, res) => {
    const { num } = req.params;
    const child = fork(RANDOM_PATH);
    child.send(num);

    child.on('message', (data) => {
        // const result = {};

        // for (const num of data) {
        //     result[num] = result[num] + 1 || 1;
        // }

        // data.forEach((e) => {
        //     result[e] = result[e] + 1 || 1;
        // });

        const result = data.reduce((acc, cur) => ((acc[cur] = acc[cur] + 1 || 1), acc), {});

        res.json({result});
    });
});

export default random;
