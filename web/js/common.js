/**
  * @file	: common.css
  * @author	: [story] Yangkoon
  * @brief	: 사이트 기본 jquery 모션
**/

// .ui-datepicker-trigger css 오류 수정(어디는 부모에 DIV 있고 어디는 없고 난리임)
/*
$(window).load(function (){
	$("img.ui-datepicker-trigger").each(function (){
		if($(this).parent("div").hasClass("dateinput_box")){
			$(this).css({
				'position' : 'absolute', 
				'top' : '8px', 
				'right' : '10px'
			});
		}
	});
});
*/

// 상단 주 메뉴
$(document).ready(function(){
    $('.top_menu > ul > li').on('mouseenter',function(){
    if($(this).find("li").length > 0){
        $('.top_depth2_bg').stop().slideDown(200);
    }
        
    }).on('mouseleave', function(){
        $('.top_depth2_bg').stop().slideUp(100);
    });
    
    $('.top_menu > ul > li').on('mouseenter',function(){
        var open = $(this).children('ul');
        open.stop().fadeIn(200);
    }).on('mouseleave focus',function(){
        var open = $(this).children('ul');
        open.stop().fadeOut(100);
    });
});

function fn_openTutorial(url){
	window.open(url, 'tutorialPop', 'width=1210, height=845, top=10, left=300, fullscreen=no, menubar=no, status=no, toolbar=no, titlebar=yes, location=no, scrollbar=yes');
}

// url 매칭 class="On" 부여 : 파일명과 a테그 매칭 후 a테그 부모 li테그에 class="On" 부여
$(document).ready(function (){
    var find_ul = new Array(".getHover", "");
    for(i=0;i<find_ul.length;i++){
        $(find_ul[i]).find("a").each(function(index){
            if($(location).attr('href').indexOf($(this).attr("href")) > -1){
                $(this).parent("li").addClass("On");
            }
        });
    }
});


// 하위 레벨 li에 class="On"이 있을경우 상위 레벨의 li에 class="On" 주기
$(document).ready(function(){
    var double_depth = new Array("ul.sub_menu", "");
    for(i=0;i<double_depth.length;i++){
        $(double_depth[i]).find("li").each(function(index){
            if($(this).hasClass("On")){
                $(this).parent().parent("li").addClass("On");
            }
        });
    }
});


// 좌측 서브 메뉴
$(document).ready(function(){
    $('.sub_menu > li > a').on('click',function(){
        var open = $(this).parent().children('ul');
        if(open.css("display") == "none"){
            $('.sub_menu > li > ul').stop().slideUp(200);
            open.stop().slideDown(200);
            $(this).css({
                paddingBottom: 0
            });
        }
    });
});

//오브젝트 높이 설정
$(function() {
    var pop_size = function() {
        // 능력단위 변경내역
        $('.changeList_scroll').css({
            height: $(window).height() - 290 + 'px'
        });
    };

    /* */
    $(window).resize(function() {
        pop_size();
    });

    $(document).ready(function() {
        pop_size();
    });
});

// 레이어 팝업띄우기
$(document).ready(function(){
    $('.OpenPop').on('click',function(){
        var PopView = $(this).attr("rel");
        var PopSet = $("#" + PopView).children('.layerPopup_box');
        $('.layerPopup_wrap').fadeOut(300);
        $("#" + PopView).fadeIn(300);
        PopSet.css({
            marginTop: (PopSet.height() * -0.5) - 40 + 'px',
            marginLeft:  (PopSet.width() * -0.5) - 30 + 'px',
            left : 50 + '%',
            top : 50 + '%'
        });
        PopSet.find('.helpPop_con').css({
            maxHeight: PopSet.height() - 80 + 'px'
        });
        PopSet.find('.fullScroll').css({
            maxHeight: PopSet.height() - 85 + 'px'
        });
        PopSet.find('.fullScroll2').css({
            maxHeight: PopSet.height() - 200 + 'px'
        });
        $('body').css({
            overflow: 'hidden'
        });
    });

    $('.layerPopup_bg, .layerPopup_closed, .close_btn').on('click',function(){
        $('.layerPopup_wrap').fadeOut(300);
        $('body').css({
            overflow: 'inherit'
        });
    });
});


//콘텐츠 슬라이드 유형
/*
$(document).ready(function(){
    //상단배너
    $('.top_banner').bxSlider({
        controls: false,
        auto: false,
        pause: 3000
    });
});
*/

// 상단배너 열고 닫기
$(document).ready(function(){
//    $('.head_banner').css('display','none');
    $('.btn_topBanner').on('click',function(){
        var open =  $('.head_banner');
        if(open.css("display") == "none"){
            open.slideDown(300);
            $(this).text('배너존 닫기 -');
        }else{
            open.slideUp(200);
            $(this).text('배너존 열기 +');
        }
    });
});


// 텝메뉴
$(document).ready(function() {    
    // 1depth1
    $(".tabContent_1D1").hide();
    $(".tabContent_1D1:first").show();
    $(".tabBtn_1D1:first").addClass("On");
    $(".tabBtn_1D1").css("cursor","pointer");
    $(".tabBtn_1D1").click(function () {
        $(".tabBtn_1D1").removeClass("On");
        $(this).addClass("On");
        $(".tabContent_1D1").hide();
        var OnTab = $(this).attr("rel");
        $("#" + OnTab).stop().fadeIn(200);
        $("#" + OnTab + "1").stop().fadeIn(200);
    });
    // 1depth2
    $(".tabContent_1D2").hide();
    $(".tabContent_1D2:first").show();
    $(".tabBtn_1D2:first").addClass("On");
    $(".tabBtn_1D2").css("cursor","pointer");
    $(".tabBtn_1D2").click(function () {
        $(".tabBtn_1D2").removeClass("On");
        $(this).addClass("On");
        $(".tabContent_1D2").hide();
        var OnTab = $(this).attr("rel");
        $("#" + OnTab).stop().fadeIn(200);
    });
    // 1depth3
    $(".tabContent_1D3").hide();
    $(".tabContent_1D3:first").show();
    $(".tabBtn_1D3:first").addClass("On");
    $(".tabBtn_1D3").css("cursor","pointer");
    $(".tabBtn_1D3").click(function () {
        $(".tabBtn_1D3").removeClass("On");
        $(this).addClass("On");
        $(".tabContent_1D3").hide();
        var OnTab = $(this).attr("rel");
        $("#" + OnTab).stop().fadeIn(200);
    });
    // 2depth1
    $(".tabContent_2D1").hide();
    $(".tabContent_2D1:first").show();
    $(".tabBtn_2D1:first").addClass("On");
    $(".tabBtn_2D1").css("cursor","pointer");
    $(".tabBtn_2D1").click(function () {
        $(".tabBtn_2D1").removeClass("On");
        $(this).addClass("On");
        $(".tabContent_2D1").hide();
        var OnTab = $(this).attr("rel");
        $("#" + OnTab).stop().fadeIn(200);
    });
    // 2depth2
    $(".tabContent_2D2").hide();
    $(".tabContent_2D2:first").show();
    $(".tabBtn_2D2:first").addClass("On");
    $(".tabBtn_2D2").css("cursor","pointer");
    $(".tabBtn_2D2").click(function () {
        $(".tabBtn_2D2").removeClass("On");
        $(this).addClass("On");
        $(".tabContent_2D2").hide();
        var OnTab = $(this).attr("rel");
        $("#" + OnTab).stop().fadeIn(200);
    });
    // 2depth3
    $(".tabContent_2D3").hide();
    $(".tabContent_2D3:first").show();
    $(".tabBtn_2D3:first").addClass("On");
    $(".tabBtn_2D3").css("cursor","pointer");
    $(".tabBtn_2D3").click(function () {
        $(".tabBtn_2D3").removeClass("On");
        $(this).addClass("On");
        $(".tabContent_2D3").hide();
        var OnTab = $(this).attr("rel");
        $("#" + OnTab).stop().fadeIn(200);
    });
    // 3depth1
    $(".tabContent_3D1").hide();
    $(".tabContent_3D1:first").show();
    $(".tabBtn_3D1:first").addClass("On");
    $(".tabBtn_3D1").css("cursor","pointer");
    $(".tabBtn_3D1").click(function () {
        $(".tabBtn_3D1").removeClass("On");
        $(this).addClass("On");
        $(".tabContent_3D1").hide();
        var OnTab = $(this).attr("rel");
        $("#" + OnTab).stop().fadeIn(200);
        $("#" + OnTab + "1").stop().fadeIn(200);
    });
    // 3depth2
    $(".tabContent_3D2").hide();
    $(".tabContent_3D2:first").show();
    $(".tabBtn_3D2:first").addClass("On");
    $(".tabBtn_3D2").css("cursor","pointer");
    $(".tabBtn_3D2").click(function () {
        $(".tabBtn_3D2").removeClass("On");
        $(this).addClass("On");
        $(".tabContent_3D2").hide();
        var OnTab = $(this).attr("rel");
        $("#" + OnTab).stop().fadeIn(200);
    });
    
    // 3depth4
    $(".tabContent_3D3").hide();
    $(".tabContent_3D3:first").show();
    $(".tabBtn_3D3:first").addClass("On");
    $(".tabBtn_3D3").css("cursor","pointer");
    $(".tabBtn_3D3").click(function () {
        $(".tabBtn_3D3").removeClass("On");
        $(this).addClass("On");
        $(".tabContent_3D3").hide();
        var OnTab = $(this).attr("rel");
        $("#" + OnTab).stop().fadeIn(200);
    });
    
    // 슬라이드 텝메뉴1
    $(".tabSlide_1D1:first").addClass("On");
    $(".tabSlide_con_1D1:first").css("z-index", "999");
    $(".tabSlide_1D1").css("cursor","pointer");
    $(".tabSlide_1D1").click(function () {
        $(".tabSlide_1D1").removeClass("On");
        $(this).addClass("On");
        $(".tabSlide_con_1D1").hide();
        var OnTab = $(this).attr("rel");
        $("#" + OnTab).fadeIn();
    });
    
    // 팝업 텝메뉴 layerPop_ncsS.jsp
    $(".popContent_1D").hide();
    $(".popContent_1D:first").show();
    $(".popBtn_1D:first").addClass("On");
    $(".popBtn_1D").css("cursor","pointer");
    $(".popBtn_1D").click(function () {
        $(".popBtn_1D").removeClass("On");
        $(this).addClass("On");
        $(".popContent_1D").hide();
        var OnTab = $(this).attr("rel");
        $("#" + OnTab).stop().fadeIn(200);
    });
    
    // 팝업 텝메뉴 layerPop_ncsD.jsp
    $(".popContent_2D").hide();
    $(".popContent_2D:first").show();
    $(".popBtn_2D:first").addClass("On");
    $(".popBtn_2D").css("cursor","pointer");
    $(".popBtn_2D").click(function () {
        $(".popBtn_2D").removeClass("On");
        $(this).addClass("On");
        $(".popContent_2D").hide();
        var OnTab = $(this).attr("rel");
        $("#" + OnTab).stop().fadeIn(200);
    });
});


// 스텝별 화면 전환 : NCS및학습모듈 검색 분야별 검색 대분류 중분류 보기 등
$(document).ready(function(){
    var section1btn = $('.Step_area .btn_go1');
    var section2btn = $('.Step_area .btn_go2');
    var section3btn = $('.Step_area .btn_go3');
    
    $('.btn_to2, .btn_to3').hide();
    
    section1btn.on('click',function(){
        $(this).parents('.Step_area').children('.btn_to2').stop().fadeOut(0);
        $(this).parents('.Step_area').children('.btn_to3').stop().fadeOut(0);
        $(this).parents('.Step_area').children('.btn_to1').stop().fadeIn(200);
    });
    
    section2btn.on('click',function(){
        $(this).parents('.Step_area').children('.btn_to1').stop().fadeOut(0);
        $(this).parents('.Step_area').children('.btn_to3').stop().fadeOut(0);
        $(this).parents('.Step_area').children('.btn_to2').stop().fadeIn(200);
    });
    
    section3btn.on('click',function(){
        $(this).parents('.Step_area').children('.btn_to1').stop().fadeOut(0);
        $(this).parents('.Step_area').children('.btn_to2').stop().fadeOut(0);
        $(this).parents('.Step_area').children('.btn_to3').stop().fadeIn(200);
    });
});

// 리스트 슬라이드 단일 오픈
$(document).ready(function(){
    $('.slideList > dt').css('cursor','pointer');
    // $('.slideList > dt:first').addClass('On');
    $('.slideList > dd').css('display','none');
    $('.slideList > dt').on('click',function(){
        $('.slideList > dd').slideUp(200);
        $('.slideList > dt').removeClass('On');
        var open =  $(this).next('dd');
        if(open.css("display") == "none"){
            open.slideDown(300);
            $(this).addClass('On');
        }else{
            open.slideUp(200);
            $(this).removeClass('On');
        }
    });
});


// 동일 부모 내 슬라이드 열고 닫기
$(document).ready(function(){
    $('.slideDown_btn').on('click',function(){
        var open =  $(this).parent().children('.slideDown_area');
        if(open.css("display") == "none"){
            open.slideDown(300);
            $(this).addClass('On');
        }else{
            open.slideUp(200);
            $(this).removeClass('On');
        }
    });
});


// 동일 부모 내 페이드 열고 닫기
$(document).ready(function(){
    $('.fade_btn').on('click',function(){
        var open =  $(this).parent().children('.fade_area');
        if(open.css("display") == "none"){
            open.fadeIn(300);
            $(this).addClass('On');
        }else{
            open.fadeOut(200);
            $(this).removeClass('On');
        }
    });
});


// 자식 영역 슬라이드 열고 닫기
$(document).ready(function(){
    $('.slideShow').on('click',function(){
        var open =  $(this).children('.slideShow_area');
        if(open.css("display") == "none"){
            open.slideDown(300);
        }else{
            open.slideUp(200);
        }
    });
});


// 데이터테이블 내 재데이터 열고 닫기
$(document).ready(function(){
    $('.table_inset_btn').on('click',function(){
        $('.table_inset_con').fadeOut(200);
        $('.table_inset_btn').removeClass('On');
        var open =  $(this).parents('.table_inset_wrap').children('.table_inset_con');
        if(open.css("display") == "none"){
            open.fadeIn(300);
            $(this).addClass('On');
        }else{
            open.fadeOut(200);
            $(this).removeClass('On');
        }
    });
});


// 스크롤 스무스
$(document).ready(function() {
    $('body > .wrap a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 200);
                return false;
            }
        }
    });
});


// 카페 초대하기, 회원 쪽지 보내기
$(document).ready(function(){
    var step1 =  $('.invite_step1');
    var step2 =  $('.invite_step2');
    step2.css('display','none')
    $('.goStep2').on('click',function(){
        step2.stop().fadeIn(200);
        step1.stop().fadeOut(0);
    });
    $('.goStep1').on('click',function(){
        step1.stop().fadeIn(200);
        step2.stop().fadeOut(0);
    });
    $('.layerPopup_bg, .layerPopup_closed, .layerPopup_wrap .closeStep').on('click',function(){
        $('.layerPopup_wrap').fadeOut(300);
        step1.stop().fadeIn(0);
        step2.stop().fadeOut(0);
    });
});


// 카페 회원 이름 클릭시 선택메뉴
$(document).ready(function(){
    $('.btn_name').on('click',function(){
        $('.Member_optionBox').fadeOut(100);
        var open =  $(this).next('.Member_optionBox');
        if(open.css("display") == "none"){
            open.fadeIn(200);
            $(this).addClass('On');
        }else{
            open.fadeOut(100);
            $(this).removeClass('On');
        }
    });
    
    $('.Member_optionBox ul li a').on('click',function(){
        $('.Member_optionBox').fadeOut(100);
        $('btn_name').removeClass('On');
    });
});


// 설문조사 그래프
$(document).ready(function(){
    var grap = new Array(".survey_result", "");
    for(i=0;i<grap.length;i++){
        $(grap[i]).find("dd").each(function(index){
            var barW  = $(this).find('.bar');
			var widthP = $(this).find('.stick100').next('span').text();
		    barW.css('width',widthP);  
        });
    }
});


// 퀵메뉴
$(document).ready(function() {
	
	var offset = 0;
	var position = 0;
		
    $(window).scroll(function() {
    	if($(".head_banner").is(":visible")) {
    		offset = -120;
    		
    	} else {
    		offset = 0;
    	}
    	
    	if($(window).scrollTop() + offset <= 0) {
    		position = 0;
    		
    	} else {
    		position = $(window).scrollTop() + offset
    	}
    	
    	$(".quick_menu").stop().animate({
			top : position
        }, 300);
    });
});


// 아래는 접근성 관련 조치 입니다.

// a테그 href 생성
$(document).ready(function (){
	$("a").each(function (){
		if($(this).prop("href") == null || $(this).prop("href") == ""){
			$(this).prop("href", "javascript:;");
		}
	});
});

// RSS버튼 일괄 적용
/*$(document).ready(function (){
	$("a").each(function (){
		if($(this).prop("href") == "javascript:fn_getRss();"){
			$(this).attr("alt", "RSS정보 - 새창열기");
			$(this).parent('.btnArea').css({
				position: 'relative'
			});
			$(this).css({
				position: 'absolute',
				top: -80,
				right: 0
			});
		}
	});
});*/

// 데이터테이블 스트록 디자인
/*
$(document).ready(function (){
	$("tr").each(function (){
		if($(this).children().size() == 1){
			$(this).children().css('border-right','0');
		}
	});
});
*/
//skip navigation 이동후 포커싱 유지
$(document).ready(function(){
	$('a, button').on('click',function(){
		var tmpId = $(this).attr("href");
		if(tmpId != null && tmpId != "" && tmpId.indexOf("#") > -1 && tmpId.length > 1){
			$(tmpId).attr("tabindex","0").css("outline","0").focus();
		}
    });
	$('.skipNav li:nth-child(1) a, .skipNav li:nth-child(2) a').focus(function(){
		$('.skipNav').stop().animate({
          top: 0
      }, 250);
	});
	$('.skipNav li:nth-child(1) a, .skipNav li:nth-child(2) a').blur(function(){
		$('.skipNav').stop().animate({
          top: -100
      }, 250);
	});
});

/** 
 * AJAX로 리스트 갱신시 WebPagination UI를 사용할 수 없으므로 스크립트로 만듬
 * 파라미터 설명
 * pageElement : 페이지 엘리먼트 ex : $("div.page_set") or $("#tmpId") 등 jQuery 셀렉터 뭐든 다됨
 * paginationInfo : 자바에서 쓰이던 PaginationInfo 객체를 JSON으로 반환한 것
 * scriptName : 페이지 이동시 사용할 스크립트명
 */
function fn_webPaginationUi(pageElement, paginationInfo, scriptName){
	var totalRecordCount = paginationInfo.totalRecordCount; // 전체 게시물 건수
	var recordCountPerPage = paginationInfo.recordCountPerPage; // 한 페이지당 표시될 게시물 수
	var pageSize = paginationInfo.pageSize; // 페이지 표현 갯수
	var totalPage = parseInt(Math.ceil(totalRecordCount / parseFloat(recordCountPerPage))); // 총 페이지
	
	var currentPageNo = paginationInfo.currentPageNo; // 현재 페이지
	var firstPageNo = paginationInfo.firstPageNo != 1 ? 1 : paginationInfo.firstPageNo; // 첫 페이지 번호
	var lastPageNo = totalPage; // 마지막 페이지 번호
	
	var pageBlock = parseInt(Math.ceil(currentPageNo / parseFloat(pageSize))); // 표현할 페이지 리스트 계산
	
	var startPage = (pageBlock -1) * pageSize + 1; // 페이지 시작 번호
	var endPage = startPage + pageSize - 1; // 페이지 종료번호
	if(endPage > totalPage) endPage = totalPage; // 페이지 종료번호가 토탈페이지보다 클 경우 종료번호를 토탈페이지로 세팅
	
	
	var prevPage = (startPage -1) >= 1 ? (startPage -1) : 1; // 이전페이지 리스트 번호
	var nextPage = (endPage + 1) <= totalPage ? (endPage + 1) : totalPage; // 다음 페이지 번호
	
	var pageHtml = "";
	pageHtml += "<button type=\"button\" onclick=\"javascript:" + scriptName + "('" + firstPageNo + "');\"><i class=\"xi-backward\"></i><b class=\"blind\">처음 페이지</b></button>";
	pageHtml += "<button type=\"button\" onclick=\"javascript:" + scriptName + "('" + prevPage + "');\"><i class=\"xi-step-backward\"></i><b class=\"blind\">이전 10페이지</b></button>";
	
	if(totalPage <= 1){
		pageHtml += "<button type=\"button\" class=\"On\">" + currentPageNo + "</button>";
	}else{
		for(var i=startPage;i<=endPage;i++){
			// 현재 페이지
			if(i==currentPageNo){
				pageHtml += "<button type=\"button\" class=\"On\">" + currentPageNo + "</button>";
			}else{
				pageHtml += "<button type=\"button\" onclick=\"javascript:" + scriptName + "('" + i + "');\">" + i + "</button>";
			}
		}
	}
	pageHtml += "<button type=\"button\" onclick=\"javascript:" + scriptName + "('" + nextPage + "');\"><i class=\"xi-step-forward\"></i><b class=\"blind\">다음 10페이지</b></button>";
	pageHtml += "<button type=\"button\" onclick=\"javascript:" + scriptName + "('" + lastPageNo + "');\"><i class=\"xi-forward\"></i><b class=\"blind\">마지막 페이지</b></button>";
	
	pageElement.html("");
	pageElement.html(pageHtml);
}


/**
 * jQuery에 serialze와 serialzeArray는 있는데 하단꺼는 없어서 만듬
 */
$.fn.serializeObject = function (){
	var arrayData = this.serializeArray();
	var objectData = {};
	
	$.each(arrayData, function (){
		var key = this.name;
		var value = this.value != null ? this.value : '';
		
		if(objectData[key] !== undefined && objectData[key] != null){
			if(!objectData[key].push){
				objectData[key] = [objectData[key]];
			}
			
			objectData[key].push(value);
		}else{
			objectData[key] = value;
		}
	});
	
	return objectData;
}

/**
 * 단순 Ajax 호출 함수
 * 파라메터 설명
 * url : 호출될 URL
 * type : 전송 타입(GET, POST)
 * data : 전송할 데이터
 * dataType : 리턴받을 데이터 타입
 * encType : 인코딩 타입
 * valiFn : 벨리데이션 펑션명
 * successCallBack : 전송 성공시 실행할 펑션명
 * isLodingImg : 로딩바 표시여부(기본값 false이며 true로 줄 경우 로딩바가 표시된다)
 **/
function ajaxCall(url, type, data, dataType, encType, valiFn, successCallBack, isLodingImg){
	$.ajax({
		url : url, 
		type : type, 
		data : data, 
		dataType : dataType, 
		enctype : encType, 
		beforeSend: function (){
			if(isLodingImg !== undefined && isLodingImg == true){
				fn_showLoadingImg(true, '');
			}
			if(typeof(valiFn) == 'function'){
				return valiFn(data);
			}
		},
		success : function(data, textStatus, jqXHR){
			if(typeof(successCallBack) == 'function'){
				successCallBack(data);
			}
		}, 
		error : function(jqXHR, textStatus, errorThrown){
			alert("AJAX 통신 오류입니다.");
		}, 
		complete : function(){
			if(isLodingImg !== undefined && isLodingImg == true){
				fn_showLoadingImg(false, '');
			}
		}
	});
}

//로딩바
function fn_showLoadingImg(bBoolean, message){
	var msg = gfn_str_parseNull(message);
	if(bBoolean){
		fn_handleHoldDiv(bBoolean);
		var strElem = '<div id="grp_ajax_loading_image" findStr="grp_ajax_loading_image" style="width:100%;text-align:center; top:50%; position:absolute;"><img src="/web/img/progress1.gif"/><br/><label id="lbl_ajaxLoading">' + msg + '</label></div>';
		var body = $("body");
		body.append(strElem);
	} else {
		fn_handleHoldDiv(bBoolean);
		var comp = $("[findStr='grp_ajax_loading_image']");
		if(comp.length > 0){
			comp.remove();
		}
	}
}

function fn_handleHoldDiv(createYN){
	if(createYN){
		var body = $("body");
		var divComp = $("#grp_gfn_handle_ajax_hold");
		if(divComp.length <= 0){
			body.append('<div id="grp_gfn_handle_ajax_hold" style="position:absolute;left:0;top:0;width:100%;height:' + $("body").css("height") + '; text-align:center; opacity: 0.3; background-color: gray;"></div>');
		}
	} else {
		var comp = $("#grp_gfn_handle_ajax_hold");
		if(comp.length > 0){
			comp.remove();
		}
	}
}

/**
 * rowspan 자동으로 해주는 함수
 */
$.fn.rowspan = function(colIdx, isStats){
	return this.each(function (){
		var that;
		$("tr", this).each(function(row){
			$("td", this).eq(colIdx).filter(":visible").each(function (col){
				if($(this).html() == $(that).html() && (!isStats || isStats && $(this).prev().html() == $(that).prev().html())){
					rowspan = $(that).attr("rowspan") || 1;
					rowspan = Number(rowspan)+1;
					
					$(that).attr("rowspan", rowspan);
					$(this).hide();
					//$(this).remove();
				}else{
					that = this;
				}
				
				that = (that == null) ? this : that;
			});
		});
	});
}

$.fn.thRowspan = function(colIdx, isStats){
	return this.each(function (){
		var that;
		$("tr", this).each(function(row){
			$("th", this).eq(colIdx).filter(":visible").each(function (col){
				if($(this).html() == $(that).html() && (!isStats || isStats && $(this).prev().html() == $(that).prev().html())){
					rowspan = $(that).attr("rowspan") || 1;
					rowspan = Number(rowspan)+1;
					
					$(that).attr("rowspan", rowspan);
					$(this).hide();
					//$(this).remove();
				}else{
					that = this;
				}
				
				that = (that == null) ? this : that;
			});
		});
	});
}


//날짜 차이 계산
function diffDate(sDate,eDate){
	
	var Adate = new Date(sDate.toString().substring(0,4),sDate.toString().substring(4,6)-1,'01');
	var Bdate = new Date(eDate.toString().substring(0,4),eDate.toString().substring(4,6)-1,'01');
	
	var diff =Bdate - Adate;
	
	var currDay = 24 * 60 * 60 * 1000;
	var currMonth = currDay * 30;
	
	var year = Math.floor(parseInt(diff/currMonth)/12);
	var month = Math.round(diff/currMonth) - (12*year);

	var str = '';
	if(year != 0){
		str += year+'년 ';
	}
	
	str += month == 0 ? '' : month+'개월';

	
	return str;
}

//년도 생성
function makeYearSelect(key){
	var date = new Date;
	
	var str = '<option value="">년 선택</option>';
	
	for(var i = 1980; i<=date.getFullYear() ; i++){
		var selected = key == i ? 'selected="selected"' : '';
		str += '<option value="'+i.toString()+'" '+selected+'>'+i.toString()+'</option>';
	}
	return str;
}

//월 생성
function makeMonthSelect(key){
	var str = '<option value="">월 선택</option>';
	
	for(var i = 1; i<=12 ; i++){
		i = i < 10 ? '0'+i : i;
		var selected = key == i ? 'selected="selected"' : '';
			
		str += '<option value="'+i.toString()+'" '+selected+'>'+i.toString()+'</option>';
	}
	return str;
}

//string to camelpattern
function fn_camelPattern(valArray){
	var txtSplit = '';
	var resultArr = new Array;
	$.each(valArray,function(idx,ele){
		txtSplit = '';
		$.each(ele.split('_'),function(idx2,ele2){
			if(idx2 == 0){
				txtSplit += ele2.toLowerCase();
			}else{
				$.each(ele2.split(''),function(idx3,ele3){
					txtSplit += idx3 == 0 ? ele3: ele3.toLowerCase();
				})
			}
		})
		resultArr.push(txtSplit);
	})
	return resultArr;
}




//save

function fc_save(options,callback){
	$.ajax({
		url:options.url,
		type: typeof options.type == 'undefined' ? 'post' : options.type ,
		dataType : typeof options.dataType == 'undefined' ? 'json' : options.dataType,
		contentType : "application/json",
		data:JSON.stringify(options.param),
		async:typeof options.async == 'undefined' ? false : options.async ,
		success:function(data){
			return callback(data);
		}
	});
}


function fc_capture(targetElement,fileName){
    targetElement = targetElement[0];
  
    html2canvas(targetElement,{allowTaint:true,logging:true,taintTest:false}).then(function(canvas){

        var myImage = canvas.toDataURL();
        fc_downloadURI(myImage,fileName);
    })
    
}

function fc_downloadURI(uri,name){
    var link = document.createElement('a');
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
}
