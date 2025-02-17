/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function (nums, head) {
    const set = new Set(nums);
    const dummy = new ListNode(0);
    dummy.next = head;
    let cur = head;
    let prev = dummy;
    while (cur) {
        if (!set.has(cur.val)) {
            prev = cur;
        } else {
            prev.next = cur.next;
        }
        cur = cur.next;
    }
    return dummy.next;
};