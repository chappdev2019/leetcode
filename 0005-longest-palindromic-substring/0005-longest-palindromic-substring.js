/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let start = 0, maxLength = 0, res = "";
    for (let i = 0; i < s.length; i++) {
        let oddPalindrome = expandAroundCenter(i, i);
        if (oddPalindrome.length > maxLength) {
            maxLength = oddPalindrome.length;
            res = oddPalindrome;
        }

        let evenPalindrome = expandAroundCenter(i, i + 1);
        if (evenPalindrome.length > maxLength) {
            maxLength = evenPalindrome.length;
            res = evenPalindrome;
        }
    }

    function expandAroundCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return s.substring(left + 1, right);
    }
    return res;

};