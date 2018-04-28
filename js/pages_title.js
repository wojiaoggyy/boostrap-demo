/**
 * Created by GY on 2017/7/21.
 */
$(function () {
    var titlestr = $('.page-tabs-content.active a', parent.document).attr("title");
    if(!titlestr){
    	console.log("iframe页面被单独打开了");
    }else{
    	var titlearr = titlestr.split("-");
	    if(titlearr.length == 2){
	        $(".title h4").html( titlearr[1] + "<small> __ " + titlearr[0] + "</small>" )
	    }else{
	        $(".title h4").html( titlearr[2] + "<small> __ " + titlearr[0] + "</small>" + "<small> __ " + titlearr[1] + "</small>" )
	    }
    }	    
})