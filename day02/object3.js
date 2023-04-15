/* 기차에 동급별 좌석을 구현하자!
3명의 고객이 있으며, 각 고객별 정보는 다음과 같다.

1.
이름:홍길동
나이:20
등급:1

2.
이름:이순신
나이:40
등급:2

3.
이름:장보고
나이:19
등급:3 

3명은 기차 한대에 모두 탑승한다.
기차 객체를 만들고 각 손님들을 프로퍼티로 선언한다.*/

var person1 = {
    name : "양정우",
    age : 30,
    hobby : "정치질"
}
var person2 = {
    name : "김의엽",
    age : 30,
    hobby : "정우패기"
}
var person3 = {
    name : "임은준",
    age : 30,
    hobby : "찐따"
}

var tesla = new Object();

tesla.num1 = person1;
tesla.num2 = person2;
tesla.num3 = person3;

console.log(tesla.num3.hobby);

