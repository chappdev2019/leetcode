var rankTeams = function (nums) {
    let n = nums[0].length;
    // Initialize count dictionary (Object in JS)
    let count = {};
    for (let v of nums[0]) {
        count[v] = new Array(n).fill(0);
    }
    // { A: [ -5, 0, 0 ], B: [ 0, -2, -3 ], C: [ 0, -3, -2 ] } 
    // Populate ranking count
    for (let a of nums) {
        for (let i = 0; i < a.length; i++) {
            count[a[i]][i] -= 1; // Reduce value for ranking position
        }
    }
    let teamList = nums[0].split('');

    const sortByranking = (v1, v2) => {
        let rank1 = count[v1];
        let rank2 = count[v2];
        // Compare rank arrays
        for (let i = 0; i < n; i++) {
            if (rank1[i] !== rank2[i]) return rank1[i] - rank2[i];
        }
        return v1.localeCompare(v2);
    }
    return teamList.sort(sortByranking).join('');
};
