/*
@deploy
*/
module.exports = function(req, res, next) {
	var generator = require('node-uuid');
	res.send(JSON.stringify(generator.v1()));
}

