// const data = [1, 2, 5, 6, 8, 9];

// const { parse } = require("path");

// for(let i=0; i<data.length; i++) {
//     console.log(data[i]);
// }

// for (let i of data) {
//     console.log(i);
// };

// var arr = [10, 20, 30, 40, 50];
// arr.push(5);
// arr.push(7);
// arr.join("+");

// arr.map(function(num,index){
//     console.log(num+"번" + index+"방");
// });

// arr.map((num,index) => {
//     console.log(index+"방" + num+"번")
// })

// console.log(arr.join("+")); //join()은 배열값 사이에 원하는걸 넣어줄수있다.
// console.log(arr.slice(1, 3)); //slice()는 이값만 빼내온다.

// arr.forEach(function(v){ //빠른포문
//     console.log(v);
// }); 

// console.log(arr.indexOf(30));
// console.log(arr.indexOf(7));

// arr.map(function (v) {
//     return v * 2;
// }).forEach(function (v) {
//     console.log(v);
// });

/* arr.map(function(v){
    return v+5;
}).forEach(function(v){
    console.log(v)
}) */

/* arr.map(function(v){
    return parseInt(v/3);
}).forEach(function(v) {
    console.log(v);
}); */

/* var datas = ["월", "화", "수"];
datas.push("목","금","토","일");

datas.map(function (v) {
    return v + "요일";
}).forEach(function(v) {
    console.log(v);
}) */

// var today = new Date();
// console.log(today);

// var now = new Date();
// console.log(now);

//============Math 사용=================


// var mathmax = Math.max(1,3,6,4,7,9,0,230,430);
// console.log(mathmax);

// var mathmin = Math.min(1,3,6,4,7,9,0,230,430);
// console.log(mathmin);

// var mathfloor = Math.floor(16.7); //Math.floor()이거는 소수점을 없애버리는 느낌??
// console.log(mathfloor);

// console.log(Math.random()*20); //Math.random()은 0보다크고 1보다 작은 랜덤한 숫자를 반환한다.


// var datas = [20, 5, 6, 12, 10];

// // forEach(callback(값,인덱스,Array객체));
// datas.forEach(function (v, i, ar) {
//     ar[i] = v * i;
// });

// console.log(datas);

// 1~10까지 Array객체에 담은후 짝수만 출력
// var datas = new Array(10).fill();
// datas.forEach(function(v, i, ar){
//     ar[i] = i+1;
// })

//====================================================================

//한글을 숫자로
// var korea = "영일이삼사오육칠팔".split("");
// let hangle = "영일이삼사오육칠팔구";
// let num = "0123456789";

// var input = "영일이삼"
// var output = "";

// for (let i = 0; i < input.length; i++) {
//     output += num.charAt[hangle.indexOf(input.charAt[i])]
// }

// console.log(output);

// 숫자를 한글로
// var hangle = "공일이삼사오육칠팔구".split("");
// var input = "1024".split("");
// var result = input.map(function(v){return hangle[v]}).join("");
// console.log(result);


// 1~100까지 합 출력
// var sum =0;
// for (let i = 0; i <= 100; i++) {
//     sum += i;
// }
// console.log(sum);

// var data = new data(100).fill().map((v, i) => i + 1);
// console.log(data);

// var datas = new Array(100).fill().map((value, index) => value);
// console.log(datas);

// var result = 0;
// datas.forEach(v => result += v);
// console.log(result);

