const text = document.querySelector("input[type='button']");
const input = document.querySelector("div fieldset .answer");


const onee = document.querySelector("tr td.onee");
const twoo = document.querySelector("tr td.twoo");
const threee = document.querySelector("tr td.threee");

const one = document.querySelector("table tr.one");
const two = document.querySelector("table tr.two");
const three = document.querySelector("table tr.three");

var child = "아동";
var teen = "청소년";
var adult = "성인";
var answer;

// newDiv.innerHTML = "새로 생성된 div입니다.";

text.addEventListener("click", function () {
    answer = input.value;

    if (answer == child) {
        two.style.background = "white";
        three.style.background = "white";
        one.style.background = "red";

        twoo.innerHTML = "청소년";
        threee.innerHTML = "성인";
        onee.innerHTML = "★아동";

    } else if (answer == teen) {
        one.style.background = "white";
        three.style.background = "white";
        two.style.background = "red";

        onee.innerHTML = "아동";
        threee.innerHTML = "성인";
        twoo.innerHTML = "★청소년";

    } else if (answer == adult) {
        one.style.background = "white";
        two.style.background = "white";
        three.style.background = "red";

        onee.innerHTML = "아동";
        twoo.innerHTML = "청소년";
        threee.innerHTML = "★성인";

    } else {
        alert("다시 시도해주세요");
    }
});