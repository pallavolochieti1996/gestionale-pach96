const CACHE_NAME = "pach96-pwa-v1";

self.addEventListener("install", function(event) {
  self.skipWaiting();
});

self.addEventListener("activate", function(event) {
  event.waitUntil(clients.claim());
});

self.addEventListener("fetch", function(event) {
  event.respondWith(fetch(event.request));
});
