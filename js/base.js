$(document).ready(function () {
    /*头部   start*/
    $(".search-head").on("click", function () {
        $(".form-group input").animate({
            width: '334px'
        }, 800);
        $(this).hide(800);
    });

    function cchover(ccclass) {
        $(ccclass).hover(function () {
            $(this).children("i").css("display", "block");
        }, function () {
            $(this).children("i").css("display", "none");
        });
    };

    cchover($(".user a"));
    cchover($(".regist a"));
    cchover($(".box-remove"));
    cchover($(".search-head"));

    var lis = $(".navbar-nav li");
    for (var i = 0; i < lis.length; i++) {
        $(".navbar-nav li").eq(i).hover(function(){
            $(this).toggleClass("active");
		});
    };
    
    $(".box-remove").hover(function () {
        $(".box-remove-chide").stop().slideDown(250);
    },function () {
        $(".box-remove-chide").stop().slideUp(250);
    });
    $(".box-remove-chide").hover(function () {
        $(".box-remove-chide").stop().slideDown(250);
    },function () {
        $(".box-remove-chide").stop().slideUp(250);
    });
    /*头部   end*/
    
    /*其他页面js部分写到其他js文件中即可，这里只针对头尾*/
    
    /*底部   start*/
    $("#erweima").hover(function () {
        $(".erweima").stop().fadeToggle(250);
    })
    /*底部   end*/

    // $(window).unload(function(){
        //这里面写在关闭页面时，要调用的事件
        // localStorage.setItem('temp',null);
        // }
    // )
    //在关闭页面时弹出确认提示窗口
    // window.onbeforeunload = function(event){	
	//     return 'ddd'
    // localStorage.setItem('temp',null);
        // return;
    // };

    // window.onbeforeunload = function(event) { return confirm("确定离开此页面吗？"); }

    // window.onbeforeunload = function(event)
    // {
        // localStorage.setItem('temp',null);
    //     return confirm("确定退出吗");  
    // }
});