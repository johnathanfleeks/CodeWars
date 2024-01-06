// Task

// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.
// Example

// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6

// Input validation

// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

function sumArray(array) {
    // had to use 3 conditionals
    // TypeError: Cannot read property 'sort' of null
    // when written (array === null || array < 2 || !array)
    if(array === null) {
      return 0;
    }

    else if(array < 2) {
      return 0;
    }

    else if(!array) {
      return 0;
    }
    
    else {
      let sum = 0;
      let sort = array.sort((a, b) => a - b);
      
      for(let i = 1; i < sort.length - 1; i++) {
        sum += sort[i];
      }
      return sum;
    };
};