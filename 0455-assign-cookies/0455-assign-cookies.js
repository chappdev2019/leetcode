var findContentChildren = function (g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);

    let count = 0;
    let j = 0; 

    for (let i = 0; i < g.length; i++) { 
        for (; j < s.length; j++) { 
            if (s[j] >= g[i]) { 
                count++;
                j++; 
                break; 
            }
        }
    }
    
    return count;
};
