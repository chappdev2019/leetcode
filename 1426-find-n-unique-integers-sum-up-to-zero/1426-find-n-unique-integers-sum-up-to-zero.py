class Solution:
    def sumZero(self, n: int) -> List[int]:
        res = []
        if(n%2==1):
            res.append(0)
        count = n//2
        res.extend([x for x in range(1,count+1)])
        res.extend([-x for x in range(1,count+1)])
        return res