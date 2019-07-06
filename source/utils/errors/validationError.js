import { ApplicationError } from './applicationError';

export class ValidationError extends ApplicationError {
    constructor(message = 'Validation error', status = 400) {
        super(message, status);
    }
}
