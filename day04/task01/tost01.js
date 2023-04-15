document.getElementById("change").onclick = getResult; /* 여기서 = getResult의 자리는 콜백함수 자리라고 생각 */
/* HTML에서는 onclick하고 함수를 실행시키는 느낌이지만 , js에서는 onclick 하고 = 함수 이름을 써서 아래 함수를 호출하는식으로 생각하자!! */

function changeToHangle(number) {
    const div = document.getElementById("round"); /* 상단 왼쪽 동그라미 디아이비를 div변수에 담는다. */
    const p = document.getElementById("result"); /* p태그 결과표시부분을 p변수에 담는다. */

    let hangle = "공일이삼사오육칠팔구"; /* chatAt으로 숫자를 한글로 바꾸기 위한거라고 생각! */

    let data = "";
    let result = "";

    let check = false; /* 플래그를 자주 사용하자!! , 쓰면 생각보다 편하게 일처리할수있음!!! */

    if (isNaN(number)) { /* 만약 숫자를 넣지않았다면 처음 if문으로 들어와서 */
        p.innerHTML = "숫자만 입력해주세요."; /*p태그 에다가 innerHTML을 사용해서 숫자만 입력해달라고 전달한다 */
        div.innerHTML = "4"; /* 그리고 왼쪽 상단 동그라미 div의 숫자를 4로 바꾼다. */
        return; /* 그리고 return을 해줘야 여기서 값을 반환하고 끝낸다. */
    }

    if (number < 1) {  /* 만약 내가 입력한 숫자가 1보다 작으면*/
        result = "영"; /* result 변수에다 영을 집어넣어서 아래 보면 += 해서 값을 합산한다. */
        check = true;
    }

    div.innerHTML = "3"; /* 그리고 상단 왼쪽 div안에 숫자를 3으로 바꾼다. */

    for (let i in number) {  /* 내가 입력한 숫자를 for문을 돌린다. */
        data = hangle[number.charAt(i)]; /* 공일이삼사오육칠팔구 중 만약 ( 내가 72를 입력했다면 칠이가 ) data변수에 들어가게된다. */

        if (check && data == '공') {
            check = false;
            continue;
        }

        if (!data) {
            result += "점";
            div.innerHTML = "2";
            continue;
        }
        result += data;
    }
    p.innerHTML = result; /* p태그에다가 innerHTML을 사용해서 result에 들어가있는 값으로 변경한다. */
}

function getResult() {
    const input = document.querySelector("input[name='input']").value; 
    /* 쿼리셀릭터를 써서 저렇게 []를 사용해서 요소를 찾고 .value를써 값을 변수 input에 담는다 */    /* <input type="text" name="input"  */
    changeToHangle(input); /* 그럼 내가 입력한값이 input매게변수로 넣고 changetohangle 메소드를 실행한다 */
}