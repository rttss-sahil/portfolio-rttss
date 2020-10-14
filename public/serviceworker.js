const CACHE_NAME = "v1.1.3",
  urlsToCache = [
    "index.html",
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
      .catch((err) => console.log("Unable to Open cache: ", err))
  );
});

// Fetch SW
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches
      .match(e.request)
      .then((res) => fetch(e.request))
      .catch(() => {
        caches.match("index.html");
      })
  );
});

//
self.addEventListener("activate", (e) => {
  const cacheWhitelist = [];
  cacheWhitelist.push(CACHE_NAME);
  e.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});
