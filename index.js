var iLoveTheBeatles = i => {
  var array = [];
    do {
      array.push("I love the Beatles!");
      i++;
    }
  while (i < 15);
  return array;
};

var theBeatlesPlay => (musicians, instruments) {
  
  var bandMembers = [];
  for(var i = 0; i < musicians.length; i++){
    bandMembers.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return bandMembers;
}

var johnLennonFacts => facts {
  var trivia = [];
  
  var i = 0;
  while (i < facts.length) {
    trivia.push(`${facts[i]}!!!`)
    i++;
  }
  return trivia;
}
