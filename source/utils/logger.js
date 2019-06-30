import { createLogger, transports } from 'winston';

const winstonLogger = createLogger({
    level:      'debug',
    transports: [ new transports.Console() ],
});

export const logger = (req, res, next) => {
    const isDev = process.env.NODE_ENV === 'DEV';

    if (isDev) {
        winstonLogger.debug({
            time:    Date().toString(),
            method:  req.method,
            payload: req.body,
        });
    }

    return next();
};
