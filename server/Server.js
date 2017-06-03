'use strict'
const express = require('express');

function Server(port = process.env.PORT || 3003) {
	this._app = express();
	this._port = port;
	this._app.use('/', express.static('./public'));
}

Server.prototype.listen = function() {
	this._app.listen(this._port, () => {
		console.log(`Server running at port ${this._port}`);
	});
};

module.exports = Server;