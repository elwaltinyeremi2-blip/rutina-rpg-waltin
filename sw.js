/* Service worker de Rutina RPG.
   Estrategia: RED PRIMERO, caché como respaldo.
   Así siempre ves la última versión cuando hay internet, y si te quedas sin
   señal la app sigue abriendo con la última copia que se descargó.
   Nunca guarda tu progreso: eso vive en localStorage, aparte de esta caché. */
const CACHE = 'rutina-rpg-v1';

self.addEventListener('install', e => { self.skipWaiting(); });

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if(e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request)
      .then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy)).catch(()=>{});
        return res;
      })
      .catch(() =>
        caches.match(e.request).then(hit => hit || caches.match('./index.html'))
      )
  );
});
