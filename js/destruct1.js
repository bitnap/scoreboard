// 배열 destruct assignment
// 순서대로 할당
var a, b, rest;
[a, b] = [10, 20];
// [a, b=20] = [10];
// [a, b] = [10]; <-- b는 undefined로 찍힘

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: [30,40,50]