// JavaScript Document
var events = require('events');
var eventEmitter = new events.EventEmitter();
var connectHandler = function() {
	console.log('Connection Successful');
	eventEmitter.emit('data_received');
};

eventEmitter.on('connection', connectHandler);
eventEmitter.on('data_received', function() {
	console.log('Data received Successfully');
});

eventEmitter.emit('connection');
console.log('End of Program');