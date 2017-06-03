'use strict'
const express = require('express');
const path = require('path');

function Server(port = process.env.PORT || 3003) {
	this._app = express();
	this._port = port;

	this._app.use('/', express.static('./build/public'));
	
	this._app.get('/', (req, res) => {
		res.render('layout');
	});

	// View engine setup
	this._app.set('views', path.join(__dirname, '..', 'views'));
	this._app.set('view engine', 'pug');
}

Server.prototype.listen = function() {
	this._app.listen(this._port, () => {
		console.log(`Server running at port ${this._port}`);
	});
};

module.exports = Server;