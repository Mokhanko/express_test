var express = require('express');
var beer = require('./lib/beers');
var app = express();

var handlebars = require('express-handlebars').create({ defaultLayout: 'main'});
app.engine('handlebars',  handlebars.engine);
app.set('view engine', 'handlebars');


app.set('port', process.env.PORT || 3001);
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('home', {props: JSON.stringify(req.headers)});
});

app.get('/about', (req, res) => {
  res.render('about', { beers : beer.getBeer() });
  console.log(req.acceptsLanguages);
});


app.use((req, res) => {
  res.status(404);
  res.render('404');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), () => {
  console.log('Express run on http://localhost: ' + app.get('port') + ': press Ctrl+C  to stop');
});
