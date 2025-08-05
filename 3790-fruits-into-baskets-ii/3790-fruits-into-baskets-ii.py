class Solution:
    def numOfUnplacedFruits(self, fruits: List[int], baskets: List[int]) -> int:
        used = set()
        left_over = 0
        for fruit in fruits:
            found_spot = False
            for i in range(len(baskets)):
                if baskets[i] >= fruit and i not in used:
                    found_spot = True
                    used.add(i)
                    break
            if not found_spot:
                left_over+= 1
        return left_over
                    