const CACHE_NAME = 'simedar-mss';
const ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

// Proses Install Service Worker
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Proses Fetching Data
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});