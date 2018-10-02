const fs = require('fs');
const path = require('path');

var utils = require('../utils');

exports.delete = function (browser, options) {
  fs.readdir(utils.constants.BrowserDeleteAPI[browser] || utils.constants.BrowserDeleteAPI['firefox'], (err, files) => {
    if (err) throw err;

    for (const file of files) {
      fs.unlink(path.join(directory, file), err => {
        if (err) throw err;
      });
    }
  });
}
