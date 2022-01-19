/**
 * 아작스 통신 함수
 * @param options
 * 
 */
function gfn_ajax_request(options){
	var contentType = "application/json";
	contentType = options.contentType ? options.contentType : contentType;
	
	var reqData = options.reqData;
	if(contentType == "application/json" && reqData){
		reqData = JSON.stringify(reqData);
	}
	
	var resData = options.resData;
	var async   = options.mode == "synchronous" ? false : true;
	
	var cache   = options.cache;
	if(gfn_str_parseNull(cache) == "") cache = false;
	
	var crossDomain   = options.crossDomain;
	if(gfn_str_parseNull(crossDomain) == "") crossDomain = false;
	
	$.ajax({
	    url : options.url,
	    type: options.type||"post",
	    dataType : options.dataType||"json",
	    contentType : contentType||"application/json",
	    requestHeader : options.requestHeader||{},
	    data : reqData,
	    
	    async: async,
	    cache : cache,

	    beforeSend:function(request){
	        //$('.wrap-loading').removeClass('display-none');
	    	if(gfn_str_parseNull(options.loadingMsg) != ""){
	    		gfn_ajax_showLoadingImg(true, options.loadingMsg);
	    	}
	    	request.setRequestHeader("AJAX", "true");
	    },
	    complete:function(){
	        //$('.wrap-loading').addClass('display-none');
	        gfn_ajax_showLoadingImg(false);
	     },

	    success : function(responseData){
	    	gfn_ajax_showLoadingImg(false);
	        $("#ajax").remove();
	        var data = responseData.data;
	        var pageInfo = responseData.pageInfo;
	        if(resData){
	        	var dataList = resData;
	        	if(dataList.indexOf("dlt_") >= 0){
		        	if(resData.indexOf("Grd") >= 0){
		        		var gridID = resData.replace("dlt_", "");
			        	//if(gfn_com_isEmptyObject(dataCollect[dataList])){
			        		dataCollect[dataList] = {};
			        		dataCollect[dataList].oriData  = [];
				        	dataCollect[dataList].data     = [];
			        	//}
			        	window[gridID].refresh();
	        			var arrObj = [];
			        	$.each(data, function(key, value){
			        		value.oriRowIdx = key;
			        		var obj = {};
			        		$.each(value, function(key2, value2){
			        			obj[key2] = value2;
			        		});
			        		arrObj.push(obj);
			        	});
			        	dataCollect[dataList].oriData = arrObj;
			        	dataCollect[dataList].data = data;
			        	if(!gfn_com_isEmptyObject(window[gridID])){
			        		//window[gridID].rebuild();
			        		window[gridID].refresh();
			        		window[gridID].clearRowStatus()
			        		/*
			        		_SBGrid.destroy(gridID);
			        		var gridInfo = scwin.tarGrdInfo[gridID]["oriGridInitInfo"];
			        		var colInfo  = scwin.tarGrdInfo[gridID]["oriColInfo"];
			        		gfn_com_setSBGrid25(gridID, gridInfo, colInfo);    //그리드 생성 함수
			        		*/
			        	}
			        	if(!gfn_com_isEmptyObject(pageInfo)){
			        		if(pageInfo.firstIndex) delete pageInfo.firstIndex;
			        		if(pageInfo.lastIndex) delete pageInfo.lastIndex;
			        		window[gridID].pageInfo    = pageInfo;
			        		gfn_com_setPageControll(window[gridID].strPageId, gridID);
			        	}
		        	} else {
		        		if(gfn_com_isEmptyObject(dataCollect[dataList])){
			        		dataCollect[dataList] = {};
			        	}
			        	dataCollect[dataList] = data;
		        	}
	        	} else if(dataList.indexOf("dma_") >= 0){
	        		if(gfn_com_isEmptyObject(dataCollect[dataList])){
		        		dataCollect[dataList] = {};
		        	}
		        	dataCollect[dataList] = data;
	        	}
	        }

	        if(typeof options.success == "string"){
	        	var func = eval(options.success);
	        	func(data, responseData);
	        } else if(typeof options.success == "function"){
	        	options.success(data, responseData);
        	}
	    },
	    error : function(jqXhr, textStatus, errorThrown){
	    	gfn_ajax_showLoadingImg(false);
	    	gfn_ajax_defaultAjaxError(jqXhr, textStatus, errorThrown, options.failCallBack);
	 	}
	});
}

/**
 * ajax 통신 실패 시 기본 처리..
 * @param jqXhr
 * @param textStatus
 * @param errorThrown
 * @param userFunc
 */
function gfn_ajax_defaultAjaxError(jqXhr, textStatus, errorThrown, userFunc){
	alert("작업 중 오류가 발생하였습니다.");
    if(typeof userFunc == "function"){
    	userFunc(jqXhr, textStatus, errorThrown);
    }
    
    if(typeof userFunc == "string"){
    	window[userFunc](jqXhr, textStatus, errorThrown);
    }
}

function gfn_ajax_showLoadingImg(bBoolean, message){
	var msg = gfn_str_parseNull(message);
	if(bBoolean){
		gfn_ajax_handleHoldDiv(bBoolean);
		var strElem = '<div id="grp_ajax_loading_image" findStr="grp_ajax_loading_image" style="width:100%;text-align:center; top:50%; position:absolute;"><img src="/web/img/common/bx_loader.gif"/><br/><label id="lbl_ajaxLoading">' + msg + '</label></div>';
		var body = $("body");
		body.append(strElem);
	} else {
		gfn_ajax_handleHoldDiv(bBoolean);
		var comp = $("[findStr='grp_ajax_loading_image']");
		if(comp.length > 0){
			comp.remove();
		}
	}
}

function gfn_ajax_handleHoldDiv(createYN){
	if(createYN){
		var body = $("body");
		var divComp = $("#grp_gfn_handle_ajax_hold");
		if(divComp.length <= 0){
			body.append('<div id="grp_gfn_handle_ajax_hold" style="position:absolute;left:0;top:0;width:100%; z-index:99999; height:' + $("body").css("height") + '; text-align:center; opacity: 0.3; background-color: gray;"></div>');
		}
	} else {
		var comp = $("#grp_gfn_handle_ajax_hold");
		if(comp.length > 0){
			comp.remove();
		}
	}
}

/*
<div style="width:100%;height:100%;text-align:center; top:50%; position:absolute;"><img src="/mgtWeb/sbgrid/kr/co/softbowl/image/progress1.gif"/><br/><label id="lbl_ajaxLoading">test다</label></div>
*/