import session from 'express-session';

const sessionOptions = {
    key:               'user',
    secret:            'pa$$w0rd',
    resave:            false, // disable session resave
    rolling:           true, // reset max age on every use
    saveUninitialized: false,
    cookie:            {
        httpOnly: true,
        maxAge:   15 * 60 * 1000, // 15m
    },
};

export const sessionHandler = session(sessionOptions);
