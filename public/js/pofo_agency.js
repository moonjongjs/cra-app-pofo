(function($){
   
    var Agency = {
        init: function(){   //메서드(함수)
            this.parallax();
            this.header();
            this.section1();
            this.section2();
            this.section3();
            this.section4();
            this.section5();
            this.section6();
            this.section7();
            this.section8();
            this.section9();
            this.section10();
            this.footer();
        },
        parallax: function(){

            // 객체화 : 패럴럭스의 모든 섹션에서 발생되는 변수 충돌 피하기 위해서
            const scrollEvent = {
                init: function(){
                    this.header();
                    this.section2();
                    this.section3();
                    this.section4();
                },
                header: function(){

                    // 스크롤이벤트
                    // 현재스크롤값(newScroll) newScr
                    // 이전스크롤값(oldScroll) oldScr
                    // 방향을 판단
                    let newScr = $(window).scrollTop();  //위에 배치
                    let oldScr = newScr;                 //아래에 배치
                    let result = '';

                    $(window).scroll(function(){
                        newScr = $(window).scrollTop();
                            // 스크롤 값 비교
                            // console.log('newScr:' + newScr, '  oldScr:' + oldScr );
                            result = (newScr-oldScr) > 0 ? 'DOWN' : 'UP'; //내려가면 DOWN 리턴, 올라가면 UP 리턴
                            if(result=="DOWN"){
                                // console.log('스크롤이 아래로 내려가고 있다. 그래서 헤더영역을 위로 올려서 숨겨라!!!');
                                $('#header').removeClass('addParallaxDown72');
                                $('#header').removeClass('addParallaxDown60');
                                $('#header').addClass('addParallaxUp');
                            }
                            if(result=="UP"){
                                // console.log('스크롤이 위로 올라가고 있다. 그러니까 헤더영역을 아래로 내려서 보여라!!!');
                                $('#header').removeClass('addParallaxUp');
                                $('#header').removeClass('addParallaxDown72');
                                $('#header').addClass('addParallaxDown60');
                                if($(window).scrollTop()==0){
                                    $('#header').removeClass('addParallaxDown60');
                                    $('#header').addClass('addParallaxDown72');
                                }
                            }
                        oldScr = newScr;
                    });
                },
                section2: function(){

                    //타이틀 누구 .title  맨위에서 타이틀까지의 간격(offset().top)  스크롤 탑값 .scrollTop() 구하기
                    // console.log(' $(\'.title\').offset().top :  ',  $('#section2 .title').offset().top );
                    // console.log(' $(window).height() :  ',  $('#section2 .title').offset().top - $(window).height() );
                    //타이틀 탑값 위치를 창높이 만큼 빼주고 미리 애니메이션이 수행 되도록 계산

                    let titT = $('#section2 .title').offset().top;
                    let winH = $(window).height();
                    let titTop = titT - winH; //윈도우의 스크롤 탑값이 여기에 도달하면(if ~ then) 애니메이션 구현

                    //윈도우.스크롤 이벤트 scroll(); 메서드 : 스크롤값이 발생이 되어야 구현된다.
                    $(window).scroll(function(){
                        // console.log('$(window).scrollTop() 스크롤 탑값 : ', $(window).scrollTop() );
                        if( $(window).scrollTop() > titTop ){ //스크롤 탑값이 130px 이상이면  구현해라 애니메이션 addClass
                            //섹션2 선택자에 클래스를 추가해라 addClass #section2.addParallax
                            $('#section2').addClass('addParallax');
                        }
                        if( $(window).scrollTop() == 0 ){ //맨위 스크롤 탑값이 0이면 추가된 클래스 삭제
                            //섹션2 선택자에 클래스를 추가해라 addClass #section2.addParallax
                            $('#section2').removeClass('addParallax');
                        }
                    });


                },
                section3: function(){

                    const titT = $('#section3 .title').offset().top;
                    let winH = $(window).height();
                    let titTop = titT - winH; 

                    $(window).scroll(function(){
                        if( $(window).scrollTop() > titTop ){
                            $('#section3').addClass('addParallax');
                        }
                        if( $(window).scrollTop() == 0 ){
                            $('#section3').removeClass('addParallax');
                        }
                    });

                },
                section4: function(){
                    const section4 = $('#section4');
                    const titT = $('#section4 .title').offset().top;
                    let winH = $(window).height();
                    let titTop = titT - winH; 

                    $(window).scroll(function(){
                        if( $(window).scrollTop() > titTop ){
                            section4.addClass('addParallax');
                        }
                        if( $(window).scrollTop() == 0 ){
                            section4.removeClass('addParallax');
                        }
                    });
                }
            }


            scrollEvent.init();



        },
        header: function(){

            const container = $('#header .container');
            const mainBtn   = $('#header .main-btn');
            const subBtn    = $('#header .sub-btn');
            const sub       = $('#header .sub');
            const subSub    = $('#header .sub-sub');

                    //메인버튼
                    mainBtn.on({
                        mouseenter: function(){
                            sub.stop().fadeOut(0);
                            $(this).next().stop().fadeIn(300);
                            mainBtn.removeClass('addDeco'); //이전에 추가된 클래스 삭제
                            $(this).addClass('addDeco');
                        }
                    });

                    //서브버튼
                    subBtn.on({
                        mouseenter: function(){
                            subSub.stop().fadeOut(0);
                            $(this).next().stop().fadeIn(300);
                        }
                    });

                    //마우스가 헤더안에 컨테이너 영역 범위를 벗어나면(떠나면) mouseleave
                    //어디를 - 헤더안에 컨테이너 선택자
                    //그러면 모든 서브메뉴가 부드럽게 사라진다.
                    container.on({
                        mouseleave: function(){
                            sub.stop().fadeOut(300);
                            subSub.stop().fadeOut(300);
                            mainBtn.removeClass('addDeco');
                        }
                    });


        },
        section1: function(){

            const slideWrap = $('.slide-wrap');
            const slideContainer = $('.slide-container');
            let cnt = 0;
            let setId = 0;
            let setId2 = 0;
            let swipeStrt = null;
            let swipeEnd = null;
            let count = 0;
            
            let dragStart = null; //슬라이드 마지막이 처음에서 왼쪽으로 이동된 상태 값을 빼주고 시작
            let dragEnd = null;
            let mouseDown = null;  //반드시 마우스가 다온된 상태를 판단 다운이면 true, 업이면 false;


                  //1. 메인슬라이드함수
                  function mainSlide(){
                    // slideWrap.stop().animate({left:(-100*cnt) + '%'});
                    slideWrap.stop().animate({left:(-1903*cnt)}, 600, 'easeInOutExpo', function(){
                        if(cnt>2){cnt=0}  //다음슬라이드 롤링
                        if(cnt<0){cnt=2}  //이전슬라이드 롤링
                        slideWrap.stop().animate({left:(-1903*cnt)}, 0);
                    });
                  }
                  
                  //2. 다음카운트함수
                  function nextCount(){
                      cnt++;
                      mainSlide();
                  }
                  //2. 이전카운트함수
                  function preveCount(){
                      cnt--;
                      mainSlide();
                  }

                  //3. 자동타이머함수
                  function autoTimer(){
                    setId = setInterval(nextCount, 3000); //함수호출하고 3초 후에 실행
                    // console.log('setId ',  setId );
                  }

                  autoTimer();

                  //4. 마우스 터치 스와이프
                  slideContainer.on({
                      mousedown: function(event){
                        // 터치스와이프 시작 포지션
                        swipeStrt = event.clientX;
                        dragStart = event.clientX - slideWrap.offset().left - 1903;
                        mouseDown = true; //드래그 시작임을 표시
                        timerCount(); //터치시작하면 타이머 카운트 실행
                      },
                      mouseup: function(event){
                        swipeEnd = event.clientX;
                        mouseDown = false; //드래그 끝임을 표시
                        if(swipeStrt-swipeEnd > 0 ){ //다음 슬라이드
                            nextCount();
                        }
                        if(swipeStrt-swipeEnd < 0 ){ //이전 슬라이드
                            preveCount();
                        }
                      },  //mouseup 끝
                      mousemove: function(event){  //마우스 무브
                        // console.log( event );
                        //반드시 마우스를 다운한 상태아니면 종료(리턴) 시켜라
                        // if(mouseDown != true){
                        // if(mouseDown == null){ 초기값을 null 지정해야한다.
                        // if(mouseDown == false){ 초기값을 false 지정해야한다.
                        if(!mouseDown){  //true가 아니면
                            return;
                        }
                        dragEnd = event.clientX; //마우스가 움직이면 계속 드래그된다.
                        //이동거리는 = dragEnd - dragStart;
                        slideWrap.css({left: dragEnd - dragStart })
                      },
                      mouseleave: function(event) {
                        if(!mouseDown){return}
                        swipeEnd = event.clientX;
                        mouseDown = false; //드래그 끝임을 표시
                        if(swipeStrt-swipeEnd > 0 ){ //다음 슬라이드
                            nextCount();
                        }
                        if(swipeStrt-swipeEnd < 0 ){ //이전 슬라이드
                            preveCount();
                        }
                      }
                  });

                    //4-2. 타이머를 컨트롤 타이머를 만들어서 5초동안 터치가 없으면 다시 
                    //     슬라이드 자동타이머 재생
                    // 타이머카운트함수 : 마우스 터치시에 슬라이드 정지시키고 
                    //                   카운트 동작 5초간 터치가 없으면 다시 
                    //                   다음 슬라이드 자동타이머 동작알고리즘
                    function timerCount(){  
                        clearInterval(setId);
                        clearInterval(setId2);
                        count=0; // 초기화 다시 카운트                     
                        setId2 = setInterval(function(){
                            count++;  //증가변수는 반드시 초기값 설정
                            if(count>5){ //5초간 터치가 없으면 
                                nextCount();  //다음슬랑드 호출 실행 즉시
                                autoTimer();  //자동타이머 딱한번 호출 3초후 무한 반복
                                clearInterval(setId2);
                            }
                        }, 1000); //자동타이머가 중지되면 카운트 1초에 1회씩 
                    }
                    
                  //5. 마우스 드래그 앤 드롭
                  //mousemove
                  
                  //6. 반응형 모바일 손가락 핑거 드래그 앤 드롭(반응형)
                  //   마우스 인식 못함. 동작안함.
                  // 반응형 진행하고 폴리필!!!  touch Event 추가 
                  // touchstart(mousedown) /  touchend(mouseup) / touchmove(mousemove)
                  slideContainer.on({
                      touchstart: function(event){
                        // 터치스와이프 시작 포지션
                        swipeStrt = event.originalEvent.touches[0].clientX;
                        dragStart = event.originalEvent.touches[0].clientX - slideWrap.offset().left - 1903;
                        mouseDown = true; //드래그 시작임을 표시
                        timerCount(); //터치시작하면 타이머 카운트 실행
                      },
                      touchend: function(event){
                        swipeEnd = event.originalEvent.changedTouches[0].clientX;
                        mouseDown = false; //드래그 끝임을 표시
                        if(swipeStrt-swipeEnd > 0 ){ //다음 슬라이드
                            nextCount();
                        }
                        if(swipeStrt-swipeEnd < 0 ){ //이전 슬라이드
                            preveCount();
                        }
                      },
                      touchmove: function(event){
                        if(!mouseDown){  //true가 아니면
                            return;
                        }
                        dragEnd = event.originalEvent.touches[0].clientX; //마우스가 움직이면 계속 드래그된다.
                        //이동거리는 = dragEnd - dragStart;
                        slideWrap.css({left: dragEnd - dragStart })
                      }
                  });


        },
        section2: function(){ //원페이지 -  페럴럭스 마우스 스크롤링 이벤트 애니메이션


        },
        section3: function(){


        },
        section4: function(){
            let no = 0; 



            //each() 메서드 버튼 6개를 배열처리 반복문으로 구현
            // $('.gallery-btn').each(function(index){
            //     $('.gallery-btn').eq(index).on({
            //         click: function(){
            //             no=index; //0 1 2 3 4 5 클릭한 번호 저장
            //             gallelry();
            //         }
            //     });
            // });

            $('.gallery-btn').each(function(index){
                $(this).on({
                    click: function(){
                        no=index; //0 1 2 3 4 5 클릭한 번호 저장
                        gallelry();
                    }
                });
            });


            //속성(변수)==멤버변수==필드(프로퍼티스 Properties): 값(밸류 Value)
            //속성에 펑션 function 붙으면 : 메서드라고 말한다.
            //함수function (메서드 Method)는 
            //명령어의 집합(프로그램)을 한번 호출 실행하는 그룹(명령어의 수많은 묶음)
            function gallelry(){
                //초기화
                $('.gallelry li').eq(0).show().animate({top:1903/4*0.8125*0, left:1903/4*0}, 0);
                $('.gallelry li').eq(1).show().animate({top:1903/4*0.8125*0, left:1903/4*1}, 0);                   
                $('.gallelry li').eq(2).show().animate({top:1903/4*0.8125*0, left:1903/4*2}, 0);
                $('.gallelry li').eq(3).show().animate({top:1903/4*0.8125*0, left:1903/4*3}, 0);

                $('.gallelry li').eq(4).show().animate({top:1903/4*0.8125*1, left:1903/4*0}, 0);
                $('.gallelry li').eq(5).show().animate({top:1903/4*0.8125*1, left:1903/4*1}, 0);
                $('.gallelry li').eq(6).show().animate({top:1903/4*0.8125*1, left:1903/4*2}, 0);
                $('.gallelry li').eq(7).show().animate({top:1903/4*0.8125*1, left:1903/4*3}, 0);


                if(no==0){ //버튼0
                    $('.gallelry li').eq(0).show().animate({top:1903/4*0.8125*0, left:1903/4*0}, 300);
                    $('.gallelry li').eq(1).show().animate({top:1903/4*0.8125*0, left:1903/4*1}, 300);                   
                    $('.gallelry li').eq(2).show().animate({top:1903/4*0.8125*0, left:1903/4*2}, 300);
                    $('.gallelry li').eq(3).show().animate({top:1903/4*0.8125*0, left:1903/4*3}, 300);

                    $('.gallelry li').eq(4).show().animate({top:1903/4*0.8125*1, left:1903/4*0}, 300);
                    $('.gallelry li').eq(5).show().animate({top:1903/4*0.8125*1, left:1903/4*1}, 300);
                    $('.gallelry li').eq(6).show().animate({top:1903/4*0.8125*1, left:1903/4*2}, 300);
                    $('.gallelry li').eq(7).show().animate({top:1903/4*0.8125*1, left:1903/4*3}, 300);
                }
                else if(no==1){//버튼2
                    $('.gallelry li').eq(0).hide();
                    $('.gallelry li').eq(2).hide();
                    $('.gallelry li').eq(7).hide();

                    $('.gallelry li').eq(1).show().animate({top:1903/4*0.8125*0, left:1903/4*0}, 300);
                    $('.gallelry li').eq(3).show().animate({top:1903/4*0.8125*0, left:1903/4*1}, 300);                   
                    $('.gallelry li').eq(4).show().animate({top:1903/4*0.8125*0, left:1903/4*2}, 300);
                    $('.gallelry li').eq(5).show().animate({top:1903/4*0.8125*0, left:1903/4*3}, 300);

                    $('.gallelry li').eq(6).show().animate({top:1903/4*0.8125*1, left:1903/4*0}, 300);
                }
                else if(no==2){//버튼2
                    $('.gallelry li').eq(0).hide();
                    $('.gallelry li').eq(7).hide();

                    $('.gallelry li').eq(1).show().animate({top:1903/4*0.8125*0, left:1903/4*0}, 300);
                    $('.gallelry li').eq(2).show().animate({top:1903/4*0.8125*0, left:1903/4*1}, 300);                   
                    $('.gallelry li').eq(3).show().animate({top:1903/4*0.8125*0, left:1903/4*2}, 300);
                    $('.gallelry li').eq(4).show().animate({top:1903/4*0.8125*0, left:1903/4*3}, 300);

                    $('.gallelry li').eq(5).show().animate({top:1903/4*0.8125*1, left:1903/4*0}, 300);
                    $('.gallelry li').eq(6).show().animate({top:1903/4*0.8125*1, left:1903/4*1}, 300);
                }
                else if(no==3){//버튼3
                    $('.gallelry li').eq(1).hide();
                    $('.gallelry li').eq(3).hide();
                    $('.gallelry li').eq(6).hide();
                    $('.gallelry li').eq(7).hide();

                    $('.gallelry li').eq(0).show().animate({top:1903/4*0.8125*0, left:1903/4*0}, 300);
                    $('.gallelry li').eq(2).show().animate({top:1903/4*0.8125*0, left:1903/4*1}, 300);                   
                    $('.gallelry li').eq(4).show().animate({top:1903/4*0.8125*0, left:1903/4*2}, 300);
                    $('.gallelry li').eq(5).show().animate({top:1903/4*0.8125*0, left:1903/4*3}, 300);
                }
                else if(no==4){//버튼4
                    $('.gallelry li').eq(1).hide();
                    $('.gallelry li').eq(2).hide();
                    $('.gallelry li').eq(3).hide();
                    $('.gallelry li').eq(4).hide();
                    $('.gallelry li').eq(5).hide();
                    $('.gallelry li').eq(6).hide();

                    $('.gallelry li').eq(0).show().animate({top:1903/4*0.8125*0, left:1903/4*0}, 300);
                    $('.gallelry li').eq(7).show().animate({top:1903/4*0.8125*0, left:1903/4*1}, 300);   
                }
                else if(no==5){//버튼5
                    $('.gallelry li').eq(0).hide();
                    $('.gallelry li').eq(2).hide();
                    $('.gallelry li').eq(4).hide();
                    $('.gallelry li').eq(5).hide();
                    $('.gallelry li').eq(7).hide();

                    $('.gallelry li').eq(1).show().animate({top:1903/4*0.8125*0, left:1903/4*0}, 300);
                    $('.gallelry li').eq(3).show().animate({top:1903/4*0.8125*0, left:1903/4*1}, 300);                   
                    $('.gallelry li').eq(6).show().animate({top:1903/4*0.8125*0, left:1903/4*2}, 300);            
                }
            }


        },
        section5: function(){
            //svg 애니메이션 선택자
            const circleAni = $('.circleAni');
            let   objLength = []; //4개의 길이를 각각 저장
            let   per       = [.9, .75, .9, .62];


            //개체(Object) 배열 반열 처리
            $.each(circleAni, function(idx, obj){
                //서클원형의 전체 길이를 산출
                objLength[idx] = obj.getTotalLength();
                //console.log(`objLength[${idx}] : ${objLength[idx]}`);
                // obj.style.strokeDasharray = objLength[idx];
                // obj.style.strokeDashoffset = objLength[idx];

                //내일 배열처리 
                //백분율 계산처리
                //반복문 처리 애니메이션
                //시간을 이용 애니메이션 제작
                



            });


            //카운트
            //3초간 자동 증가
            let cnt = [0,0,0,0];
            let setId = [null,null,null,null];
            let time = [33.3333,40.0000,33.3333,48.3871];
            let num = [90,75,90,62];

            function countfn(n){
                cnt[n]++;
                if(cnt[n]>num[n]){
                    clearInterval(setId[n]);
                }
                else{
                    $('.number').eq(n).html(`<i>${cnt[n]}%<i>`);
                }
            }
            
            for(let i=0; i<4; i++){
                setId[i] = setInterval(function(){
                    countfn(i);
                }, time[i]);
            }    
             

        },
        section6: function(){


        },
        section7: function(){


        },
        section8: function(){


        },
        section9: function(){


        },
        section10: function(){


        },
        footer: function(){

            
        }
    }; //객체

    Agency.init(); 


})(jQuery);