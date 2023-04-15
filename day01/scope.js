//Node.js에서는 전역 변수들을 모두 global 객체에서 관리한다.

// 브라우저에서 사용될 지 Node.js에서 사용될 지 모를 때에는 this 혹은 globalThis를 사용한다.
// 1. this : 현재 스코프를 관리하는 객체(global 혹은 window)
// 2. globalThis : 현재 스코프를 관리하는 객체를 리턴(global 혹은 window)

globalThis.x; // this와 globalThis의 사용에 있어서 차이는 없지만, 가독성이 더 좋은 globalThis를 권장한다.

// this.x; //전역 변수, 지역 변수와 이름이 같을 경우에는 this를 붙여서 접근 가능
// global.x; //전역 변수, 지역 변수와 이름이 같을 경우에는 global을 붙여서 접근 가능
// var x; //전역 변수, 지역 변수와 이름이 같을 경우 함수 내에서 접근 불가(ES6부터)

function f() {
    var y; //지역 변수
    var x = 20; //지역 변수
    globalThis.x = 10; //전역 변수
    this.y = 10; //지역 변수
    z = 10; //전역 변수

    console.log(x);
    console.log(y)
}

f();
console.log(x);
console.log(z);
console.log(x,y,z);