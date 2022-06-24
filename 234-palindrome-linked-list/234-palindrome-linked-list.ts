/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function isPalindrome(l: ListNode | null): boolean {
    let midPoint = l, endPoint = l;
    while(endPoint !== null && endPoint.next !== null){
        endPoint = endPoint.next.next;
        midPoint = midPoint.next;
    }
    let temp1 = midPoint, temp2 = midPoint.next;
    if(temp2 === null) return l.val === midPoint.val;
    while(temp2 !== null && temp1 !== null){
        midPoint = temp2;
        temp2 = temp2.next;
        midPoint.next = temp1;
        temp1 = midPoint;
    }
    while(midPoint.next !== l && midPoint !== l){
        if(midPoint.val !== l.val)
            return false;
        midPoint = midPoint.next;
        l = l.next;
    }
    return true;
};