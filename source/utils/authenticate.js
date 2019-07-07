import { getPassword } from './env';

export const authenticate = (req, res, next) => {
    const headerPassword = req.header('Authorization');

    if (getPassword() === headerPassword && req.session.email) {
        return next();
    }

    return res.sendStatus(401);
};
