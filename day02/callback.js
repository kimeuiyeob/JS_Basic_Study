//JS에서는 매게변수의 개수에 맞추어 값을 전달할 필요가 없다.
//만약 매게변수보다 부족하게 값을 전달하면 값을 못받은 매게변수에는 undefined가 들어간다.
//만약 매게변수 개수보다 넘치게 값을 전달하면 잘린다.

//JS에서는 함수를 값으로 취급하기 때문에 매게변수로 전달이 가능하다.
//현재 함수에서 나온 결과값을 다른 함수로 전달할 때에는 callback이라는 매게변수명으로 함수를 전달받아 온다.

function add(num1, num2, callback) {
    if (callback) { //callback에 함수가 전달되었다면(undifined가 아니라면)
        callback(num1 + num2); //전달받은 함수를 사용하면서 매게변수에 결과를 전달한다.
        return;
    }
    return num1 + num2;
}

add(3, 2, function (result) {
    console.log(result / 2);
});

console.log(add(3, 2));

// 상품명, 가격, 개수를 전달받은 뒤 전체 금액을 출력한다.
// 1. 상품명과 가격, 개수는 A함수에서 전달받는다.
// 2. B함수에서는 상품명과 전체 금액을 전달받아서 출력한다.
// 3. A함수는 B함수를 callback함수로 전달받는다.

function pay(name, price, count, callback) {
    var total = price * count;
    if (callback) {
        callback(name,price,count, total);
    }
}


// pay("감자", 720, 8, pay_callback);

// function pay_callback(name, total) {
//     console.log(name + ":" + total + "원")
// }

pay("감자", 720, 8, function(name,price,count,total) {
    console.log(name + ":" + price + "원" + count + "개" + total + "총가격")
});

//=================================================

/* function pays(name, price, number, callback) {
    if (callback) {
        var total = price * number
        callback(name, total);
    }
}

pays("사과", 5000, 3, function (name, total) {
    console.log(name, total)
}) */

//=================================================

/* function fruit(name, price, ea, callback) {
    total = price * ea
    if (callback) {
        callback(name, total)
    }
}
fruit("사과", 3000, 2, function (name,total) {
    console.log(name, total);
}) */

//=================================================

/* function allPrice(name, price, ea, callback) {
    if(callback){
        callback(name,price*ea);
    }
}

function printPrice(name, result) {
    console.log("상품명 : " + name + " 가격 : " + result);
}

allPrice("콜라", 1000, 5, printPrice) */