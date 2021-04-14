describe("Solution Tests", function() {

    it("one", function() {
      Test.assertSimilar(humanYearsCatYearsDogYears(1), [1,15,15]);
    });
  
    it("two", function() {
      Test.assertSimilar(humanYearsCatYearsDogYears(2), [2,24,24]);
    });
  
    it("ten", function() {
      Test.assertSimilar(humanYearsCatYearsDogYears(10), [10,56,64]);
    });
  
    it("random", function() {
      const answer20180123 = h => [h, h==1 ? 15 : h==2 ? 24 : 24+4*(h-2), h==1 ? 15 : h==2 ? 24 : 24+5*(h-2)]
          
      for (var r = 0; r < 100; r++) {
        var humanYears = Math.floor(Math.random() * 25) + 1;
        var expected = answer20180123(humanYears);
        var actual = humanYearsCatYearsDogYears(humanYears);
        console.log(`Random test ${r+1}: human years ${humanYears} => [${expected}]`);
        Test.assertSimilar(actual, expected);
      }
    });
  
  });