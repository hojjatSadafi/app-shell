self.addEventListener('install',event=>{
    event.waitUntil(
        caches.open('app-shell').then(cache=>{
            cache.add('/')
        })
    )
})

self.addEventListener('fetch',event=>{
    event.respondWith(
        caches.match(event.request).then(res=>{
            return res || fetch(event.request)
        })
    )
})