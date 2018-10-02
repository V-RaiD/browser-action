const ss = require ('../system-services');

var utils = require('../utils');

exports.start = function (browser, options) {
  ss.fork(utils.constants.BrowserAPI[browser] || utils.constants.BrowserAPI["firefox"], [options.url || '']);
}
