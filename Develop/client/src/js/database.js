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
import { openDB } from 'idb';

const initdb = async () =>
     openDB('jate', 1, {
          upgrade(db) {
               if (db.objectStoreNames.contains('jate')) {
                    console.log('jate database already exists');
                    return;
               }
               db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
               console.log('jate database created');
          },
     });

/**
 * ToDo-Done: Add logic to a method that accepts some content and adds it to the database. In here 
 * I have added a success/error traps.
 * @param {data} content 
 */
export const putDb = async (content) => {
     const jateDb = await openDB('jate', 1); // Connect database (include version)
     const tx = jateDb.transaction('jate', 'readwrite'); // RW transaction.
     const store = tx.objectStore('jate'); // Open up the desired object store.
     let request = store.put({ id:1, value: content }); // Add the content
     const result = await request;
};

/**
 * ToDo-Done: Add logic for a method that gets all the content from the database. I should implement
 * an request.onsuccess / request.onerror to proplerly handle the call but I am not
 * @returns result - Object containing all records
 */
export const getAllDb = async () => {
     console.log('GET all from the database');
     const jateDb = await openDB('jate', 1);
     const tx = jateDb.transaction('jate', 'readonly');
     const store = tx.objectStore('jate');
     const request = store.getAll();
     const result = await request;
     console.log('result.value', result);
     return result;
};

initdb();