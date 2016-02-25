(function(root, factory) {
	module.exports = factory();
})(this, function() {
	var express = require('express');
	var router = express.Router();
	var bodyParser = require('body-parser');
	router.use(bodyParser.json({'limit': '100mb'}));
	router.use(require('no-cache-express'));
	return router;
});

