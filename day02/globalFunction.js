function checkGlobalFunctions() {
    // eval : 문자열 형태로 수식을 전달 받아 수식으로 계산
    var result = eval("2*3+4*6");

    var value = parseInt("hello"); //hello를 정수로 바꿀수 없으니 value에 NaN이 들어간다.

    console.log(result) //30출력
    console.log(value) //NaN출력

    // if(isNaN(value)){
    //     console.log("숫자만 가능합니다.")
    // }

    // if(!isFinite(value)){
    //     console.log("숫자만 가능합니다1")
    // }a

}

checkGlobalFunctions();