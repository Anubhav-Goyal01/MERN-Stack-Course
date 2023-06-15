// Intersection of two arrays
/*
https://leetcode.com/problems/intersection-of-two-arrays/
*/

var intersection = function(nums1, nums2) {
    let set1 = new Set(nums1)
    let set2 = new Set(nums2)
    new_arr = []
    for (let num1 of set1){
        if (set2.has(num1)){
            new_arr.push(num1)
        }
    }
    return new_arr
};


/*
https://leetcode.com/problems/length-of-last-word/
*/

var lengthOfLastWord = function(s) {
    let spaces = 0
    for (let i = s.length - 1; i >= 0; i--){
        if (s[i] === " " ) {
            spaces += 1
        }
        else break
    }

    let count = 0
    for (i = s.length - 1 - spaces; i >= 0; i--){
        if (s[i] === " ") break
        count += 1
    }
    return count

};


/*
https://leetcode.com/problems/missing-number/
*/

var missingNumber = function(nums) {
    for (let i = 0; i <= nums.length; i++ ){
        if (nums.includes(i)) continue
        return i
    }
};
/*
https://leetcode.com/problems/reverse-linked-list/
*/

var reverseList = function(head) {
    let p = head
    let prev = null
    while (p !== null){
        let q = p.next
        p.next = prev
        prev = p
        p = q
    }
    return prev
};


/*
https://leetcode.com/problems/merge-two-sorted-lists/description/
*/

var mergeTwoLists = function(list1, list2) {
    let currentNode = new ListNode(0, null)
    let dummyNode = currentNode

    while (list1 !== null && list2 !== null){
        if (list1.val < list2.val){
            currentNode.next = list1
            list1 = list1.next
        } 
        else{
            currentNode.next = list2
            list2 = list2.next
        }
        currentNode = currentNode.next
    }
    currentNode.next = list1 || list2
    return dummyNode.next

};



/*
https://leetcode.com/problems/palindrome-linked-list/
*/

var isPalindrome = function(head) {
    let slow = head;
    let fast = head;
    const stack = [];
  
    while (fast !== null && fast.next !== null) {
      stack.push(slow.val);
      slow = slow.next;
      fast = fast.next.next;
    }
  
    // if the linked list had odd length, this will run
    if (fast !== null) {
      slow = slow.next;
    }
  
    while (slow !== null) {
      if (slow.val !== stack.pop()) {
        return false;
      }
      slow = slow.next;
    }
  
    return true;
  }