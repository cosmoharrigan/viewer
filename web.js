var express = require('express');
var app = express();

app.use(express.static('public'))

app.get('/hello.txt', function(req, res){
  res.send('Hello World');
});

app.listen(process.env.PORT || 5000);
console.log('Listening on port 3000');