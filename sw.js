self.addEventListener('fetch', (event) => {
  // Apenas intercepta requisições para permitir o funcionamento como App
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
