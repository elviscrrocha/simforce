/* Service worker — cache dos arquivos para uso offline (PWA).
   Ao mudar os arquivos do app, suba o número de CACHE para forçar atualização. */
const CACHE = "simforce-v16";
const CORE = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js?v=16",
  "./questions.js?v=16",
  "./questions-extra.js?v=16",
  "./questions-pt.js?v=16",
  "./questions-fix.js?v=16",
  "./manifest.json",
  "./assets/hero-astro.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-180.png",
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(CORE)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  e.respondWith(
    caches.match(req).then((hit) => {
      if (hit) return hit;
      return fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy));
          return res;
        })
        .catch(() => caches.match("./index.html")); // fallback offline
    })
  );
});
