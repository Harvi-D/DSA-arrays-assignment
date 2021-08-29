/**
 * Implement a brute force algorithm for finding the missing number in an array
 */
//O(n^2)
function missingNumberBruteForce(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        let match = true;
        for (let j = 1; j <= numbers.length + 1; j++) {
            match = numbers.indexOf(j);
            if (match === -1) return j;
        }
    }
}

/**
 * Use an iterative  strategy for finding the missing number in an array
 */
//O(n)
function missingNumberSum(numbers) {
    const n = numbers.length + 1;
    let sum = (n * (n + 1)) / 2;
    let realSum = 0;
    numbers.forEach((number) => {
        realSum += number;
    });
    return sum - realSum;
}

module.exports = { missingNumberBruteForce, missingNumberSum };
