// var hong = {name :'홍길동', age : 20, level :1 };
// var lee = {name :'이순신', age : 40, level :2 };
// var jang = {name :'장보고', age : 19, level :3 };

// var train = new Array(hong,lee,jang); //train 객체에 저위에 객체들 담음

// console.log(train); 
// console.log(JSON.stringify(train)); //JSON으로 변경!!

var hong = {
    name : "홍길동",
    age : 30,
    level : 1
};
var lee = {
    name : "김의엽",
    age : 28,
    level : 3
};
var jang = {
    name : "장발장",
    age : 35,
    level : 2
};

var train = new Array(hong,lee);

train.push(jang);

console.log(train);

