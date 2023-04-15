// 프로토타입
// new 뒤에 나오는 생성자를 자바스크립트에서는 프로토타입이라고 부른다.
// 프로토타입은 함수로 선언하여 사용한다. 단, 반드시 대문자로 시작해준다.

function User(id, pw, name, age) {

    this.id = id;
    this.pw = pw;
    this.name = name;
    this.age = age || 1;
    this.intro = function () {

        with (console) {
            log(this.id);
            log(this.pw);
            log(this.name);
            log(this.age);
        }
    };
}

han = new User('hds1234', '1234', '한동석', 20);
hong = new User('hgd1234', '444', '홍길동', 40);
lee = new User();

console.log(han);
console.log(JSON.stringify(han));
console.log(JSON.parse(`{"id":"hds1234","pw":"1234","name":"한동석","age":20}`));

// console.log(hong);
// console.log(lee);
// han.intro();
// hong.intro();