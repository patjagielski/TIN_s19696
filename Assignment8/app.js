const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({
    extended: true
  }))


app.listen(8080, function(){
    console.log("info",'Server is running at port : ' + 8080);
    app.get('/hello', function (req, res) {
        res.send('hello world')
      })
      app.get('/form', function (req, res) {
        res.sendFile(__dirname +'/public/form.html');
      })
      app.post('/formdata', function (req, res) {
        const name = req.body.username;
        const id = req.body.id;
        res.send(`Name: ${name} <br/> ID: ${id}`);
      })
      app.get('/jsondata', function (req, res) {
        let rawdata = fs.readFileSync('./public/example.json');
        let obj = JSON.parse(rawdata);
        res.send(obj);
      })
});


