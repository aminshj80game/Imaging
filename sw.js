const V='atlas-v1',S=['./','index.html','cases.json','manifest.json','icon.svg'];
self.oninstall=e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(S)));self.skipWaiting()};
self.onactivate=e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!=V).map(x=>caches.delete(x)))).then(()=>clients.claim()));
self.onfetch=e=>{if(e.request.method!='GET')return;e.respondWith(caches.match(e.request).then(r=>{const f=fetch(e.request).then(n=>{if(n.ok){const cp=n.clone();caches.open(V).then(c=>c.put(e.request,cp))}return n}).catch(()=>r);return r||f}))};
