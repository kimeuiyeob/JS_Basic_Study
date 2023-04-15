
// 상품명, 가격, 재고를 JS 객체에 프로퍼티로 담는다.
// JSON 형식으로 변환한 뒤, product.json으로 출력한다.
// product.json에 있는 JSON 형식을 JS Object 타입으로 변환한다.
// 각 프로퍼티를 출력한다.

let file = require('fs'); //node.js에 있는 모듈 import
let product = new Object();
let userJSON;

product.name = "감자";
product.price = 3000;
product.ea = 5;

userJSON = JSON.stringify(product);
console.log(userJSON);

let noJSON = JSON.parse(userJSON);
console.log(noJSON);

//=============================================================

let file = require('fs');
let product = { name: '마우스', price: 4900, stock: 4 };
let productJSON = JSON.stringify(product);

// file.writeFile('product.json', productJSON, 'utf-8', function(e){});
file.readFile('product.json', 'utf-8', function (e, content) {
    let product = JSON.parse(content);
    console.log(product.name);
    console.log(product.price);
    console.log(product.stock);
});