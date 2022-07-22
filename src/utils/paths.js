import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
// Config __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// Paths
const IMG_PATH = resolve(__dirname, '../public/images');
const PUBLIC_PATH = resolve(__dirname, '../public');
const STORAGE_PATH = resolve(__dirname, '../files/storage.json');
const VIEWS_PATH = resolve(__dirname, '../views');

export { IMG_PATH, PUBLIC_PATH, STORAGE_PATH, VIEWS_PATH };
