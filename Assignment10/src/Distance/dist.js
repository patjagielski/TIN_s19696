const express = require('express');
const path =  require('path');
const router = express.Router();
const doCalculations = require('./calculations');

router.get("/",function(req, res){
        res.sendFile(path.join(__dirname,"/distConverter.html"));
    });
router.post("/", function(req, res){
        var body = req.body;
        var result = JSON.stringify(doCalculations(body.distInput, body.from, body.to))
        res.send(result);
    });
 
 
module.exports = router;

