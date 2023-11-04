/**
 * Arrays
 * 
 * always use camel case where needed
 * 
 * Make sure to write the question/instruction and then the answers below
 * 
 */

/**
 * Question 5 - concat two different arrays by using .concat() method
 * 
 * initialize the variable supers with these popular suer heros superman, batman, flash, and aquaman
 * add your favourite super heros from a new array into the main array
 * conaole log the results and add it in comment
 */

var supers = ['Superman', 'Batman', 'Flash', 'Aquaman'];
var newSupers = supers.concat(['Wolverine', 'Cyclopse', 'Prof X']);
console.log(supers);
console.log(newSupers); //inserts list into the list


/**
 * Question 6 - create a 2 dimensions array that is 2-by-4. Grab some values out of this array to create a sentence using concatenation.
 * 
 * initialize locations to a list of cities in both US and Canada
 * vancouver, toronto, los angeles, new york
 * consolelog the sentence that indicates mike is from Vancouver, Canada yet he lives in New York, United States 
 */

var locations = [
    ['Vancouver', 'Toronto', 'Los Angeles', 'New York'],
    ['Canada', 'United States']
];
console.log('Mike is from ' + locations[0][0] + ', ' + locations[1][0] + ' yet he lives in ' + locations[0][3] + ', ' + locations[1][1]);

// Mike is from Vancouver, Canada yet he lives in New York, United States 