/**
 * @param {number[]} nums
 * @return {number}
 */

/* 
treats an array as a linked list, and the starting point for finding the ring is a repeating number
First, we use the fast and slow hands to find the meeting point in the ring; Then, we reset the pointer and find the starting point of the ring, which is the repeating number
The time complexity of the whole process is O(n) because it takes up to 2n steps, while the space complexity is O(1) and only a few variables are used
 */
var findDuplicate = function (nums) {

    let fast = 0;
    let slow = 0;
    fast = nums[nums[fast]];
    slow = nums[slow];
    
    while (slow != fast) {
        slow = nums[slow];
        fast = nums[nums[fast]]
    }
    let prev1 = 0;
    let prev2 = slow;

    while (prev1 != prev2) {// When they meet, it's the duplicate number
        prev1 = nums[prev1];
        prev2 = nums[prev2];
    }
    return prev2;
}
