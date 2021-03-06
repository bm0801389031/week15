describe("generateRange(2, 10, 2)", function() {
    Test.assertSimilar(generateRange(2, 10, 2), [2,4,6,8,10]);
  });
  
  describe("generateRange(1, 10, 3)", function() {
    Test.assertSimilar(generateRange(1, 10, 3), [1,4,7,10]);
  });
  
  describe("generateRange(1, 10, 1)", function() {
    Test.assertSimilar(generateRange(1, 10, 1), [1,2,3,4,5,6,7,8,9,10]);
  });
  
  describe("generateRange(1, 10, 4)", function() {
    Test.assertSimilar(generateRange(1, 10, 4), [1,5,9]);
  });
  
  describe("generateRange(1, 10, 5)", function() {
    Test.assertSimilar(generateRange(1, 10, 5), [1,6]);
  });
  
  describe("generateRange for random", function() {
    var generateRandom = function(min, max){
      return Math.floor(Math.random() * max) + min;
    };
    
    var range = function(min, max, step){
      var z = [];
      for(var i = min; i <= max; i += step){
        z.push(i);
      }
      return z;
    };
    
    for(var i = 0; i < 10; i++){
      var randomMax = generateRandom(30, 100),
          randomMin = generateRandom(1, 20),
          randomStep = generateRandom(1, 10);
    
      Test.assertSimilar(generateRange(randomMin, randomMax, randomStep), range(randomMin, randomMax, randomStep));
      }
  });