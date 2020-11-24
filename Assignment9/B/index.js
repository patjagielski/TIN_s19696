const express = require('express');
const bodyParser = require('body-parser');
const path =  require('path');

const app = express();

app.listen(8080);

app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static('assets'));

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "/index.html"));
});

app.post("/ajaxtest", function(req, res){
   var body = req.body;
   res.send(JSON.stringify(body));
});