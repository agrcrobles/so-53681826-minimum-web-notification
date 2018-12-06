module.exports = function notifyMe() {
	// Let's check if the browser supports notifications
	if (!("Notification" in window)) {
		alert("This browser does not support system notifications");
	}

	// Let's check whether notification permissions have already been granted
	else if (Notification.permission === "granted") {
		// If it's okay let's create a notification
		spawnNotification("Hi there!",
			"Calling you from Buenos Aires",
		);
	}

	// Otherwise, we need to ask the user for permission
	else if (Notification.permission !== 'denied') {
		Notification.requestPermission(function (permission) {
			// If the user accepts, let's create a notification
			if (permission === "granted") {
				spawnNotification("Hi there!",
					"Calling you from Buenos Aires",
				);
			}
		});
	}
	// Finally, if the user has denied notifications and you
	// want to be respectful there is no need to bother them any more.
}
function spawnNotification(theBody,theTitle) {
	var options = {
		body: theBody,
		// stack overflow icon
		icon: 'http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png',
	}
	var n = new Notification(theTitle, options);
}