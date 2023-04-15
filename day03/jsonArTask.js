// 상품명, 가격, 재고를 프로퍼티로 담고 있는 Object를 3개 선언한다.
// 3개의 Object를 1개의 Array 객체에 모두 담는다.
// JSON으로 변경시킨다.
// shop.json으로 출력한다.
// readFile을 사용해서 shop.json을 읽어 온다.
// 기존의 JSON 내용을 Array 객체로 변환한다.
// 총 가격과 총 재고 수를 Object에 담은 뒤 sum.json으로 출력한다.

let file = require("fs"); //require()불러오는거 , fs는 Node.js에 내장되어있는 모듈 라이브러리 따로 설치 필요없는것.

function Product(name, price, stock) { //Product함수를 만들면 사용하기 편리해진다.
    this.name = name;
    this.price = price;
    this.stock = stock;
    this.json = JSON.stringify(this); //이걸 하나더 만듦으로써 JSON형식으로 쉽게 만들수 있다.
}

let products = new Array(); //Array배열을 만든다.
products.push(new Product('마우스', 15000, 3).json); //배열에는 push()사용해서 배열에 값을 넣어주고 .json을 사용해서 JSON형식으로 바로 만든다. 
products.push(new Product('키보드', 60000, 8).json);
products.push(new Product('야구공', 3000, 50).json);

// console.log(products.toString()); //toString()을 사용하면 JSON형식에 []이게 사라진다.
// file.writeFile('shop.json', "[" + products.toString() + "]", 'utf-8', function(e){}); //shop파일을 만들어서 그안에 products값을 넣어준다.

file.readFile('shop.json', 'utf-8', function (e, content) { //shop파일을 읽는다.
    let sumObject = new Object(); //Object 객체 생성
    let totalPrice = 0; 
    let totalStock = 0;
    products = JSON.parse(content); //shop파일의 content내용이 JSON형식으로 되있는걸 .parse()사용해서 Object형식으로 바까서 products에 담아준다.

    products.map(v => v.price * v.stock).forEach(v => totalPrice += v); //map()이란 값을 바까준다고 생각하자 , 가격과 갯수를 다 곱해주고 그걸 토탈가격에 저장한다.
    products.map(v => v.stock).forEach(v => totalStock += v); //각 product 상품을 totalStock에 모든상품 담아준다.

    sumObject.totalPrice = totalPrice; //만든 객체에다가 넣어준다.
    sumObject.totalStock = totalStock;
    sumObject = JSON.stringify(sumObject); //sumObject Object형식을 JSON형식으로 바까준다.

    file.writeFile('sum.json', sumObject, 'utf-8', function (e) { }); //sum파일을 만든뒤 sumObject 값을 넣어준다.

});