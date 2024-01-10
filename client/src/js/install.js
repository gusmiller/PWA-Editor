/*******************************************************************
 * Carleton Bootcamp - 2023
 * Copyright 2023 Gustavo Miller
 * Licensed under Mozilla Public License Version 2.0
 * Assignment # 19 - Progressive Web Applications (PWA) 
 * Code provided by Carleton University as startup
 * 
 * Date : 12/30/2023 7:11:28 AM
 * Purpose: This file is used by the webpack Configuration file.
 *******************************************************************/

const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA

/**
 * Todo-done: Add an event handler to the `beforeinstallprompt` event.
 * The beforeinstallprompt event fires when the browser has detected that a 
 * website can be installed as a Progressive Web App.
 * Important Note: There's no guaranteed time this event is fired, but it 
 * usually happens on page load.
 * https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeinstallprompt_event
 */
window.addEventListener('beforeinstallprompt', (event) => {
     window.deferredPrompt = event;
     butInstall.classList.toggle('hidden', false);
});

/**
 * Todo-done: Implement a click event handler on the `butInstall` element
 */
butInstall.addEventListener('click', async () => {
     const promptEvent = window.deferredPrompt;
     if (!promptEvent) { return; }

     const result = await promptEvent.prompt();
     console.log(`Install prompt was: ${result.outcome}`);
     window.deferredPrompt = null;
     butInstall.classList.toggle('hidden', true);
});

/**
 * Todo-done: Add an handler for the `appinstalled` event
 */
window.addEventListener('appinstalled', (event) => {
     window.deferredPrompt = null;
});
