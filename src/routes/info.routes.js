import process from 'process';
import { Router } from 'express';

const info = Router();

info.get('/info', (req, res) => {
    console.log('Args:', process.argv.splice(2));
    console.log('Platform:', process.platform, process.arch);
    console.log('Node version: ', process.versions.node);
    console.log('Memory: ', process.memoryUsage().rss);
    console.log('PathExec: ', process.execPath);
    console.log('Process ID: ', process.pid);
    console.log('Filefolder path: ', process.env.PWD);
    res.send();
});

export default info;
