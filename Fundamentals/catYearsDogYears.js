// Kata Task
// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that
// References

// http://www.catster.com/cats-101/calculate-cat-age-in-cat-years
// http://www.slate.com/articles/news_and_politics/explainer/2009/05/a_dogs_life.html
// If you liked this Kata there is another related one here

// FUNDAMENTALS
// Suggest kata description edits

// const Test = require('@codewars/test-compat');

// describe("Solution Tests", function() {

//   it("one", function() {
//     Test.assertSimilar(humanYearsCatYearsDogYears(1), [1,15,15]);
//   });

//   it("two", function() {
//     Test.assertSimilar(humanYearsCatYearsDogYears(2), [2,24,24]);
//   });

//   it("ten", function() {
//     Test.assertSimilar(humanYearsCatYearsDogYears(10), [10,56,64]);
//   });

//   it("random", function() {
//     const answer20180123 = h => [h, h==1 ? 15 : h==2 ? 24 : 24+4*(h-2), h==1 ? 15 : h==2 ? 24 : 24+5*(h-2)]
        
//     for (let r = 0; r < 100; r++) {
//       let humanYears = Math.floor(Math.random() * 25) + 1;
//       let expected = answer20180123(humanYears);
//       let actual = humanYearsCatYearsDogYears(humanYears);
//       console.log(`Random test ${r+1}: human years ${humanYears} => [${expected}]`);
//       Test.assertSimilar(actual, expected);
//     }
//   });

// });


var humanYearsCatYearsDogYears = function(humanYears) {
    let catYears = 0;
    let dogYears = 0; 
    
    for (let i = 1; i <= humanYears; i++) {
      if (i === 1) {
        catYears += 15;
        dogYears += 15;
      } else if (i === 2) {
        catYears += 9;
        dogYears += 9;
      } else {
        catYears += 4;
        dogYears += 5;
      }   
    }
    
    return [humanYears, catYears, dogYears];
  }