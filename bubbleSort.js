function bubbleSort(array) {
	for (var i = array.length; i > 0; i--) {
		for (var j = 0; j < i; j++) {
			if (array[j] > array[j + 1]) {
				var temp = 0;
				temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
			}
		}
	}
	return array;
}
// bubbleSort([5, 3, 8, 2, 1, 4]);
// bubbleSort([20,20,31,56,1,12,12]);
bubbleSort([3, -9, -12, -1, 8]);
