/*
interface User {
  name: string;
  age: number;
}
type users = User[];
*/
// type Arr = number[] | string[];
// function getFirstElement(arr: Arr): number | string {
//   return arr[0];
// }
function getFirstElement(arr) {
    return arr[0];
}
var ans1 = getFirstElement([1, 2, 3, 4, 5]);
var ans2 = getFirstElement(["a", "b", "c", "d", "e"]);
var ans3 = getFirstElement([true, false, true, false, true]);
var ans4 = getFirstElement([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
]);
console.log(ans1);
console.log(ans2);
console.log(ans3);
console.log(ans4);
