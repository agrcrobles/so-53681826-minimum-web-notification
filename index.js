const notifyMe = require("./notifyMe");

Notification.requestPermission().then(function(result) {
	console.log(result);
	notifyMe();
});