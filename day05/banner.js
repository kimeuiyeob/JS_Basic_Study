    //========================팝업 배너 -> 따로 효과는 없고 2초에 한번씩 이미지를 가져오는거라고 생각!=========================

    // const div = document.querySelector("div.banner"); /* banner안에는 6개의 이미지가 있다 , 그걸 div변수에 담는다. */
    // var count = 0;

    // setInterval(function(){ /* setInterval함수는 예약함수라고 생각 -> 2초에 한번씩 실행 */
    //     count ++; 
    //     count = count == 6 ? 0 : count; /* 6번실행에서 카운트가 6이면 0을 카운트에 담아줘서 0부터 다시 실행, 6이아니면 그대로 카운트 실행 */
    //     div.style.transform = "translate(-" + 90 * count + "vw)"; 
    //     /* 사진들어있는 변수 div가 transform으로 인하여 동작을 구현하고, 카운트가 올라갈때마다 90을 곱해주면 사진이 오른쪽에서 계속 왼쪽으로 정렬된다.  */
    // }, 2000);

    //===================================자동으로 슬라이드 넘어가는 함수================================================

    /* 첫화면에서는 첫번째 배너가 보이지만 이 함수가 실행되는 순간 두번째 배너로 넘어가는 것이다. */
    function autoSlide() { /* 자동으로 슬라이드 됨 */

    /* 배너가 이동해야 할때에는 0.5초 걸림 */
        banner.style.transition = "transform 0.5s" /* 0.5초를 줘서 사진이 바로 바뀌는게 아니라 슬라이드로 바뀌는 느낌을 준것 */
        // 마지막 슬라이드일 때
        // 6번 뒤에 1번 배치시킨다.
        // 6번에서 1번으로 슬라이드 진행
        // 0s를 줘서 원래 1번 위치로 이동(슬라이드 효과는 안보임)
        count++;
        if (count == 6) { /* 카운트가 6이면 여기 안에 실행 */
            buttons[count - 1].style.backgroundColor = "#f0f0f0"; /* 버튼 5일때 색깔을 원래대로 색으로 바까준다. */
            banner.style.transform = "translate(-" + 90 * (count + 1) + "vw)"; /* 사진 7로 이동시킨다고 생각하자 */
            setTimeout(function () { /* 코드를 바로 실행하지않고 일정 시간 뒤에 실행시킬때 setTimeout() 함수 사용 */
                banner.style.transition = "transform 0s"
                banner.style.transform = "translate(-90vw)";
            }, 500);
            count = 0;
            buttons[count].style.backgroundColor = "black";
        } else { /* 위에 카운트가 6이아니면 여기를 실행한다. */
        /* 처음에는 첫번째 배너가 선택되어 있기 때문에 다음으로 넘어가면서 이전 배너부분의 버튼색을 돌려준다. */
            buttons[count - 1].style.backgroundColor = "#f0f0f0"; /* 버튼 카운트가 올라갈때마다 색깔 칠해져있는게 사라져야되기때문에 -1로 다시 원래 색으로돌린다 */
            /* 이번에 보여질 배너부분의 버특 색을 검은색으로 돌려준다. */
            buttons[count].style.backgroundColor = "black"; /* 카운트 올라갈때마다 버튼색깔이 검정색으로 바뀐다. */
            /* 왼쪽으로 -90 * (count + 1) 만큼 이동한다 */
            /* count +! 한이유는 가장앞에 6번째 배너부터 시작되기 때문이다. */
            banner.style.transform = "translate(-" + 90 * (count + 1) + "vw)"; /* 화면에서 사진을 카운트개수 * 90vw만큼 이동시켜주는데 - 가붙으니까 왼쪽으로 이동 */
        }
        /* 초기화된 버튼객체를 temp에 담는다. */
        temp = buttons[count]; /* 버튼 카운트 올라가는거를 temp변수에 담는다. */
    }

    //==========================================무한 반복==========================================================
    const banner = document.querySelector("div.banner"); /* 사진들 banner변수에다 담아준다. */
    const buttons = document.querySelectorAll("div.buttons button"); /* 버튼들 buttons 변수에 담아준다. */

    var count = 0, temp = buttons[count];
    let firstDiv = document.createElement("div"); /* 맨처음과 맨끝에 넣을 div생성 */
    let lastDiv = document.createElement("div");

    firstDiv.innerHTML = `<img src="banner/001.png">`; /* firstDiv에다가 첫번째 사진 담아준다. */
    banner.appendChild(firstDiv); /* appendChild라는게 banner 즉 여섯개 사진들 맨 마지막에 첫번째 사진을 추가한다. */

    lastDiv.innerHTML = `<img src="banner/006.png">`; /* lastDiv에다가 여섯번째 사진 담아준다. */
    banner.insertBefore(lastDiv, document.querySelector("div.banner div")); /* insertBefore 라는게 banner 즉 여섯개 사진들 맨 앞에 여섯번째 사진을 추가한다. */
    /* 이렇게 되면 6개의 사진만 있는게 아니라 총 8개의 사진이 있다 -> 6 , 1, 2, 3, 4, 5, 6, 1 이런식으로 사진들이 있다. */

    /* 첫번째 버튼이 무조건 첫번째 배너이기 때문에 검은색 칠하고 시작 */
    buttons[count].style.backgroundColor = "black"; /* 카운트 돌때마다 button 색깔을 검정으로 만든다. */

    /* 첫번째 배너는 6번이니까 왼쪽으로 한번 밀어서 1번이 보이게함 */
    banner.style.transform = "translate(-90vw)"; /* 사진들이 -90vw씩 오른쪽에서 왼쪽으로 이동한다고 생각하자! */

    /* 4초마다 이동되는 함수 */
    var inter = setInterval(autoSlide, 4000); /* 위에 autoSlide함수가 4초에 한번씩 실행되고 , 그걸 inter변수에 담아준다. */

  //==========================================각 버튼에 이벤트 넣기==========================================================

    var numberButtonCheck = true; /* 버튼을 광클하지 못하게 막아주는 플래그 */

    /* 각 버튼에 click이벤트를 걸어줌 */
    buttons.forEach((v, i, btns) => { /* 각버튼마다 이벤트를 넣어야하기때문 forEach문 사용 (v 값, i인덱스 , btns 배열) 이라고 생각하자! */
        btns[i].addEventListener("click", function () { /* 이러면 buttons 각각 click이라는 이벤트를 넣어주고 클릭시 함수를 실행할수있다. */
        /* 아래의 방법으로 인해 0s로 변할수 있기 때문에 무조건 0.5로 설정하고 시작 */
            banner.style.transition = "transform 0.5s" /* 사진들이 0.5초로 바뀐다. 이래야 슬라이드 느낌적인 느낌 */
            /* 0.5s초가 지나고 나서 클릭했거나 처음 클릭하거나 */
            if (numberButtonCheck) { /* 위에 true로 받았으니까 일단 아래 실행 */ /* 누르자 마자 바로 false */
                numberButtonCheck = false;
                clearInterval(inter); /* autoSlide 함수를 없애는것 */ /* 동시에 돌아가면 안됨 */
                count = i; /* 클릭한 버튼의 인덱스를 배너의 번호로 설정 */
                /* 이전에 적용된 버튼의 배경을 원상복구 */
                temp.style.backgroundColor = "#f0f0f0"; /* temp는 버튼카운트가 있고 그래서 카운트 올라갈때마다 색깔을 원래대로 */
                /* 클릭한 버튼의 배경을 검정색 */
                buttons[count].style.backgroundColor = "black"; /* 이거는 카운트 올라갈때마다 버튼 색깔을 검정으로 */
                /* 클릭한 버튼의 인덱스 번호를 통해 배너 번호로 이동 */
                banner.style.transform = "translate(-" + 90 * (count + 1) + "vw)";
                temp = buttons[count]; /* 지금 선택된 버튼 객체 담아주기 */
                inter = setInterval(autoSlide, 4000); /* autoSilde함수를 다시 실행 */ /* 버튼 클릭다 했으니까 autoSlide다시 작동 */
                /* 클릭하고 나서 할거 다하고 0.5s후에 플래그를 true로 변경 -> 0.5s안에는 클릭 못하게 막아주기 */
                setTimeout(function () { /* setTimeout()을 이용해서 0.5초마다 numberButtonCheck를 true로 바까준다. */
                    numberButtonCheck = true;
                }, 500);
            }
        });
    });

 //==========================================이전 , 다음 버튼 구현==========================================================

    const arrows = document.querySelectorAll("div.arrow"); /* 이게 이전, 다음 버튼 요소들을 arrows변수에 담아준다. */
    var arrowButtonCheck = true;

    arrows.forEach(arrow => { /* 이것두 두개의 버튼에 이벤트를 걸어줘야하기 때문에 forEach문을 사용 */
        arrow.addEventListener("click", function () { /* addEventListener을 이용해서 click시 함수 실행 */

            if (arrowButtonCheck) { /* 전역에다 arrowButonCheck를 트루로 지정해서 일단 이안으로 들어온다. */
                arrowButtonCheck = false; /* 그리고 true를 false로 바까준다. */
                clearInterval(inter);/* autoSlide함수를 없애준다. */
                banner.style.transition = "transform 0.5s"
                let arrowType = arrow.classList[2];
                 /* classList[2]이게 class ="arrow left prev"이거라면 arrow는 classList[0], left는 classList[1], prev는 classList[2] 그래서 "prev"가 arrowType에 담기게된다.*/
                if (arrowType == 'prev') { /* 만약 prev와 같다면 이전버튼을 클릭한거니까 */
                    count--; /* --로 감소해서 전으로 돌아간다. */
                    if (count == -1) { /* 만약 count가 -1이면 6번째 사진이 나온다고 생각하면 된다. */
                        banner.style.transform = "translate(0vw)";
                        setTimeout(function () {
                            banner.style.transition = "transform 0s"
                            banner.style.transform = "translate(-540vw)";
                        }, 500);
                        count = 5;
                    } else { /* count가 0이상이면 그냥 정상대로 흘러가면된다. */
                        banner.style.transform = "translate(-" + 90 * (count + 1) + "vw)";
                    }
                } else { /* 만약 prev와 다르다면 다음버튼밖에 없으니까 다음버튼을 실행 */
                    count++;
                    if (count == 6) { /* 만약 카운트가 6이면 */
                        banner.style.transform = "translate(-" + 90 * (count + 1) + "vw)"; /* 사진 7로 넘어가는데 (사진1) */
                        setTimeout(function () { 
                            banner.style.transition = "transform 0s" 
                            banner.style.transform = "translate(-90vw)";
                        }, 500);
                        count = 0; /* 그리고 카운트를 0으로 되돌려 1번째 사진으로 돌아간다. */
                    } else {
                        banner.style.transform = "translate(-" + 90 * (count + 1) + "vw)"; /* 카운트가 6이아니면 그냥 정상대로 흘러간다. */
                    }
                }

                temp.style.backgroundColor = "#f0f0f0"; /* 버튼 카운트마다 색깔을 원래 색으로 바뀐다. */
                temp = buttons[count];
                buttons[count].style.backgroundColor = "black"; /* 버튼 카운트마다 색깔이 검정 색으로 바뀐다. */
                inter = setInterval(autoSlide, 4000); /* autoSlide 함수를 4초마다 실행시킨다. */
                setTimeout(function () { /* 0.5초마다 arrowButtonCheck을 true로 해준다. */
                    arrowButtonCheck = true;
                }, 500);
            }
        });
    });
