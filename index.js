(function(root, factory) {
	module.exports = factory();
})(this, function() {
	var express = require('express');
	var bodyParser = require('body-parser');
	return (function () {
		var router = express.Router();
		router.use(bodyParser.json({'limit': '100mb'}));
		router.use(require('no-cache-express'));
		return router;
	});
});

