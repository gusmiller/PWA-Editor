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
 * Push information to the IndexedDB local database. We are not creating multiple records 
 * we are adding all lines into 1 record.
 * @param {data} content 
 */
const putDb = async (content) => {
     console.log('Post to the database');
     const jateDb = await openDB('jate', 1); // Connect database (include version)
     const tx = jateDb.transaction('jate', 'readwrite'); // RW transaction.
     const store = tx.objectStore('jate'); // Open up the desired object store.
     const id = await store.put({ id: 1, value: content }); // Add the content
     console.log(`🚀 - data saved to the database with ID: ${id}`);
};

/**
 * Get the record from IndexedDB. Editor allows users to create multiple lines text
 * but they are all saved into 1 record. The max range can go from 10MB to 2GN
 * @returns result - Object containing all records
 */
const getDb = async () => {
     console.log('GET all from the database');

     const jateDb = await openDB('jate', 1); //stablish connection to database
     const tx = jateDb.transaction('jate', 'readonly'); // create a database transaction
     const store = tx.objectStore('jate'); //Get transaction object
     const content = await store.get({ id: 1 }); // get record from the IndexedD

     console.log('Data:', content.id);
     await tx.complete; //Wait for transaction to complete
     return content;
};

initdb();
export { getDb, putDb };