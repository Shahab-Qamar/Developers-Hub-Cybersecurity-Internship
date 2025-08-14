const winston = require('winston');

const logger = winston.createLogger({
  level: 'info', // Log messages at 'info' level and higher (info, warn, error)
  format: winston.format.combine(
    winston.format.timestamp(), // Include timestamps
    winston.format.json() // Use JSON format for structured logs
  ),
  transports: [
    new winston.transports.Console(), // Log to console
    new winston.transports.File({ filename: 'security.log' }) // Log to security.log file
  ]
});

module.exports = logger;