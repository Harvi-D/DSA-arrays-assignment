/**
 * Implement an algorithm that sorts the array then returns the minimum and maximum
 */
//O(n(log n))
 function minimumAndMaximumSort(numbers) {
    let minMax = [];
  
    if (numbers.length) {
      numbers.sort((a, b) => a - b);
      minMax.push(numbers[0]);
      minMax.push(numbers[numbers.length - 1]);
    }
    return minMax;
}

/**
 * Implement an algorithm that uses iteration to find the minimum and maximum
 */
//O(n)
 function minimumAndMaximumIterate(numbers) {
    let min = numbers[0];
    let max = numbers[0];

    for (let i = 0; i < numbers.length; i ++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    if (numbers.length) {
      return [min, max] 
    }else {
      return [];
    }
}

module.exports = { minimumAndMaximumIterate, minimumAndMaximumSort };
