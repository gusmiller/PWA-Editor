/*******************************************************************
 * Carleton Bootcamp - 2023
 * Copyright 2023 Gustavo Miller
 * Licensed under Mozilla Public License Version 2.0
 * Assignment # 19 - Progressive Web Applications (PWA) 
 * Code provided by Carleton University as startup
 * 
 * Date : 12/30/2023 9:21:28 AM
 * Purpose: 
 *******************************************************************/
const { CacheFirst, StaleWhileRevalidate, warmStrategyCache } = require('workbox-strategies');
const { registerRoute } = require('workbox-routing');
const { CacheableResponsePlugin } = require('workbox-cacheable-response');
const { ExpirationPlugin } = require('workbox-expiration');
const { precacheAndRoute } = require('workbox-precaching/precacheAndRoute');

precacheAndRoute(self.__WB_MANIFEST);

// cache HTML pages with CacheFirst strategy
const pageCache = new CacheFirst({
     cacheName: 'page-cache',
     plugins: [
          new CacheableResponsePlugin({
               statuses: [0, 200],
          }),
          new ExpirationPlugin({
               maxAgeSeconds: 30 * 24 * 60 * 60,
          }),
     ],
});

/**
 * Cache warming is a concept which is used to optimize the performance 
 * of a website or web application by preloading the cache with frequently 
 * accessed content.
 * https://www.webscale.com/blog/cache-warming-optimizing-user-experience/#:~:text=Cache%20warming%20is%20a%20concept,serve%20it%20to%20the%20user.
 */
warmStrategyCache({
     urls: ['/index.html', '/'],
     strategy: pageCache,
});

/**
 * Name of the cache storage: asset-cache
 */
registerRoute(({ request }) => request.mode === 'navigate', pageCache);

// Cache assets with StaleWhileRevalidate 
registerRoute(
     ({ request }) =>
          request.destination === 'script' ||
          request.destination === 'worker' ||
          request.destination === 'style' ||
          (
               request.destination === 'image' &&
               request.url.includes('/images/')
          ),
     new StaleWhileRevalidate({
          cacheName: 'assets-cache',
          plugins: [
               new CacheableResponsePlugin({
                    statuses: [0, 200],
               }),
               new ExpirationPlugin({
                    maxAgeSeconds: 30 * 24 * 60 * 60,
               }),
          ],
     })
);

// handle fetch events
self.addEventListener('fetch', (event) => {
     console.log('Fetching:', event.request.url);

     event.respondWith(
          fetch(event.request).catch((error) => {
               console.error('Fetch error:', error);

               // offline response here
               const offlineResponse = new Response('<h1>Offline</h1>', {
                    headers: { 'Content-Type': 'text/html' },
               });

               return offlineResponse;
          })
     );
});

// log additional information for debugging
console.log('Service Worker loaded:', self);

// event listener for fetch errors in the service worker
self.addEventListener('message', (event) => {
     if (event.data.error) {
          // error message for service worker fetch errors
          console.error('Fetch error:', event.data.error);
          document.body.innerHTML = '<h1>Offline</h1>';
     }
});