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
import { putDb, getAllDb } from './database';

export default class {
     constructor() {

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
          getAllDb().then((data) => {
               if (data[0].value.length != 0) {
                    const contentData = data[0].value;
                    console.info('GetAll from IndexedDB');
                    console.log(contentData);
                    this.editor.setValue(contentData);
               } else {
                    console.warn('There is nothing in database...');
               }
          })

          // Save the content of the editor when the editor itself is loses focus
          this.editor.on('blur', () => {
               const dataContent = this.editor.getValue();
               if (dataContent) {
                    console.info('The editor has lost focus');
                    console.log(dataContent);
                    putDb(dataContent);
               }
          });
     }
}
