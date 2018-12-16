module.exports = function notifyMeInServiceWorker() {
	if ("serviceWorker" in navigator) {

		// Use the window load event to keep the page load performant
		navigator.serviceWorker
			.register("./sw.js")
			.then(registration => {
				if (Notification.permission === "granted") {
					var options = {
						body: "theBody",
						// stack overflow icon
						icon: 'http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png',
					}
					navigator.serviceWorker.ready.then(function(registration) {
						spawnNotificationOnTheSW(registration, "Hi there!",
							"Calling you from the service worker on Buenos Aires",
						);
					});
				}
			})
			.catch(err => console.log("failed to register service worker!"));
	}
}
function spawnNotificationOnTheSW(registration, body,title) {
	var options = {
		body: body,
		// stack overflow icon
		icon: 'http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png',
	}
	registration.showNotification(title, options);
}

function subscribe() {
	navigator.serviceWorker.ready.then(function(serviceWorkerRegistration) {
	  serviceWorkerRegistration.pushManager.subscribe()
		.then(function(subscription) {
		  // The subscription was successful
		  subscribeButton.disabled = true;
		  return sendSubscriptionToServer(subscription);
		})
		.catch(function(error) {
		  if (Notification.permission === 'denied') {
			console.log('Permission for Notifications was denied');
			subscribeButton.disabled = true;
		  } else {
			console.log('Unable to subscribe to push.', error);
			subscribeButton.disabled = false;
		  }
		});
	});
  }