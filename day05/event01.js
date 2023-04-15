const file = document.querySelector("input[type='file']"); /* type은 []이걸 사용해서 요소를 찾아온다. file타입을 file이라는 변수에 담아준다.*/
const thumbnail = document.querySelector("label[for='attach'] div"); /* 라밸태그 안에있는 div를 thumbnail 변수에다 담아준다. */

/* change : 해당 객체에 변화가 있을때 (파일이 업로드 되었을때)*/
file.addEventListener("change", function (e) { /* addEventListener는 특정 이벤트 즉 "change" 변동이 있을 때  함수 발생*/
    // console.log(e);
    // console.log(e.target.files[0]);

    /* 업로드한 파일을 읽어올 객체 */
    var reader = new FileReader();
    /* 해당 파일의 정보를 reasAsDataURL에 전달하면
    업로드된 파일의 암호화된 URL정보를 얻을수 있다. */
    reader.readAsDataURL(e.target.files[0]);
    /* byte단위로 읽어온 뒤 전부 다 읽으면 load이벤트가 발생된다. */
    reader.onload = function (e) {

        let url = e.target.result;
        console.log(typeof(url));
        // console.log(url);
        // 이미지 파일인지 아닌지 검사하여 이미지 파일이 아닐 경우 원래 attach.png 이미지로 변경

        if (url.includes("image")) { /* 브라우저 콘솔창에 보면 image의 경로가 있다 거기서 includes("image") 이미지라는 문자열이 있으면 */
            thumbnail.style.backgroundImage = "url('" + url + "')"; /* thumbnail의 이미지를 바꾸고 */
        } else {
            thumbnail.style.backgroundImage = "url('img/attach.png')"; /* 이미지라는 문자열이 없으면 이미지가 아니기때문에 attach이미지로 바꾼다. */
        }
    }
});