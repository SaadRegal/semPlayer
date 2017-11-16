const express = require('express');
const path = require('path');

// Port Number
const port = process.env.PORT || 3232;

const app = express();

//Static Folder
app.use(express.static(path.join(__dirname, '/')));

// Start Server
app.listen(port, function()  {
    console.log('Server started on port '+port);
});


