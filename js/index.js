$(function () {
    // 菜单滚动条
    $('.navbar-scroll').niceScroll({
        cursorcolor: "#fff",//#CC0071 光标颜色
        cursoropacitymax: 1, //改变不透明度非常光标处于活动状态（scrollabar“可见”状态），范围从1到0
        cursorwidth: "5px", //像素光标的宽度
        cursorborder: "0", // 游标边框css定义
        autohidemode: "scroll" //是否隐藏滚动条
    });
    var NICE = $('.navbar-scroll').getNiceScroll();


	// 菜单动效
    $(".navbar").on("click",".lis",function (e) {
        e.stopPropagation();//阻止冒泡
        if($(this).hasClass("open")){
            $(this).children(".lis-out").slideUp("fast",function(){
                $(this).parent().removeClass('open');
            });
            $(this).children("a").children(".fr.glyphicon").removeClass("rotate");
        }else{
            $(this).siblings(".open").children(".lis-out").slideUp("fast",function(){
                $(this).parent().removeClass('open');
            });
            $(this).children(".lis-out").slideDown("fast",function(){
                $(this).parent().addClass('open');
            });
            $(this).siblings(".open").children("a").children(".fr.glyphicon").removeClass("rotate");
            $(this).children("a").children(".fr.glyphicon").addClass("rotate");
        }
    })


	//菜单缩进动效
	$('.jiantou').click(function(){
		if ($(this).hasClass('smjt')) {
			$(this).removeClass('smjt');
            $('.open').removeClass('open');
            $('.rotate').removeClass('rotate');
            $('.lis-out').hide();
            $('.mainbody').removeClass('suo');
            setTimeout(function () {
                $(".yiji > a > span,.yiji > a > .fr").show();
                NICE.resize();
            },200)
		}else{
            $(".yiji > a > span,.yiji > a > .fr").hide();
			$('.open').removeClass('open');
            $('.rotate').removeClass('rotate');
			$('.lis-out').hide();
			$(this).addClass('smjt');
            $('.mainbody').addClass('suo');
		}
	});

    //调取配置json文件
    var tabs_num = 0;
    $.ajax({
        type : "GET",
        url : "json/index_setting.json",
        data : "json",
        success : function (data) {
            //设置可打开标签总数
            tabs_num = data.tabs_num;
        }
    })


    // iframe创建及切换
    $(".navbar").on("click",".lis-a",function(e){
        e.stopPropagation();//阻止冒泡
        var iframeName = $(this).text();
        var iframeSrc = $(this).attr('data-href');
        var iframeDataId = $(this).attr('data-id');
        var dataID = null;
        for (var i = 0; i < $('.page-tabs-content').length; i++) {
            dataID += $('.page-tabs-content').eq(i).attr('data-id');
        };
        if(dataID.indexOf(iframeDataId) >= 0){
            $('.page-tabs-content').removeClass('active');
            $('#main iframe').hide();
            for (var i = 0; i < $('.page-tabs-content').length; i++) {
                if($('.page-tabs-content').eq(i).attr('data-id') == iframeDataId){
                    $('.page-tabs-content').eq(i).addClass('active');
                    $('.lis-a').removeClass('sele');
                    $(this).addClass('sele');
                    $('#main iframe').eq(i).show();
                    scrollToTab($('.page-tabs-content.active'));
                }
            };
        }else{
            if( $(".page-tabs-content").length <= tabs_num ){
                var mianbaoxie_yiji = jQuery.trim($(this).parent().parent().parent().parent().siblings("a").find("span").text());
                var mianbaoxie_erji = jQuery.trim($(this).parent().parent().siblings("a").find("span").text());
                var mianbaoxie_sanji = jQuery.trim($(this).find("span").text());
                var a_title = "";
                if(mianbaoxie_yiji == ""){
                    a_title = mianbaoxie_erji +"-"+ mianbaoxie_sanji;
                }else{
                    a_title = mianbaoxie_yiji +"-"+ mianbaoxie_erji +"-"+ mianbaoxie_sanji;
                }
                var reslutTabs = '<div class="page-tabs-content fl active" data-id="' + iframeDataId + '">'+'<a class="" title="'+a_title+'">'+ iframeName +'<span class="glyphicon glyphicon-remove-sign">'+'</span>'+'</a>'+'</div>';
                var reslutSrc = '<iframe src="' + iframeSrc + '" frameborder="0" width="100%" height="100%" data-id="' + iframeDataId + '">'+'</iframe>';
                $('.page-tabs-content').removeClass('active');
                $('.page-tabs-content-out').append(reslutTabs);
                scrollToTab($('.page-tabs-content.active'));
                $('#main iframe').hide();
                $('#main').append(reslutSrc);
                $('.lis-a').removeClass('sele');
                $(this).addClass('sele');
            }else{
                layer.alert("标签总数不能多于" + tabs_num + "个，请关闭其他标签，再打开新标签");
            }

        };
    });
    //事件委托给新增元素绑定事件
    $('.head-tabs .page-tabs').delegate('.page-tabs-content','click',function(){
        var x = $(this).index();
        $('.head-tabs .page-tabs .page-tabs-content').removeClass('active').eq(x).addClass('active');
        $('#main iframe').hide().eq(x).show();
        if($(".suo").length < 1){
        	var actives = $(".page-tabs-content-out").children(".page-tabs-content.active");
	        var actives_did = actives.attr('data-id');
	        $(".lis-a").removeClass("sele");
	        $('.lis-a[data-id="' + actives_did + '"]').addClass("sele");
	        $('.lis-a[data-id="' + actives_did + '"]').parents(".lis-out").slideDown("fast").parents(".lis").addClass("open").siblings(".open").removeClass("open").children(".lis-out").slideUp("fast");
        }	        
    });
    //刷新iframe
     $('.head-tabs .page-tabs').delegate('.page-tabs-content','dblclick',function(){
         var xx = $(this).index();
         $('.head-tabs .page-tabs .page-tabs-content').removeClass('active').eq(xx).addClass('active');
         var target = $('#main iframe').eq(xx);
         var url = target.attr('src').split("?",1) + "?" + Math.random();
         //显示loading提示
         var loading = layer.load();
         target.attr('src', url).load(function () {
             //关闭loading提示
             layer.close(loading);
         });
     });

    // 通过关闭按钮关闭iframe及选项卡
    $('.head-tabs .page-tabs').delegate('.page-tabs-content span','click',function(){
        var y = $(this).parent().parent().index();
        $(this).parent().parent().remove();
        $('#main iframe').eq(y).remove();
    });
    //关闭全部选项卡
    $('.tabCloseAll').click(function(){
//      $('.page-tabs-content-out').children("[data-id]").not(":first").each(function () {
//          $('#main iframe[data-id="' + $(this).attr('data-id') + '"]').remove();
//          $(this).remove();
//      });
//      $('.page-tabs-content-out').children("[data-id]:first").each(function () {
//          $('#main iframe[data-id="' + $(this).attr('data-id') + '"]').show();
//          $(this).addClass("active");
//          $('#main iframe:first').show();
//      });
        $(".page-tabs-content-out").children(".page-tabs-content").not(":first").remove();
        $(".page-tabs-content-out").children(".page-tabs-content:first").addClass("active");
        $("#main iframe").not(":first").remove();
        $("#main iframe:first").show();
        $(".lis-a.sele").removeClass("sele");
        $('.page-tabs-content-out').css("margin-left", "0");
    });
    //关闭其他选项卡
    $('.tabCloseOther').click(function(){
        $('.page-tabs-content-out').children("[data-id]").not(":first").not(".active").each(function () {
            $('#main iframe[data-id="' + $(this).attr('data-id') + '"]').remove();
            $(this).remove();
        });
        var actives_did = $(".page-tabs-content-out").children(".page-tabs-content.active").attr('data-id');
        $(".lis-a").removeClass("sele");
        $('.lis-a[data-id="' + actives_did + '"]').addClass("sele");
        $('.page-tabs-content-out').css("margin-left", "0");
    });

    // 左移按扭
    $('.to-left').on('click', scrollTabLeft);

    // 右移按扭
    $('.to-right').on('click', scrollTabRight);

})
//$(function())结束


//自定义函数开始

//tabs左右移动
//计算元素集合的总宽度
function calSumWidth(elements) {
    var width = 0;
    $(elements).each(function () {
        width += $(this).outerWidth();
    });
    return width;
}
//滚动到指定选项卡
function scrollToTab(element) {
    var marginLeftVal = calSumWidth($(element).prevAll()), marginRightVal = calSumWidth($(element).nextAll());
    // 可视区域非tab宽度
    var tabOuterWidth = calSumWidth($(".head-tabs").children().not(".page-tabs"));
    //可视区域tab宽度
    var visibleWidth = $(".head-tabs").outerWidth() - tabOuterWidth;
    //实际滚动宽度
    var scrollVal = 0;
    if ($(".page-tabs-content-out").outerWidth() < visibleWidth) {
        scrollVal = 0;
    } else if (marginRightVal <= (visibleWidth - $(element).outerWidth() - $(element).next().outerWidth())) {
        if ((visibleWidth - $(element).next().outerWidth()) > marginRightVal) {
            scrollVal = marginLeftVal;
            var tabElement = element;
            while ((scrollVal - $(tabElement).outerWidth()) > ($(".page-tabs-content-out").outerWidth() - visibleWidth)) {
                scrollVal -= $(tabElement).prev().outerWidth();
                tabElement = $(tabElement).prev();
            }
        }
    } else if (marginLeftVal > (visibleWidth - $(element).outerWidth() - $(element).prev().outerWidth())) {
        scrollVal = marginLeftVal - $(element).prev().outerWidth();
    }
    $('.page-tabs-content-out').animate({
        marginLeft: 0 - scrollVal + 'px'
    }, "fast");
}
//查看左侧隐藏的选项卡
function scrollTabLeft() {
    var marginLeftVal = Math.abs(parseInt($('.page-tabs-content-out').css('margin-left')));
    // 可视区域非tab宽度
    var tabOuterWidth = calSumWidth($(".head-tabs").children().not(".page-tabs"));
    //可视区域tab宽度
    var visibleWidth = $(".head-tabs").outerWidth() - tabOuterWidth;
    //实际滚动宽度
    var scrollVal = 0;
    if ($(".page-tabs-content-out").width() < visibleWidth) {
        return false;
    } else {
        var tabElement = $(".page-tabs-content:first");
        var offsetVal = 0;
        while ((offsetVal + $(tabElement).outerWidth()) <= marginLeftVal) {//找到离当前tab最近的元素
            offsetVal += $(tabElement).outerWidth();
            tabElement = $(tabElement).next();
        }
        offsetVal = 0;
        if (calSumWidth($(tabElement).prevAll()) > visibleWidth) {
            while ((offsetVal + $(tabElement).outerWidth()) < (visibleWidth) && tabElement.length > 0) {
                offsetVal += $(tabElement).outerWidth();
                tabElement = $(tabElement).prev();
            }
            scrollVal = calSumWidth($(tabElement).prevAll());
        }
    }
    $('.page-tabs-content-out').animate({
        marginLeft: 0 - scrollVal + 'px'
    }, "fast");
}
//查看右侧隐藏的选项卡
function scrollTabRight() {
    var marginLeftVal = Math.abs(parseInt($('.page-tabs-content-out').css('margin-left')));
    // 可视区域非tab宽度
    var tabOuterWidth = calSumWidth($(".head-tabs").children().not(".page-tabs"));
    //可视区域tab宽度
    var visibleWidth = $(".head-tabs").outerWidth() - tabOuterWidth;
    //实际滚动宽度
    var scrollVal = 0;
    if ($(".page-tabs-content-out").width() < visibleWidth) {
        return false;
    } else {
        var tabElement = $(".page-tabs-content:first");
        var offsetVal = 0;
        while ((offsetVal + $(tabElement).outerWidth()) <= marginLeftVal) {//找到离当前tab最近的元素
            offsetVal += $(tabElement).outerWidth();
            tabElement = $(tabElement).next();
        }
        offsetVal = 0;
        while ((offsetVal + $(tabElement).outerWidth()) < (visibleWidth) && tabElement.length > 0) {
            offsetVal += $(tabElement).outerWidth();
            tabElement = $(tabElement).next();
        }
        scrollVal = calSumWidth($(tabElement).prevAll());
        if (scrollVal > 0) {
            $('.page-tabs-content-out').animate({
                marginLeft: 0 - scrollVal + 'px'
            }, "fast");
        }
    }
}
