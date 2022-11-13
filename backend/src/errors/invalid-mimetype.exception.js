import { ApplicationConflictException } from './application-conflict-exception.js';

export class InvalidMimetypeFormatException extends ApplicationConflictException {
    constructor() {
        super('Incorrect image format');
    }
}
