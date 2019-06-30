import { createLogger, transports } from 'winston';

const winstonLogger = createLogger({
    level:      'debug',
    transports: [ new transports.Console() ],
});

export const logger = (req, res, next) => {
    if (process.env.NODE_ENV === 'DEV') {
        winstonLogger.debug({
            time:    Date().toString(),
            method:  req.method,
            payload: req.body,
        });
    }

    return next();
};
