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

// Import methods to save and get data from the indexedDB database in './database.js'
import { putDb, getDb } from './database';
import { header } from './header';

export default class {
     constructor() {
          const localData = localStorage.getItem('content');

          // check if CodeMirror is loaded
          if (typeof CodeMirror === 'undefined') {
               throw new Error('CodeMirror is not loaded');
          }

          this.editor = CodeMirror(document.querySelector('#main'), {
               value: '',
               mode: 'javascript',
               theme: 'monokai',
               lineNumbers: true,
               lineWrapping: true,
               autofocus: true,
               indentUnit: 2,
               tabSize: 2,
          });

          // When the editor is ready, set the value to whatever is stored in indexeddb.
          // Fall back to localStorage if nothing is stored in indexeddb, and if neither 
          // is available, set the value to header.
          getDb().then((data) => {
               console.info('Loaded data from IndexedDB, injecting into editor');
               this.editor.setValue(data || localData || header); // Set the value in the editor
          })

          // Save the content of the editor to localstorage on change
          this.editor.on('change', () => {
               localStorage.setItem('content', this.editor.getValue()); 
          });

          // Save the content of the editor when the editor itself is loses focus
          this.editor.on('blur', () => {
               console.info('The editor has lost focus');
               putDb(localStorage.getItem('content'));
          });
     }
}
