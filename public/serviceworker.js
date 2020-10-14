const CACHE_NAME = "v1.1.3",
  urlsToCache = [
    "/",
    "/index.html",

    "/static/css/10.8d2096f1.chunk.css",
    "/static/css/10.8d2096f1.chunk.css.map",
    "/static/css/4.eaabacee.chunk.css",
    "/static/css/4.eaabacee.chunk.css.map",
    "/static/css/5.f64fce57.chunk.css",
    "/static/css/5.f64fce57.chunk.css.map",
    "/static/css/6.731a4dec.chunk.css",
    "/static/css/6.731a4dec.chunk.css.map",
    "/static/css/7.3be9efa7.chunk.css",
    "/static/css/7.3be9efa7.chunk.css.map",
    "/static/css/8.18a707b8.chunk.css",
    "/static/css/8.18a707b8.chunk.css.map",
    "/static/css/9.bfc28961.chunk.css",
    "/static/css/9.bfc28961.chunk.css.map",
    "/static/css/main.6d6ad1ea.chunk.css",
    "/static/css/main.6d6ad1ea.chunk.css.map",

    "/static/js/0.04f3a211.chunk.js",
    "/static/js/0.04f3a211.chunk.js.map",
    "/static/js/10.e2592a39.chunk.js",
    "/static/js/10.e2592a39.chunk.js.map",
    "/static/js/11.1aff9ba2.chunk.js",
    "/static/js/11.1aff9ba2.chunk.js.map",
    "/static/js/12.7f9f3f36.chunk.js",
    "/static/js/12.7f9f3f36.chunk.js.map",
    "/static/js/13.e621fefe.chunk.js",
    "/static/js/13.e621fefe.chunk.js.map",
    "/static/js/3.36ee1e04.chunk.js",
    "/static/js/3.36ee1e04.chunk.js.map",
    "/static/js/4.ce6bf0e3.chunk.js",
    "/static/js/4.ce6bf0e3.chunk.js.map",
    "/static/js/5.883a08ee.chunk.js",
    "/static/js/5.883a08ee.chunk.js.map",
    "/static/js/6.41666dd5.chunk.js",
    "/static/js/6.41666dd5.chunk.js.map",
    "/static/js/7.93433e8a.chunk.js",
    "/static/js/7.93433e8a.chunk.js.map",
    "/static/js/8.6c822d3c.chunk.js",
    "/static/js/8.6c822d3c.chunk.js.map",
    "/static/js/9.31183567.chunk.js",
    "/static/js/9.31183567.chunk.js.map",
    "/static/js/main.12398555.chunk.js",
    "/static/js/main.12398555.chunk.js.map",
    "/static/js/runtime-main.f8c78846.js",
    "../build/static/js/runtime-main.f8c78846.js.map",

    "/assets/img/bg-main.jpg",
    "/assets/img/color-picker.png",
    "/assets/img/cursor.png",
    "/assets/img/figure-1.png",
    "/assets/img/figure-2.png",
    "/assets/img/figure-3.png",
    "/assets/img/hand.png",
    "/assets/img/heroku.png",
    "/assets/img/main-pic-1.png",
    "/assets/img/main-pic-2.png",
    "/assets/img/main-pic-3.png",
    "/assets/img/main-pic-4.png",
    "/assets/img/main-pic-5.png",
    "/assets/img/main-pic-6.png",
    "/assets/img/main-pic-7.png",
    "/assets/img/mongodb.png",
    "/assets/img/node.png",
    "/assets/img/project-1.jpg",
    "/assets/img/react.png",
    "/assets/img/redux.png",
    "/assets/img/sass.png",
  ],
  self = this;

// Install SW
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
      .then(() => console.log("Cache Opened"))
      .catch((err) => console.log("Installing Error: ", err))
  );
  return self.skipWaiting();
});

// Fetch SW
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then(
      (res) =>
        res ||
        fetch(e.request).catch((err) => {
          // console.log("matching with index, err: ", err);
          return caches.match("/index.html");
        })
    )
  );
});

// Activate SW
self.addEventListener("activate", (e) => {
  const cacheWhitelist = [];
  cacheWhitelist.push(CACHE_NAME);
  e.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames.map((cacheName) => {
            if (urlsToCache.indexOf(cacheName) !== -1) {
              return caches.delete(cacheName);
            }
          })
        )
      )
      .catch((err) => console.log("Activation Error: ", err))
  );
  return self.clients.claim();
});
