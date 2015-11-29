var express = require('express');
var app = express();
app.set('view engine', 'jade');
app.use(express.static('styles'));
app.use(express.static('images'));
app.set('port', (process.env.PORT || 300));


app.get('/*', function(req, res) {
  res.render('index',{ title: 'Hey', message: 'Hello there!'});
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
