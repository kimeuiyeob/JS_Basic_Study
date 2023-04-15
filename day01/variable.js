/* author : Han
contents : variable */
//동적바인딩

/* var data= 10;
console.log(data);
console.log(typeof(data));
data = "안녕";
console.log(typeof(data)); */


//hoisting(호이스팅) : 선언의 위치에 상관없이 존재하면 메모리에 할당된다.
//초기화 작업은 호이스팅 되지 않고 선언만 호이스팅된다.
//var 키워드를 사용하지 않으면 호이스팅되지 않는다.
/* console.log(age);   
age=10;
console.log(age);
var age=20;  //이 var가 선언되면 호이스팅이된다.
console.log(age); */

//var 키워드를 사용하더라도 여러번 선언이 가능하기 때문에 계속 수정될 수 있다.
var data = 10;
var data = 20;
console.log(data);

