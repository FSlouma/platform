const express = require('express');
const app = express();
const port = process.env.PORT || 8082;

app.use('/', express.static('dist/platform'));

app.listen(port, () => {
    console.log("app is started to the port :", port);
})