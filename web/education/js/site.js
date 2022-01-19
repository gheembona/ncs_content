/**
  * @file	: common.css
  * @author	: [story] Yangkoon
  * @brief	: 사이트 기본 jquery 모션
**/


//콘텐츠 슬라이드 유형
$(document).ready(function(){
    //기본
    $('.slideBase').bxSlider({
        controls: false,
        auto: true,
        pause: 4000
    });
    
    ////메인 분야별 교육·훈련과정 설계현황
    $('.circleMain_slide').bxSlider({
        minSlides: 4,
        maxSlides: 4,
        slideWidth: 180,
        slideMargin: 0,
        auto: false,
        pause: 4000
    });
    
    ////메인 우수사례 써머리
    $('.boxMain_slide').bxSlider({
        minSlides: 3,
        maxSlides: 3,
        slideWidth: 279,
        slideMargin: 10,
        auto: false,
        pause: 3000
    });
});

// 우수사례 활용능력단위 버튼 텍스트 수정
$(document).ready(function(){
    var btn = $('.slideUp_inset .slideDown_btn');
    var textSet = btn.children('b');
    btn.on('click',function(){
        if(textSet.text() == '활용능력단위 보기') {
            textSet.text('활용능력단위 닫기');
        }
        else {
            textSet.text('활용능력단위 보기');
        }
    });
});


// 교육과정설계, 훈련과정설계 docu word 안내 말풍선
$(document).ready(function(){
    $('.docuword_down a').on('mouseenter',function(){
        var open =  $(this).next('p');
        if(open.css("display") == "none"){
            open.fadeIn(300);
            $(this).addClass('On');
        }else{
            open.fadeOut(200);
            $(this).removeClass('On');
        }
    });
});

$(document).ready(function(){
    $('.docuword_down a').on('mouseenter',function(){
        var open = $(this).next('p');
        open.stop().fadeIn(200);
    }).on('mouseleave focus',function(){
        var open = $(this).next('p');
        open.stop().fadeOut(100);
    });
});

// 훈련기준검색 검색 결과 활성화
$(document).ready(function(){    
    $('.trainingSearch_pop .view_btn, .trainingSearch_pop .viewBtn').on('click',function(){
        $('.trainingSearch_pop').stop().fadeOut(0);
        $('.searchView_wrap').stop().fadeIn(200);
    });
    $('.searchView_wrap .back_btn').on('click',function(){
        $('.searchView_wrap').stop().fadeOut(0);
        $('.trainingSearch_pop').stop().fadeIn(200);
    });
});