var express = require('express');
var app = express();
app.set('view engine', 'jade');
app.use(express.static('styles'));
app.use(express.static('images'));
app.use(express.static('js'));

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 3000
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'


app.get('/*', function(req, res) {
  res.render('index',{ title: 'Hey', message: 'Hello there!'});
})

app.listen(server_port, server_ip_address, function() {
  console.log('Hi there!');
});
