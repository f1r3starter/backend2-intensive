import { getPassword } from './env';

export const authorization = (req, res, next) => {
    const headerPassword = req.header('Authorization');

    if (getPassword() === headerPassword) {
        return next();
    }

    return res.sendStatus(401);
};
