import { createLogger, transports, format } from 'winston';

const { combine, timestamp, printf } = format;

const myFormat = printf((error) => {
    return `${error.timestamp} ${error.name}: ${error.message}`;
});

const winstonLogger = createLogger({
    level:  'error',
    format: combine(
        format.splat(),
        timestamp(),
        myFormat,
    ),
    transports: [ new transports.File({ filename: `${__dirname}/logs/errors.log`, level: 'error'} ) ],
});

export const errorHandler = (err, req, res, next) => {
    const isTest = process.env.NODE_ENV === 'TEST';

    if (!isTest) {
        winstonLogger.error(err);
    }

    res.status(500).json({ message: err.message });
};
