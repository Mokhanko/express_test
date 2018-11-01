var express = require('express');

var app = express();

var handlebars = require('express-handlebars').create({ defaultLayout: 'main'});
app.engine('handlebars',  handlebars.engine);
app.set('view engine', 'handlebars');


app.set('port', process.env.PORT || 3001);
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/about', (req, res) => {
  var randBeer = beers[Math.floor(Math.random()*beers.length)];
  res.render('about', { beers : randBeer });
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

var beers =[
  "Non Alcoholic",
  "Whise beer",
  "Lager beer",
  "Dark beer"
];