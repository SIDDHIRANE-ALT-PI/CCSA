// // logger.js

// // Import the logger
// const logger = require('./logger');

// // You can log different log levels, including error, warn, info, and verbose.

// const { createLogger, format, transports } = require('winston');

// // Create a logger instance
// const logger = createLogger({
//   level: 'info',const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.timestamp(),
      winston.format.printf(({ timestamp, level, message }) => {
        return `[${timestamp}] ${level}: ${message}`;
      })
    ),
    transports: [
      new winston.transports.Console()
    ]
  });
  
  logger.error('This is an error message.');
  logger.warn('This is a warning message.');
  logger.info('This is an info message.');
  logger.debug('This is a debug message.');
  
//   format: format.combine(
//     format.colorize(),
//     format.timestamp(),
//     format.printf(({ timestamp, level, message }) => {
//       return `${timestamp} ${level}: ${message}`;
//     })
//   ),
//   transports: [new transports.Console()],
// });
// // Example usage
// // logger.info('This is an info message.');
// // logger.error('This is an error message.');
// module.exports = logger;
