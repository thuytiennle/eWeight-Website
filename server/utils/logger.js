const path = require('path');
const moment = require('moment');
const winston = require('winston');
const { format, transports, createLogger } = winston;
const { combine, timestamp, label, printf } = format;

// Path logs
const logDir = path.join(__dirname, '../', process.env.LOGS_DIR || 'logs');

// Define your severity levels.
// With them, You can create log files,
// see or hide levels based on the running ENV.
const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  verbose: 4,
  debug: 5,
  silly: 6
};

// Chose the aspect of your log customizing the log format.
const formatLog = combine(
  // json(),
  // Add the message timestamp with the preferred format
  timestamp(),
  label(),
  // Tell Winston that the logs must be colored
  // colorize(),
  // Define the format of the message showing the timestamp, the level and the message
  printf(
    (info) => `[${info.timestamp}] ${info.level.toUpperCase()}: ${info.message}\n${info?.stack}`,
  ),
);

// Define which transports the logger must use to print out messages.
// In this example, we are using three different transports
const winTransports = [
  // Allow the use the console to print the messages
  new transports.Console(),
  // Allow to print all the error level messages inside the error.log file
  // filename: `NI-error-${moment().format("YYYYMMDD")}.log`,
  new transports.File({
    filename: path.join(logDir, `NI-error-${moment().format('YYYYMMDD')}.log`),
    level: 'error',
  }),
  // Allow to print all the error message inside the all.log file
  // (also the error log that are also printed inside the error.log(
  new transports.File({
    filename: path.join(logDir, `NI-debug-${moment().format('YYYYMMDD')}.log`)
  }),
];

// Create the logger instance that has to be exported
// and used to log messages.
const Logger = createLogger({
  level: process.env.LOGS_LEVEL || 'debug',
  levels,
  format: formatLog,
  transports: winTransports,
});

module.exports = Logger;
