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

function getFirstElement<T>(arr: T[]) {
  return arr[0];
}

let ans1 = getFirstElement<number>([1, 2, 3, 4, 5]);
let ans2 = getFirstElement<string>(["a", "b", "c", "d", "e"]);
let ans3 = getFirstElement<boolean>([true, false, true, false, true]);
let ans4 = getFirstElement<number[]>([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
]);

console.log(ans1);
console.log(ans2);
console.log(ans3);
console.log(ans4);

function swap<T, U>(arg1: T, arg2: U): [U, T] {
  return [arg2, arg1];
}

let ans5 = swap<number, string>(1, "b");
let ans6 = swap<string, number>("a", 1);

type Todo = {
  title: string;
  description: string;
  completed: boolean;
  id: number;
};

type updatedTodoInput = Partial<Todo>;
