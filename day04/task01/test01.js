let tempTr;
let tempText;

function confirm(){ /* html에서 text창이랑 button창을 클릭또는 엔터했을때 실행하는 함수 */
    const input = document.getElementById("input").value; 
    /* input이라는 변수에 텍스트창에 입력한값을 저장한다. 값을 가져올때 꼭 .value;를 사용해야한다. */
    const trs = document.querySelectorAll("tbody tr"); 
    /* 테이블의 tr들 즉 3열들을 trs의 변수에 저장한다. 이것으로 입력한 값이 동일할때 그 행을 빨간색으로 칠하려고 만든것이다. */
    let check = false; /* 이건 플래그라는것이다 */

    if(tempTr){ /* 자바스크립트는 위에서 아래로 실행하기 때문에 만약 색깔이 칠해지거나 별이 들어가있는걸 초기화 시켜주기 위해 이게 있는것이다. */
        tempTr.style.background = "#fff"; /* 이건 하얗게 배경을 돌려주기 위해 */
        tempTr.firstElementChild.innerHTML = tempText;/* 이걸 별을 빼고 원상태로 되돌리기 위해 */
    }

    trs.forEach(tr => {  /* 테이블의 값이 같다면 빨간색으로 칠해야되기 때문에 forEach 반복문을 이용하자 */
        let td = tr.firstElementChild; /* 이러면 td변수에 tr.fistChild이니까 아동,청소년,성인이 들어간다.  */
        if(td.innerHTML == input) { /* td변수에는 아동,청소년,성인이 있을테니까 만약 input 텍스트창에 내가 쓴 값이 동일하다면 */
        
            tempTr = tr; /* 그 값을 tempTr변수에 담는다. 이러면 3개의 열중 하나가 들어가 있을것이다.  */
            tempText = td.innerHTML; /* 이건 아동,청소년,성인중 값이 같은거 하나가 들어가 있을것이다. */

            tr.style.background = "#ef5350"; /* 그럼 그열 하나의 백그라운드를 빨간색으로 칠해준다 */
            td.innerHTML = "★" + input; /* 이건 내가 넣은 값에다가 별하나를 추가시켜준다. */
            check = true; 
            /* 여기 if문안에 들어왔단느것은 input값에다 아동,청소년,성인중 하나를 입력했다는것이고
            그럼 그중 하나행이 빨갛게 그리고 별이 추가된다. 여기서 check를 true로 바까줘야 아래 alert가 실행이 되지않는다. */
        }
    });

    if(!check){ 
        /* 맨위에 check를 false로 줬기때문에 아동,청소년,성인중 다른걸 쓰면 if문안에 안들어가기때문에 여긴 true여서 alert가 실행된다 */
        alert("다시 시도해주세요.");
    }

}