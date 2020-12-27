const express = require('express');
const path =  require('path');
const router = express.Router();
const doCalculations = require("./calculations.js")
// const app = express();
// const bodyParser = require("body-parser");


// app.use(bodyParser.urlencoded({ extended: false }));

router.get("/",function(req, res){
        res.sendFile(path.join(__dirname,"/tempConverter.html"));
    });
router.post("/", function(req, res){
        var body = req.body;
        var result = JSON.stringify(doCalculations(body.tempInput, body.fromOp, body.toOp))
        res.send(result);
    });
 
 
module.exports = router;

