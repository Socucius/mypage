var express = require('express');
var app = express();
app.set('view engine', 'jade');
app.use(express.static('styles'));
app.use(express.static('images'));


app.get('/*', function(req, res) {
  res.render('index',{ title: 'Hey', message: 'Hello there!'});
})

app.listen(3000, function() {
  console.log('Hi there!');
});
