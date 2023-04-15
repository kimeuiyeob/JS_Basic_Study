//JS에서는 오버로딩을 지원하지 않습니다.
//자바에서는 같은 이름이라도 매게변수갯수나 타입으로 오버로딩이 가능한데 JS는 안된다.
function add(num1, num2, num3) {
    return num1 + num2 + num3;
}
function add(num1, num2) {
    return num1 + num2;
}
//JS에서 동일한 식별자로 함수를 여러번 선언하면, 가장 마지막에 선언한 함수로 결정된다.
console.log(add(1, 3));
console.log(add(1, 2, 3)); //이게 1,2만 더해진다.

//가변인자
function add() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var total = 0;
    for (var i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total;
}
console.log(add(1, 3));
console.log(add(1, 2, 3));

// typescript를 사용하고 싶을 때에는 다운로드 후 사용해야 한다.
// npm install typescript --save-dev
// npm install -g typescript
// npm install -g ts-node @types/node
// npx tsc
// 파일 확장자를 .ts로 변경
// tsc 파일명.ts
// node 파일명.js
// tsc --init

function intro(name) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    console.log("이름:" + name);
    for (var i = 0; i < args.length; i++) {
        console.log("기타정보" + (i + 1) + ":" + args[i]);
    }
}
intro("1", 20, "경기도");
