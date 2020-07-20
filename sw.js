self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll([
        './',
        "./site.webmanifest",
        './index.html',
        './css/',
        './css/main.css',
        './css/normalize.css',
        './js/',
        './js/vendor/modernizr-3.11.2.min.js',
        './js/main.js',
        './js/plugins.js',
        './icon-72x72.png',
        './icon-96x96.png',
        './icon-128x128.png',
        './icon-144x144.png',
        './icon-152x152.png',
        './icon-192x192.png',
        './icon-512x512.png',
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
      return caches.match('./icon-512x512.png');
    })
  );
});