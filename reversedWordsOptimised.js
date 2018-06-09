function reverseWords(str) {
	//Array of words in the string
	newStr = str.split(' ');
	//new array of reversed words
	var finalStr = [];
  
	newStr.forEach(word => {
		var temp = '';
    for(var i = word.length-1 ; i>=0 ; i--){
      temp+=word[i];
    }
    finalStr.push(temp);
	});
  return finalStr.join(' ');

}

reverseWords('This is a string of words');
