// 2.  In the code below there’s a setTimeout call scheduled, then a heavy calculation is run, that takes more than 100ms to finish.
// When will the scheduled function run?
// Answer: After the loop.

let i = 0;
setTimeout(() => console.log(i), 100); // ?
// assume that the time to execute this function is >100ms
for(let j = 0; j < 10000000; j++) {
  i++;
}


// Result:
// 10000000