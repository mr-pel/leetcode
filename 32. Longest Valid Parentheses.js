/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let leftCount = 0;
    let rightCount = 0;
    let max = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            leftCount++;
        } else {
            rightCount++;
        }
        if (leftCount === rightCount) {
            max = Math.max(max, 2 * rightCount);
        } else if (rightCount > leftCount) {
            rightCount = 0;
            leftCount = 0;
        }
    }

    leftCount = 0;
    rightCount = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === '(') {
            leftCount++;
        } else {
            rightCount++;
        }
        if (leftCount === rightCount) {
            max = Math.max(max, 2 * leftCount);
        } else if (leftCount > rightCount) {
            leftCount = 0;
            rightCount = 0;
        }
    }
    return max;

};

console.log(longestValidParentheses("(()")); // 2
console.log(longestValidParentheses(")()())")); // 4
console.log(longestValidParentheses(")()())()(())()))")); // 12
console.log(longestValidParentheses("()(()")); // 2
console.log(longestValidParentheses(")))(((")); // 0
