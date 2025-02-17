/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function (head, k) {
    let dummy = new ListNode(0);
    let cur = dummy;
    cur.next = head;
    let target = null;
    let steps = k;
    while (steps > 0) {
        cur = cur.next;
        steps--;
    }
    target = cur;  
    // console.log(cur, target)  
    // use fast and slow pointer
    let fast = head;
    let slow = head;
    steps = k;
    while (steps > 0) {
        fast = fast.next;
        steps--;
    }         
    while(fast!=null) {
        fast = fast.next;
        slow = slow.next;
    }
    if (target !== slow) {
        let temp = target.val;
        target.val = slow.val;
        slow.val = temp;
    }
    return dummy.next;
};