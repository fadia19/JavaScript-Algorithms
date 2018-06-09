function isPalindrome(string){
  string = string.toLowerCase();
  var arr=string.split('');
  var validChar = 'abcdefghijklmnopqrstuvwxyz'.split('');

  var lettersArr =[];

  arr.forEach(char =>{
    if(validChar.indexOf(char) > -1) lettersArr.push(char);
  });

  if(lettersArr.join('') === lettersArr.reverse().join('')) return true;
  else return false;
}

console.log(isPalindrome("Madam , I'm Adam"));