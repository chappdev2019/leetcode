class Solution:
    def largestGoodInteger(self, num: str) -> str:
        max_good = ""
        is_good = lambda i:num[i]==num[i-1] and num[i-1]==num[i-2]
        for i in range (2,len(num)):
            if is_good(i) and (max_good=="" or max_good[0]<num[i]):
                max_good = num[i-2:i+1]

        return max_good