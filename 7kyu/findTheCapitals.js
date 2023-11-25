// Write a function that takes a single string (word) as argument. 
// The function must return an ordered list containing the indexes of all capital letters 
// in the string.

//Best Practices
var capitals = function(word){
    var caps = []
    for(var i = 0; i < word.length; i++){
        if(word[i].toUpperCase() === word[i]) caps.push(i)
    }
    return caps
}

//Clever
var capitals = function (word) {
	return word.split('').reduce(function(memo, v, i) {
    return v === v.toUpperCase() ? memo.concat(i) : memo;
  }, [])
}