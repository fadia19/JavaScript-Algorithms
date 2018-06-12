function getMean(arr) {
	var mean = 0;
	arr.forEach(num => {
		mean += num;
	});
	return mean / arr.length;
}

function getMedian(arr) {
	arr.sort(function(a, b) {
		return a - b;
	});
	var median = 0;
	if (arr.length % 2 === 0) {
		median = (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2;
	} else {
		median = arr[Math.floor(arr.length / 2)];
	}
	return median;
}

function getMode(arr) {
	var count = {};
	arr.forEach(num => {
		if (!count[num]) {
			count[num] = 0;
		}
		count[num]++;
	});
	var max = 0;
	var mode = [];
	for (var i in count) {
		if (count[i] > max) {
			mode = [i];
			max = count[i];
		} else if (count[i] === max) {
			mode.push(i);
		}
		if (mode.length === Object.keys(count).length) {
			mode = [];
		}
	}
	return mode;
}

function getMeanMedianMode(arr) {
	return {
		mean: getMean(arr),
		median: getMedian(arr),
		mode: getMode(arr),
	};
}

// getMean([1,2,3,4,5]);
// getMedian([1,2,3,4]);
// getMedian([1,2,3,4,5]);
// getMode([1, 1, , 2 ,2, 3, 4, 5, 7, 4, 5, 8, 9]);
getMeanMedianMode([9,10,23,10,23,9]);