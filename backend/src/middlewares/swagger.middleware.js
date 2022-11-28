import { DOCS_PATH } from '#utils/paths.js';
import swaggerJSDoc from 'swagger-jsdoc';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Studio Ghibli API',
            description: 'Documentation (endpoints)',
            version: '1.0.0'
        }
    },
    apis: [`${DOCS_PATH}/**/*.yaml`]
};
const swaggerDoc = swaggerJSDoc(options);

export default swaggerDoc;
