import expressApp from '#lib/express.js';
import { createServer } from 'http';

export const httpServer = createServer(expressApp);
