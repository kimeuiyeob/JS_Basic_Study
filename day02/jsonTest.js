//프로퍼티에 "" (two quotation)이 있으면 JSON이고,
//프로퍼티에 어떠한 따옴표도 없으면 JS OBJECT 이다.
//JSON.parse() : JSON 형식을 JS OBJECT타입으로 변환
//JSON.stringify() :JS OBJECT 형식을 JSON형식으로 변환

user = { name: "한동석", age: 20 };
userJSON = JSON.stringify(user);
console.log(userJSON);

user = JSON.parse(userJSON);
console.log(user);