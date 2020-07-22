self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll([
        './',
        "./site.webmanifest",
        './index.html',
        "./404.html",
        './css/',
        './css/main.css',
        './css/home.css',
        './css/normalize.css',
        './js/',
        './js/vendor/modernizr-3.11.2.min.js',
        './js/main.js',
        './js/plugins.js',
        './img/',
        './img/icon-72x72.png',
        './img/icon-96x96.png',
        './img/icon-128x128.png',
        './img/icon-144x144.png',
        './img/icon-152x152.png',
        './img/icon-192x192.png',
        './img/icon-512x512.png',
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method === "POST") return
  event.respondWith(
    caches.match(event.request).then((resp) => {
      return resp || fetch(event.request).then((response) => {
        let responseClone = response.clone();
        caches.open('v1').then((cache) => {
          cache.put(event.request, responseClone);
        });
        return response;
      });
    }).catch(() => {
      console.log('not found?')
      return caches.match('./404.html');
    })
  );
});

self.onerror = (e) => {
  console.log(e)
}