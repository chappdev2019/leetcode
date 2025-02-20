/**
 * @param {string[][]} paths
 * @return {string}
 */
//  链接如果是随机出现的，前面的有可能就会错过链接 ["RptSdsUfeH","BTYVayMQGQ"],["ugNmb BOBZ","JCuKctgrbi"],["BTYVayMQGQ","ugNmb BOBZ"]

var destCity = function (paths) {
    let map = new Map();
    for (let i = 0; i < paths.length; i++) {
        let [from, to] = paths[i];
        map.set(from,to);
    }
    for (const[k,v] of map.entries()) {
        if (!map.has(v)) return v;
    }
};