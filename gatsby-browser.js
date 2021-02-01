export const onServiceWorkerUpdateFound = () => {
  const doSomething = () => {
    console.log("did something")
  }
  const showNotification = () => {
    Notification.requestPermission(result => {
      if (result === "granted") {
        navigator.serviceWorker.ready.then(registration => {
          registration.showNotification("Update", {
            body: "New content is available!",
            vibrate: [200, 100, 200, 100, 200, 100, 400],
            tag: "request",
            actions: [
              // you can customize these actions as you like
              {
                action: doSomething(), // you should define this
                title: "OK",
              },
            ],
          })
        })
      }
    })
  }

  showNotification()
}
