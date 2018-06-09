function reverseWords(str){
  //Array of words in the string
  newStr = str.split(' ');

  //new array of reversed words
  var finalStr = [];
  //temp string for reverse
  var temp='';
  //looping over the array to reverse each word
  for (var i=0 ; i< newStr.length ; i++){
    for (var j=newStr[i].length-1 ; j >=0 ; j--){
      temp+=newStr[i][j];
    }
    finalStr.push(temp);
    temp='';
  }

  return finalStr.join(' ');
}

reverseWords('This is a string of words');