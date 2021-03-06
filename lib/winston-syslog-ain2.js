/*
 * MIT LICENCE
 */

var util = require('util'),
    winston = require('winston'),
    SysLogger = require("ain2");

var ain;

var SyslogAin2 = exports.SyslogAin2 = function (options) {
  winston.Transport.call(this, options);
  options = options || {};
  ain = new SysLogger(options);
};

util.inherits(SyslogAin2, winston.Transport);

SyslogAin2.prototype.name = 'SyslogAin2';

SyslogAin2.prototype.log = function (level, msg, meta, callback) {
  ain[level](msg + (null!=meta ? ' '+util.inspect(meta) : ''));
  callback();
};
