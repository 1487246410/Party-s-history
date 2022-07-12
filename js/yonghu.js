
var len = new Array($(".page li:nth-child(2)"), $(".page li:nth-child(3)"), $(".page li:nth-child(4)"), $(".page li:nth-child(5)"), $(".page li:nth-child(6)"));

for (var i = 0; i < len.length; i++) {
    var $cc = len[i];
    $cc.on("click", function () {
        $(this).addClass("sgy-avtiveLi").siblings().removeClass("sgy-avtiveLi");
    });
};

var len = new Array($(".page1 li:nth-child(2)"), $(".page1 li:nth-child(3)"), $(".page1 li:nth-child(4)"), $(".page1 li:nth-child(5)"), $(".page1 li:nth-child(6)"));

for (var i = 0; i < len.length; i++) {
    var $cc = len[i];
    $cc.on("click", function () {
        $(this).addClass("sgy-avtiveLi").siblings().removeClass("sgy-avtiveLi");
    });
};

function msgshow2(lin) {
    lin.on('click',function () {
        $(".msg2").fadeOut(300);
        $(".msg1").fadeIn(300);
    })
};

function msgshow3(lin) {
    lin.on('click',function () {
        $(".msg1").fadeOut(300);
        $(".msg2").fadeIn(300);
    })
};


msgshow2($(".page li:nth-child(2)"));
msgshow2($(".page li:nth-child(4)"));
msgshow2($(".page li:nth-child(6)"));

msgshow3($(".page li:nth-child(3)"));
msgshow3($(".page li:nth-child(5)"));

msgshow2($(".page1 li:nth-child(2)"));
msgshow2($(".page1 li:nth-child(4)"));
msgshow2($(".page1 li:nth-child(6)"));

msgshow3($(".page1 li:nth-child(3)"));
msgshow3($(".page1 li:nth-child(5)"));

function pageshow(linstart,linend) {
    linstart.on('click',function () {
        $(".page").show();
        $(".page1").hide();
    });

    linend.on('click',function () {
        $(".page1").show();
        $(".page").hide();
    });
}

pageshow($(".page li:nth-child(1)"),$(".page li:nth-child(7)"));
pageshow($(".page1 li:nth-child(1)"),$(".page1 li:nth-child(7)"));


$(".banner-msg li:nth-child(1)").on('click',function () {
    $(this).addClass("activeL2").siblings().removeClass("activeL2");
    $(".huan").text("您共有200条作品");
    $(".msg1").fadeIn(300);
    $(".msg2").hide();
    $(".zhanghushezhi").hide();
});


$(".banner-msg li:nth-child(2)").on('click',function () {
   $(this).addClass("activeL2").siblings().removeClass("activeL2");
   $(".huan").text("您共有200条收藏");
    $(".msg1").hide();
    $(".wodedongtai").hide();
    $(".haoyoudongtai").hide();
    $(".wodefensi").hide();
    $(".wodeguanzhu").hide();
    $(".msg2").fadeIn(300);
    $(".zhanghushezhi").hide();
});

$(".banner-msg li:nth-child(3)").on('click',function () {
    $(this).addClass("activeL2").siblings().removeClass("activeL2");
    $(".huan").text("");
    $(".msg1").hide();
    $(".msg2").hide();
    $(".wodedongtai").hide();
    $(".haoyoudongtai").hide();
    $(".wodefensi").hide();
    $(".wodeguanzhu").hide();
    $(".zhanghushezhi").fadeIn(300);
    $(".page").hide();
});

$(".banner-msg li:nth-child(4)").on('click',function () {
    $(this).addClass("activeL2").siblings().removeClass("activeL2");
    $(".huan").text("");
    $(".msg1").hide();
    $(".msg2").hide();
    $(".wodedongtai").hide();
    $(".haoyoudongtai").hide();
    $(".wodefensi").hide();
    $(".zhanghushezhi").hide();
    $(".wodeguanzhu").fadeIn(300);
    $(".page").hide();
});
$(".banner-msg li:nth-child(5)").on('click',function () {
    $(this).addClass("activeL2").siblings().removeClass("activeL2");
    $(".huan").text("");
    $(".msg1").hide();
    $(".msg2").hide();
    $(".wodedongtai").fadeIn(300);
    $(".haoyoudongtai").hide();
    $(".wodefensi").hide();
    $(".zhanghushezhi").hide();
    $(".wodeguanzhu").hide();
    $(".page").hide();
});
$(".banner-msg li:nth-child(6)").on('click',function () {
    $(this).addClass("activeL2").siblings().removeClass("activeL2");
    $(".huan").text("");
    $(".msg1").hide();
    $(".msg2").hide();
    $(".wodedongtai").hide();
    $(".haoyoudongtai").fadeIn(300);
    $(".wodefensi").hide();
    $(".zhanghushezhi").hide();
    $(".wodeguanzhu").hide();
    $(".page").hide();
});

$(".banner-top-right li:nth-child(1)").on('click',function () {
    $(".huan").text("");
    $(".msg1").hide();
    $(".msg2").hide();
    $(".wodedongtai").hide();
    $(".haoyoudongtai").hide();
    $(".wodefensi").fadeIn(300);
    $(".zhanghushezhi").hide();
    $(".wodeguanzhu").hide();
    $(".page").hide();
});

$(".banner-top-right li:nth-child(2)").on('click',function () {
    $(".huan").text("");
    $(".msg1").hide();
    $(".msg2").hide();
    $(".wodedongtai").hide();
    $(".haoyoudongtai").hide();
    $(".wodefensi").hide();
    $(".zhanghushezhi").hide();
    $(".wodeguanzhu").fadeIn(300);
    $(".page").hide();
});

$(".banner-top-right li:nth-child(3)").on('click',function () {
    $(".huan").text("您共有100条原创");
    $(".msg1").fadeIn();
    $(".msg2").hide();
    $(".wodedongtai").hide();
    $(".haoyoudongtai").hide();
    $(".wodefensi").hide();
    $(".zhanghushezhi").hide();
    $(".wodeguanzhu").hide();
    $(".page").hide();
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

/*悬浮end*/