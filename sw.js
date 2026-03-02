const VER = 'stride-v3';  // Changed from v2 to v3
const SHELL = ['./', './index.html', './manifest.json', './icons/icon-192.png', './icons/icon-512.png', './icons/icon-180.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VER).then(c => Promise.allSettled(SHELL.map(u => c.add(u)))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VER).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (url.hostname.includes('fonts.g')) {
    e.respondWith(caches.open(VER).then(c => c.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(r => { c.put(e.request, r.clone()); return r; }).catch(() => cached);
    })));
    return;
  }
  if (url.origin === self.location.origin) {
    e.respondWith(caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(r => {
        if (r && r.status === 200) caches.open(VER).then(c => c.put(e.request, r.clone()));
        return r;
      }).catch(() => caches.match('./index.html'));
    }));
  }
});