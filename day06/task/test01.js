let tempTr;
let tempText;

function confirm(){ 
    
    const input = document.getElementById("input").value; 
    const trs = document.querySelectorAll("tbody tr"); 
    let check = false; 

    if(tempTr){ 
        tempTr.style.background = "#fff"; 
        tempTr.firstElementChild.innerHTML = tempText;
    }

    trs.forEach(tr => {
        let td = tr.firstElementChild; 
        if(td.innerHTML == input) { 
        
            tempTr = tr; 
            tempText = td.innerHTML;

            tr.style.background = "#ef5350";
            td.innerHTML = "★" + input; 
            check = true; 
        }
    });

    if(!check){ 
        alert("다시 시도해주세요.");
    }
}