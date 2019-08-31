// 같은 메모리 주소를 가졌음을 확인 =>  shallow copy != deep copy

let book = {title: "인사이드 자바스크립트", price: 18000};
// 1. book을 카피한후에  price를 바꾸면 book과 copyBook이 같이 바뀐다. 이유가 무엇인가?
// let copyBook = book;
// copyBook.price = 20000;


// 2. book을 카피하되 deep copy를 수행한 후에 price를 30000으로 바꾸고 출력하라. 두개의 값이 달라야 한다.
// 2-1 Object.assign() 사용하여 deep copy하기
// 	Object.assign(target, source1, source2, ..., sourceN)
//						{} 자체가 새로운 메모리 할당

// book에 있는 property를 {} 안에 복사

//////////////////////////////////////////////////////////////////////////////////////////
// 2-2 es6 spread 연산자를 사용하여 deep copy 하기
const copyBook = { ...book };
copyBook.price = 20000;

console.log(book);
console.log(copyBook);