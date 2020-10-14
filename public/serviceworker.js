const CACHE_NAME = "v1.1.3",
  urlsToCache = [
    "./index.html",
    "./logo.png",
    "./manifest.json",
    "./assets/img/bg-main.jpg",
    "./assets/img/color-picker.png",
    "./assets/img/cursor.png",
    "./assets/img/figure-1.png",
    "./assets/img/figure-2.png",
    "./assets/img/figure-3.png",
    "./assets/img/hand.png",
    "./assets/img/heroku.png",
    "./assets/img/main-pic-1.png",
    "./assets/img/main-pic-2.png",
    "./assets/img/main-pic-3.png",
    "./assets/img/main-pic-4.png",
    "./assets/img/main-pic-5.png",
    "./assets/img/main-pic-6.png",
    "./assets/img/main-pic-7.png",
    "./assets/img/mongodb.png",
    "./assets/img/node.png",
    "./assets/img/project-1.jpg",
    "./assets/img/react.png",
    "./assets/img/redux.png",
    "./assets/img/sass.png",
  ],
  self = this;

// Install SW
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
      .catch((err) => console.log("Istalling Error: ", err))
  );
});

// Fetch SW
self.addEventListener("fetch", (e) => {
  console.log("fetching...");
  e.respondWith(
    caches
      .match(e.request)
      .then((res) => {
        if (res) {
          console.log("found: ", e.request);
          return res;
        } else {
          console.log("network req for: ", e.request);
          return fetch(e.request)
            .then(() => {
              caches.match("./index.html");
            })
            .catch(() => {
              caches.match("./index.html");
            });
        }
        // return fetch(e.request).catch((err) => caches.match("index.html"));
      })
      .catch((err) => {
        console.log("Fetching Error: ", err);
        caches.match("./index.html");
      })
  );
});

//
self.addEventListener("activate", (e) => {
  const cacheWhitelist = [];
  cacheWhitelist.push(CACHE_NAME);
  e.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames.map(
            (cacheName) =>
              cacheWhitelist.includes(cacheName) && caches.delete(cacheName)
          )
        )
      )
      .catch((err) => console.log("Activation Error: ", err))
  );
});
