const http = require('http');
const url = require('url');

http.createServer(function (req, res) {
  const queryObject = url.parse(req.url,true).query;
  const linebreak = "\n";
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(String(queryObject.num1));
  res.write("<br>");
  
  res.write(String(queryObject.num2));
  
  res.write("<br>");
  res.write(String(parseInt(queryObject.num1)+parseInt(queryObject.num2)));
  res.end();
}).listen(8080);