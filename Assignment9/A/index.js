const express = require('express');
const bodyParser = require('body-parser');
const path =  require('path');
let fs = require('fs');

const app = express();

app.listen(8080);

app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static('assets'));

app.get("/", function(req, res){
    fs.readFile('./assets/index.json', 'utf8', function(err, data){
        let json = JSON.parse(data);
        let n1 = json.n1;
        let n2 = json.n2
        let op = json.op;
        let answer = json.answer;
        
        switch(op){
            case "+":
                 answer = parseInt(n1)+parseInt(n2);
            break;
            case "-":
                 answer = parseInt(n1)-parseInt(n2);
            break;
            case "*":
                 answer = parseInt(n1)*parseInt(n2);
            break;
            case "/":
                 answer = parseInt(n1)/parseInt(n2);
            break;
        }
        let obj = {
            n1,
            n2,
            answer
        };
        let myJson = JSON.stringify(obj)
        res.send(myJson);
        fs.writeFile('./assets/answer.json', myJson , function(err){
            if (err) return console.log(err);
        });
    });
});
