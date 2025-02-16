/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function (s) {
    let numberList = s.split(' ').filter(e => !isNaN(e));
    for (let i = 1; i < numberList.length; i++) {
        if (Number(numberList[i]) <= Number(numberList[i - 1])) return false;
    }
    return true;
};