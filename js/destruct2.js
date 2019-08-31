// 객체 배열 할당 => 동일한 키값으로 해체 할당
var {p, q} = {p: 42, q: 50};


// 순서가 바뀌더라도 동일한 키값으로 할당됨
// var {q, p} = {p: 42, q: 50};

console.log(p); // 42
console.log(q); // true

// var {p, q, o} = {p: 42, q: 50};
// console.log(o); // undefined