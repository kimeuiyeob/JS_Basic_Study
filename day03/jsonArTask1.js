// 상품명, 가격, 재고를 프로퍼티로 담고 있는 Object를 3개 선언한다.
// 3개의 Object를 1개의 Array 객체에 모두 담는다.
// JSON으로 변경시킨다.
// shop.json으로 출력한다.
// readFile을 사용해서 shop.json을 읽어 온다.
// 기존의 JSON 내용을 Array 객체로 변환한다.
// 총 가격과 총 재고 수를 Object에 담은 뒤 sum.json으로 출력한다.

const file = require("fs");
const { parse } = require("path");

function product(name, price, ea) {
    this.name = name;
    this.price = price;
    this.ea = ea;
    this.json = JSON.stringify(this)
}

var shop = new Array();

shop.push(new product("감자", 3000, 5).json);
shop.push(new product("고구마", 5000, 7).json);
shop.push(new product("당근", 4000, 3).json);

file.writeFile("shop.json", "[" + shop.toString() + "]", "utf-8", function (e) { });

file.readFile("shop.json", "utf-8", function (e, content) {

    let object = new Object();
    shop = JSON.parse(content);
    var total = 0; //총 프로덕트 가격
    var sum = 0; //총 개수

    shop.map(v => v.price * v.ea).forEach(v => total += v);
    shop.map(v => v.ea).forEach(v => sum += v.ea);

    object.total = total;
    object.sum = sum;
    object = JSON.parse(object);

    file.write("shop.json", object, "utf-8", function (e) { })
});
