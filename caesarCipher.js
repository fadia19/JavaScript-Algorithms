function caesarCipher (str , num){
  num = num % 26;
  var lowerCase = str.toLowerCase();
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var newStr ='';

  for(var i=0 ; i<lowerCase.length ; i++){
    var currentLetter = lowerCase[i];
    if(currentLetter === ' ')
    {
      newStr+= currentLetter;
      continue;
    }
    var currentIndex = alphabet.indexOf(currentLetter);
    var newIndex = currentIndex + num;
    if(newIndex > 25) newIndex-= 26;
    if(newIndex < 0) newIndex+=26;
    if(str[i] === str[i].toUpperCase()) {
      newStr+= alphabet[newIndex].toUpperCase();
    }
    else {
      newStr += alphabet[newIndex];
    }
  }
  return newStr;
}

// caesarCipher('Zoo Keeper' ,2);
// caesarCipher('Big Car' , -16);
caesarCipher('javascript' , -900);