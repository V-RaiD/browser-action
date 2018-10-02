var express = require('express');
var router = express.Router();
var services = require('../services');

/* GET users listing. */
router.get('/start', function(req, res, next) {
  try {
    services.start.start(req.query.browser, req.query);
    res.send("started");
  } catch (err) {
    res.send(err);
  }
});

router.get('/stop', function(req, res, next) {
  try {
    services.stop.stop(req.query.browser);
    res.send("stopped");
  } catch(err) {
    res.send(err);
  }
});

router.get('/geturl', function(req, res, next) {
  url = services.addressbar.getUrl(req.browser);
  res.send(url);
});

router.delete('/cookie/delete', function(req, res, next) {
  services.history.delete(req.query.browser);
  res.send('deleted all the history');
});

module.exports = router;
