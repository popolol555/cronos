const CACHE = 'cronometro-cache-v1';
const urls = ['/', '/index.html', '/manifest.json', '/service-worker.js', '/icon-192.png', '/icon-512.png'];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(urls))));
self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));
