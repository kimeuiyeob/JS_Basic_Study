document.getElementById("change").onclick = getResult;


function changeToHangle(number) {
    const div = document.getElementById("round"); 
    const p = document.getElementById("result"); 

    let hangle = "공일이삼사오육칠팔구"; 

    let data = "";
    let result = "";

    let check = false; 

    if (isNaN(number)) { 
        p.innerHTML = "숫자만 입력해주세요."; 
        div.innerHTML = "4";
        return; 
    }

    if (number < 1) {  
        result = "영"; 
        check = true;
    }

    div.innerHTML = "3"; 

    for (let i in number) { 
        data = hangle[number.charAt(i)];

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
    p.innerHTML = result; 
}

function getResult() {
    const input = document.querySelector("input[name='input']").value; 
    
    changeToHangle(input); 
}