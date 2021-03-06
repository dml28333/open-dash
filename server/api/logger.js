import { includes } from 'lodash';
import bunyan from 'bunyan';
import bunyanFormat from 'bunyan-format';
import Bunyan2Loggly from 'bunyan-loggly';
import { Settings } from '/lib/collections';

// configure bunyan logging module for reaction server
// See: https://github.com/trentm/node-bunyan#levels
const levels = ['FATAL', 'ERROR', 'WARN', 'INFO', 'DEBUG', 'TRACE'];

// set stdout log level
let level = process.env.OPENDASH_LOG_LEVEL || Meteor.settings.OPENDASH_LOG_LEVEL || 'INFO';

level = level.toUpperCase();

if (!includes(levels, level)) {
  level = 'INFO';
}

// default console config (stdout)
const streams = [{
  level,
  stream: bunyanFormat({ outputMode: 'short' })
}];

// Loggly config (only used if configured)
const logglyToken = process.env.LOGGLY_TOKEN;
const logglySubdomain = process.env.LOGGLY_SUBDOMAIN;

if (logglyToken && logglySubdomain) {
  const logglyStream = {
    type: 'raw',
    level: process.env.LOGGLY_LOG_LEVEL || 'DEBUG',
    stream: new Bunyan2Loggly({
      token: logglyToken,
      subdomain: logglySubdomain
    })
  };
  streams.push(logglyStream);
}

const name = Settings.get('app.title', 'OpenDash');

// create default logger instance
const Logger = bunyan.createLogger({
  name,
  streams
});

export default Logger;
