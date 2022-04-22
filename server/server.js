const path = require('path');
const express = require('express');
const apps = express();
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../build');
apps.use(express.static(publicPath));
apps.listen(port, () => {
   console.log(`Server is up on port ${port}!`);
});
