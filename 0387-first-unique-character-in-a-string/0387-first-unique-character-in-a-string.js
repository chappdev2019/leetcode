/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map = new Map();
    for (let i = 0; i <s.length; i++) {
        let v = (map.get(s[i])|| 0)
        map.set(s[i],v+1);
    }
    for (let [k,v] of map.entries()) {
        if (v == '1') return s.indexOf(k);
    }
    return -1;
};