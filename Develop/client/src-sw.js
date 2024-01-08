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
const { offlineFallback, warmStrategyCache } = require('workbox-recipes');
const { CacheFirst } = require('workbox-strategies');
const { registerRoute } = require('workbox-routing');
const { CacheableResponsePlugin } = require('workbox-cacheable-response');
const { ExpirationPlugin } = require('workbox-expiration');
const { precacheAndRoute } = require('workbox-precaching/precacheAndRoute');

precacheAndRoute(self.__WB_MANIFEST);

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

warmStrategyCache({
     urls: ['/index.html', '/'],
     strategy: pageCache,
});

registerRoute(({ request }) => request.mode === 'navigate', pageCache);

/**
 * ToDo-Done: Set up asset cache. Define the callback function 
 * that will filter the requests we want to cache (in this 
 * case, JS and CSS files)
 * Name of the cache storage: asset-cache
 */
registerRoute(
     ({ request }) => ['style', 'script', 'worker'].includes(request.destination),
     new CacheFirst({
          cacheName: 'asset-cache',
          plugins: [
               // This plugin will cache responses with these headers to a maximum-age of 30 days
               new CacheableResponsePlugin({
                    statuses: [0, 200],
               }),
          ],
     })
);
