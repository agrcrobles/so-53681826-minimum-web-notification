const notifyMe = require("./notifyMe");
const notifyMeInServiceWorker = require("./notifyMeInServiceWorker")
Notification.requestPermission().then(function(result) {
	console.log(result);
	notifyMeInServiceWorker();
});
