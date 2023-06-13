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
