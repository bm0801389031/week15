function testing(actual, expected) {
    Test.assertSimilar(actual, expected);
}

describe("Basic tests",function() {
it("noBoringZeros",function() {
    testing(noBoringZeros(1450), 145)
    testing(noBoringZeros(960000), 96)
    testing(noBoringZeros(1050), 105)
    testing(noBoringZeros(-1050), -105)
    testing(noBoringZeros(-105), -105)
    testing(noBoringZeros(0), 0)
})})

describe("Random tests",function() {

    function randint(a, b) { 
        return Math.floor(Math.random() * (b - a + 1) + a); 
    }
    //................
    function noBoringZeros1322(n) {
      if (n === 0) return 0;
      while (n % 10 == 0) {
        n = n / 10;
      }
      return n;
    }  
    //.................
    console.log("****noBoringZeros");
    function tests_code() {
        var i = 0;
        while (i < 100) {
            var k = randint(100, 10000)
            testing(noBoringZeros(1000 * k), noBoringZeros1322(1000 * k));
            testing(noBoringZeros(-1000 * k), noBoringZeros1322(-1000 * k));
            testing(noBoringZeros(2 * k), noBoringZeros1322(2 * k));
            testing(noBoringZeros(-k), noBoringZeros1322(-k));
            i++;
        }
        i += 1
    }
    tests_code();
})