var beers =[
  "Non Alcoholic",
  "Whise beer",
  "Lager beer",
  "Dark beer"
];

exports.getBeer = () => {
  var randBeer = Math.floor(Math.random()*beers.length);
  return beers[randBeer];
};