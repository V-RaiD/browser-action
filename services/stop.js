const ss = require ('../system-services');

var utils = require('../utils');

exports.stop = function (browser) {
  ss.run(`killall ${utils.constants.BrowserKillAPI[browser] || utils.constants.BrowserKillAPI.firefox}`);
}
