/*******************************************************************
 * Carleton Bootcamp - 2023
 * Copyright 2023 Gustavo Miller
 * Licensed under Mozilla Public License Version 2.0
 * Assignment # 19 - Progressive Web Applications (PWA) 
 * Code provided by Carleton University as startup
 * 
 * Date : 12/30/2023 7:11:28 AM
 * Purpose: 
 *******************************************************************/
import { Workbox } from 'workbox-window';
import Editor from './editor';
import './database';
import '../css/style.css';

const main = document.querySelector('#main');
main.innerHTML = '';

const loadSpinner = () => {
     const spinner = document.createElement('div');
     spinner.classList.add('spinner');
     spinner.innerHTML = `
          <div class="loading-container">
          <div class="loading-spinner" />
          </div>`;
     main.appendChild(spinner);
};

const editor = new Editor();

if (typeof editor === 'undefined') {
     loadSpinner();
}

// Check if service workers are supported
if ('serviceWorker' in navigator) {
     // register workbox service worker
     const workboxSW = new Workbox('/service-worker.js');
     workboxSW.register();
} else {
     console.error('Service workers are not supported in this browser.');
}
