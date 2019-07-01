import { createLogger, transports, format } from 'winston';
const { combine, timestamp, errors } = format;

const winstonLogger = createLogger({
    level:  'error',
    format: combine(
        timestamp(),
        errors({ stack: false }),
    ),
    transports: [ new transports.File({ filename: 'logs/errors.log', level: 'error' }) ],
});

export const errorHandler = (err, req, res) => {
    const isTest = process.env.NODE_ENV === 'TEST';
    
    if (!isTest) {
        winstonLogger.error(err);
    }

    res.status(500).json({ message: err.message });
};
