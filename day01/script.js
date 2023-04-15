// script_file.html
// url.html

function change(obj) {
    var status = obj.classList[1];
    var src = status == "on" ? "images/present.png" : "images/santa.png";

    setAttributes(obj, src, status);
}

function setAttributes(obj, src, status) {
    obj.src = src;
    status == "on" ? obj.classList.replace("on", "off") : obj.classList.replace("off", "on");
}