function mergeSort(arr){
  if(arr.length < 2) return arr;
  var middleIndex = Math.floor(arr.length/2);
  var firstHalf = arr.slice(0 , middleIndex);
  var secondHalf = arr.slice(middleIndex);

  return merge(mergeSort(firstHalf) , mergeSort(secondHalf));

}

function merge(array1 , array2){
  var finalArray = [];
  while(array1.length && array2.length){
    var minElem;
    if(array1[0] < array2[0]) minElem=array1.shift();
    else minElem=array2.shift();
    finalArray.push(minElem);    
  }
  if(array1.length) finalArray = finalArray.concat(array1);
  else finalArray = finalArray.concat(array2);
  return finalArray;
}

// mergeSort([6000 , 34 , 203 , 3 , 746 , 200 , 984 , 198 , 764 , 1 , 9 , 1]);
mergeSort([100, -20 , 40 , -30 , 16 , -100 , -101]);