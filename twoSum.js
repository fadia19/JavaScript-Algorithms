// returns an array of arrays holding every pair in the num array that adds up to the sum parameter
function twoSum(numArr , sum){
  var result =[];
  var hashTable =[];
  for (var i=0 ; i<numArr.length ; i++){
    var currNum = numArr[i];
    var counterPart = sum-currNum;
    if(hashTable.indexOf(counterPart) !== -1){
      result.push([counterPart , currNum]);
    }
    hashTable.push(currNum);
  }
  return result;    
}
twoSum([40,11,19,17,-12] , 28);