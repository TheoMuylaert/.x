self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll([

                "./",
                "./src/styles.css",
                "./src/img/icon/icon192.png"              
                
            ])

        })
    );
});
