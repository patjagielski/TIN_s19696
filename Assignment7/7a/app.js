const http = require('http');
const url = require('url');

http.createServer(function (req, res) {
  if (req.url === '/favicon.ico') {
    res.writeHead(200, {'Content-Type': 'image/x-icon'} );
    return res.end();
  }

  const slug = url.parse(req.url, true).pathname;
  const x = parseInt(url.parse(req.url, true).query.x);
  const y = parseInt(url.parse(req.url, true).query.y);
  let z = 0;
  console.log(String(x))
  switch (slug) {
    case '/add':
      z = x+y;
      console.log(String(z));
      res.writeHead(200, {'Content-type':'text/html'});
      res.write('This is the Add Page');
      res.write('<br/>');
      res.write('Value 1: ' + String(x));
      res.write('<br/>');
      res.write('Value 2: ' + String(y));
      res.write('<br/>');
      res.end('Result: ' + String(z));
    break;
    case '/sub':
      z = x-y;
      res.writeHead(200, {'Content-type':'text/html'});
      res.write(`This is the Sub Page`);
      res.write('<br/>');
      res.write('Value 1: ' + String(x));
      res.write('<br/>');
      res.write('Value 2: ' + String(y));
      res.write('<br/>');
      res.end('Result: ' + String(z));
    break;
    case '/mult':
      z = x*y;
      res.writeHead(200, {'Content-type':'text/html'});
      res.write(`This is the Mult Page`);
      res.write('<br/>');
      res.write('Value 1: ' + String(x));
      res.write('<br/>');
      res.write('Value 2: ' + String(y));
      res.write('<br/>');
      res.end('Result: ' + String(z));
    break;
    case '/div':
      z = x/y;
      res.writeHead(200, {'Content-type':'text/html'});
      res.write(`This is the Div Page`);
      res.write('<br/>');
      res.write('Value 1: ' + String(x));
      res.write('<br/>');
      res.write('Value 2: ' + String(y));
      res.write('<br/>');
      res.end('Result: ' + String(z));
    break;
  
    default:
      res.writeHead(404, {'Content-type':'text/html'});
      res.end('URL not found');
      break;
  }
  
  // const queryObject = url.parse(req.url,true).query;
  // const linebreak = "\n";
  // res.writeHead(200, {'Content-Type': 'text/html'});
  // res.write(String(queryObject.num1));
  // res.write("<br>");
  
  // res.write(String(queryObject.num2));
  
  // res.write("<br>");
  // res.write(String(parseInt(queryObject.num1)+parseInt(queryObject.num2)));
  res.end();
}).listen(8080);