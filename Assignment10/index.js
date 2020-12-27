const express = require('express');
const bodyParser = require('body-parser');
const path =  require('path');
const app = express();
const tempRoute = require('./src/Temperature/temp.js');
const distRoute = require('./src/Distance/dist');

app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());


app.get("/",(req, res)=>{
    res.sendFile(path.join(__dirname, "/index.html")); 
});
app.use("/tempConverter", tempRoute);
app.use("/distConverter", distRoute);

app.listen(8080);

