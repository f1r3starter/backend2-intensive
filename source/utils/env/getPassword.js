import { ValidationError } from '../errors';

export const getPassword = () => {
    const { PASSWORD } = process.env;

    if (!PASSWORD) {
        throw new ValidationError(
            'Environment variable PASSWORD should be specified', 500,
        );
    }

    return PASSWORD;
};
