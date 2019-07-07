import { NotFoundError } from './errors';

export const notFoundHandler = (req, res, next) => {
    const { url, method } = req;

    return next(new NotFoundError(`${method}: ${url} does not exists`));
};
