const CACHE='paper-studio-0.2.0';const FILES=['./','index.html','style.css','manifest.webmanifest','icon.svg','icon-192.png','icon-512.png','js/app.js','js/core.js','js/db.js','js/export.js','js/zip.js','js/demo.js','samples/demo-1.json','samples/demo-2.json','samples/demo-3.json'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('paper-studio-')&&k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET'||new URL(e.request.url).origin!==location.origin)return;e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});
