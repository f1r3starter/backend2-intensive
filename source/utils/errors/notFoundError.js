import { ApplicationError } from './applicationError';

export class NotFoundError extends ApplicationError {
    constructor(message = 'Not Found', status = 404) {
        super(message, status);
    }
}
