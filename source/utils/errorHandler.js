import { createLogger, transports, format } from 'winston';

const { combine, timestamp, printf } = format;

const getDate = () => new Date().toISOString();

const defaultLogFormat = printf(({message: { error }}) => {
    return `${getDate()} ${error.name}: ${error.message}`;
});



const prepareLogger = (customFormat, logFileName) => createLogger({
    level:  'error',
    format: combine(
        format.splat(),
        timestamp(),
        customFormat,
    ),
    transports: [ new transports.File({ filename: `${__dirname}/${logFileName}`, level: 'error'}) ],
});

const winstonLogger = prepareLogger(defaultLogFormat, 'logs/errors.log');
const notFoundLogger = prepareLogger(notFoundErrorLogFormat, 'logs/not_found_errors.log');
const validationErrorLogger = prepareLogger(validationErrorFormat, 'logs/validation_errors.log');

const loggerMap = {
    NotFoundError:   notFoundLogger,
    ValidationError: validationErrorLogger,
    default:         winstonLogger,
};

export const errorHandler = (error, req, res, next) => {
    const isTest = process.env.NODE_ENV === 'TEST';

    if (!isTest) {
        const logger = loggerMap[ error.constructor.name ] || loggerMap.default;

        logger.error({error, req});
    }

    res.status(500).json({ message: error.message });
};
