const fs = require('fs');

var utils = require('../utils');

exports.getUrl = function (browser) {
  try {
    var file = fs.readFileSync(utils.constants.BrowserDataAPI["firefox"], {encoding:"utf8"});
    var fJson = JSON.parse(file);
    return fJson.windows[fJson.selectedWindow].tabs[fJson.windows[fJson.selectedWindow].selected-1].entries[fJson.windows[fJson.selectedWindow].tabs[fJson.windows[fJson.selectedWindow].selected-1].index-1].url;
  } catch (err) {
    throw err;
  }

}
