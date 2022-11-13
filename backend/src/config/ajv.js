import Ajv from 'ajv';
import addErrors from 'ajv-errors';
import addFormats from 'ajv-formats';

const ajv = new Ajv({ allErrors: true })
    .addKeyword('kind')
    .addKeyword('modifier');
addFormats(ajv, ['uuid', 'email']);
ajv.addFormat('password', /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/);
addErrors(ajv);

export default ajv;
