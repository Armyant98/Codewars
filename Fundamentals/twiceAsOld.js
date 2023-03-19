// Your function takes two arguments:

// 1. current father's age (years)
// 2. current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.



function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - 2 * sonYearsOld);
}

// I know the question is 6 months old, but I don't feel like it was adequately answered so here I am.

// Another way to think of this question is "When will the son be the age his father was when he was born?" As that is the time the father will be twice his age.

// So we get the Father's age at his birth (fathersAge - sonsAge)

// Then we get the years since that birth (sonsAge) and subtract it from the above (fathersAge - sonsAge - sonsAge) simplified to (fathersAge - sonsAge*2)

// We are looking at the distance in time from now to that point, without regard for direction, so Math.abs().

// I hope this helps someone.