export class ValidationError extends Error {
    constructor(message, statusCode = 400) {
        super(message);
        this.statusCode = statusCode;
    }
}

export class NotFoundError extends Error {
    constructor(message, statusCode = 404) {
        super(message);
        this.statusCode = statusCode;
    }
}
