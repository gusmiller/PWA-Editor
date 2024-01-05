/*******************************************************************
 * Carleton Bootcamp - 2023
 * Copyright 2023 Gustavo Miller
 * Licensed under Mozilla Public License Version 2.0
 * Assignment # 19 - Progressive Web Applications (PWA) 
 * Code provided by Carleton University as startup
 * 
 * Date : 12/30/2023 7:20:28 AM
 * Purpose: 
 *******************************************************************/
const path = require('path');

module.exports = (app) =>
     app.get('/', (req, res) =>
          res.sendFile(path.join(__dirname, '../client/dist/index.html'))
     );
