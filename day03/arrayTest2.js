//1~10까지 Array객체에 담은후 짝수만 출력
//한글을 숫자로
//숫자를 한글로
//1~100까지 합 출력

//1~10까지 Array객체에 담은후 짝수만 출력
// var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (var i = 0; i < num.length; i++) {
//     if (num[i] % 2 == 0) {
//         console.log(num[i]);
//     }
// }

//1~10까지 Array객체에 담은후 짝수만 출력

// var data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// data.filter(function (v) {
//     return v % 2 == 0;
// }).forEach(function (v) {
//     console.log(v);
// })

// var sexy = ["가", "나", "다", "라", "마"];

// sexy.filter(function (v) {
//     if (v == "나") {
//         return v;
//     }
// }).forEach(function(v){
//     console.log(v);
// })



// 1~10까지 Array객체에 담은후 짝수만 출력
// var datas = new Array(10).fill();
// datas.forEach(function(v, i, ar){
//     ar[i] = i+1;
// })


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




//1~100까지 합 출력
// var sum =0;
// for (let i = 0; i <= 100; i++) {
//     sum += i;
// }
// console.log(sum);

// var data = new data(100).fill().map((v, i) => i + 1);
// console.log(data);

// var datas = new Array(100).fill().map((v, i) => i + 1);
// var result = 0;
// datas.forEach(v => result += v);
// console.log(result);