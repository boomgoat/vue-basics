/* eslint-disable no-console */

import { register } from "register-service-worker";

if (process.env.NODE_ENV === "production") {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready() {
      console.log(
        "App is being served from cache by a service worker.\n" +
          "For more details, visit https://goo.gl/AFskqB"
      );
    },
    registered() {
      console.log("Service worker has been registered.");
    },
    cached() {
      console.log("Content has been cached for offline use.");
    },
    updatefound() {
      console.log("New content is downloading.");
    },
    updated() {
      console.log("New content is available; please refresh.");

      // Using a boolean flag to check user response and reload page
      let shouldReloadPage = false;
      shouldReloadPage = confirm("Reload page for new content");

      // If user aggrees, reload page
      if (shouldReloadPage) {
        // despite documentation, this does NOT hard refresh the browser
        location.reload(true);

        // **Note: Most servers handle invalidating cache, that should be looked into as well
        // Using javascript to invalidate cache could result in hacky methods that can possibly
        // break the code or cause security concerns.
      }
    },
    offline() {
      console.log(
        "No internet connection found. App is running in offline mode."
      );
    },
    error(error) {
      console.error("Error during service worker registration:", error);
    },
  });
}
