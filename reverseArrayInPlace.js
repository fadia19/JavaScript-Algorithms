//Don't use push or reverse methods !
function reverseArrayInPlace(arr) {
  var temp = arr;
  for(var i=0 ; i<arr.length ; i++){
    var temp = arr[i];
    if(i>=arr.length/2){
      break;
    }
    else{
      arr[i]=arr[arr.length-1-i];
      arr[arr.length-1-i] = temp;
    }
  }
	return arr;
}

var arr=[1,2,3,4,5,6,7,8,9,10];
reverseArrayInPlace(arr);
