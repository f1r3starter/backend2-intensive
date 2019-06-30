export const authorization = (req, res, next) => {
    const password = process.env.PASSWORD || 'PASSWORD';
    const headerPassword = req.header('Authorization');

    if (password === headerPassword) {
        return next();
    }

    return res.sendStatus(401);
};
