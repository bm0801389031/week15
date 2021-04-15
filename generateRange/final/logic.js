//function statement named generateRange
//with parameters min, max step
function generateRange(min, max, step){
    //varible declaration named narray set empty
      let narray = [];
    //for loop let i assigned to min; i less or 
    //equal to max; i plus equals step
      for(let i = min; i <= max; i += step){
    //narray push method with i as parameter
        narray.push(i)
      }
      //return narray;
      return narray;
    }