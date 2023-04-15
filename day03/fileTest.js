let file = require('fs'); //node.js에 있는 모듈 import
let user = new Object();
let userJSON;

user.name = "한동석";
user.id = "hds1234";
user.pw = "1234";

userJSON = JSON.stringify(user);
console.log(userJSON);

// file.writeFile('경로', '내용', '인코딩', '콜백함수');
// file.readFile('경로', '인코딩', '콜백함수');

// file.writeFile('user.json', userJSON, 'utf-8', function(e){
//     if(e){
//         console.log(e);
//     }else{
//         console.log("출력 성공!");
//     }
// });

file.readFile('user.json', 'utf-8', function (e, content) {
    if (e) {
        console.log(e);
    } else {
        let user = JSON.parse(content);
        console.log(user.name);
    }
});