var num = Math.floor(Math.random() * 100); /* 이건 랜덤한값을 가져오기 위한것이다 */
/*  Math.random()은 0.0001~ 0.9까지의 랜덤한 숫자가 나온다 , 
거시서 100을 곱해주고 floor을 만나 소수점을 다 없애주면 0~99까지의 숫자를 만들어낸다. 그걸 num변수에 담는다.*/
var count = 0;

window.onload = function(){ /* 웹페이지 키면 바로 실행되는 함수 */
    document.getElementById("input").innerHTML = num; /* 위에 랜덤한 값이 텍스트창에 들어간다. */
    document.getElementById("count").innerHTML = count; /* 위에 만들어놓은 count변수 0이 바로 출력된다 */

}

function check(){ /* 텍스트창을 엔터키를 쳤거나 확인버튼을 눌렀을때 실행되는 함수 */
    var answer = document.getElementById("input").value; /* 텍스트창에 내가 입력한 값을 .value를 통해 answer변수에 담는다. */
    if(answer==""){ /* 만약 아무것도 치지 않는다면 아래 alert가 실행된다. */
        alert("숫자를 입력하세요~")
    }else if(answer> num){ /* 만약 내가 친 값이 랜덤으로 만들어진 값 num보다 크다면 아래 출력 */
        document.getElementById("check").innerHTML="<font color =red>DOWN★DOWN★DOWN"+"<br>"+"DOWN★DOWN★DOWN"+"<br>"+"DOWN★DOWN★DOWN</font>";
        /* innerHTML로 해서 저렇게 안에 문자열도 꾸며줄수 있다, 참고하자!!! */
    }else if(answer<num){ /* 만약 내가 친 값이 랜덤으로 만들어진 값 num보다 작다면 아래 출력 */
        document.getElementById("check").innerHTML="<font color =blue>UP★UP★UP★UP★UP"+"<br>"+"UP★UP★UP★UP★UP"+"<br>"+"UP★UP★UP★UP★UP</font>";
    }else if(answer==num){ /* 랜덤으로 만들어진 값이 내가 입력한 값이랑 동일하다면 아래 alert 출력 -> 정답 */
        alert("오오오올~~~")    
        document.getElementById("check").innerHTML="<strong>정답입니다.</strong>";
        document.getElementById("button").value="재시작";
        document.getElementById("button").onclick="location.reload()";

    }else{
        document.getElementById("check").innerHTML="정신 차리세요!!";
    }
    count++; 
    document.getElementById("count").innerHTML =count;
     /*화면상에 div count를 innerHTML을 통해 count++로 입력할때마다 count를 올려준다.*/
    
    if(count>7){
        /* 만약 입력한 값이 7번이상일때 실패 alert출력 */
        alert("실패!")
        document.getElementById("check").innerHTML="<font color =red><strong>실패!</strong></font>"; /* check div에 innerHTML을 이용해 실패 문구 출력 */
        document.getElementById("input").type='hidden'; /* 그리고 input 텍스트창을 안보이게 type 을 hidden으로 */
        document.getElementById("button").type='hidden';
        document.getElementById("retry").type='button';
        document.getElementById('guide').remove();
    }
}

function retryAgain(){
    alert('이번엔 잘좀해봐~')
   location.reload();
    // history.go(0);
    // location.href=location.href;
    // history.go(location.href);
}