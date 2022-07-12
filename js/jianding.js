$(function () {
    $(".d8").mouseenter(function () {
        $(".d8").css({"background-image":"url(image/专家鉴定/u44_mouseOver.png)"});
        $(".d7_a").css("color", "#fff");
    });
    $(".d8").mouseleave(function () {
        $(".d8").css({"background-image":"url(image/专家鉴定/u44.png)"});
        $(".d7_a").css("color", "#000");
    });
    $(".d9_3").mouseenter(function () {
        $(this).css("backgroundColor", "#00A000");
    });
    $(".d9_3").mouseleave(function () {
        $(this).css("backgroundColor", "#169BD5");
    });
    /*悬浮start*/
    $(".showerweima").hover(function () {
        $(".xuanfu-left").stop().fadeToggle(500);
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() >= $(".top").height()) {//如果从上往下滑动的高度大于login的高度
            $(".xuanfu-right li:nth-child(1)").css("display", "block");
        } else {
            $(".xuanfu-right li:nth-child(1)").css("display", "none");
        }
    });

    function dingwei(idstart,idend){
        $(idstart).click(function () {
            var city_top = $(idend).offset().top;
            $('html,body').animate({scrollTop: city_top}, 500);
        })
    };

    dingwei(".maodian1",'.top');


});