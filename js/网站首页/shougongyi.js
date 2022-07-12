$(function () {


    /*banner-left-title js*/
    function show(variable, variableI, variableI1, variableI2, variableI3,
                  variableI4, variableI5, beishowvariable, li1, li2, li3, li4, li5) {
        variable.hover(function () {
            beishowvariable.stop().slideDown(200);
        }, function () {
            beishowvariable.stop().slideUp(200);
        });

        beishowvariable.hover(function () {
            $(this).stop().slideDown(200);
            li1.on("click", function () {
                beishowvariable.slideUp(200);
                variableI.text(variableI1);
                $(this).css("background-color", "#0079FE").css("color", "#FFFFFF");
                li2.css("background-color", "#FFFFFF").css("color", "#999999");
                $(".banner-left-msg-1").fadeOut(300);
                $(".banner-left-msg").fadeIn(300);
                li3.css("background-color", "#FFFFFF").css("color", "#999999");
                li4.css("background-color", "#FFFFFF").css("color", "#999999");
                li5.css("background-color", "#FFFFFF").css("color", "#999999");
            });
            li2.on("click", function () {
                beishowvariable.slideUp(200);
                variableI.text(variableI2);
                $(this).css("background-color", "#0079FE").css("color", "#FFFFFF");
                li1.css("background-color", "#FFFFFF").css("color", "#999999");
                $(".banner-left-msg").fadeOut(300);
                $(".banner-left-msg-1").fadeIn(300);
                li3.css("background-color", "#FFFFFF").css("color", "#999999");
                li4.css("background-color", "#FFFFFF").css("color", "#999999");
                li5.css("background-color", "#FFFFFF").css("color", "#999999");
            });
            li3.on("click", function () {
                beishowvariable.slideUp(200);
                variableI.text(variableI3);
                $(this).css("background-color", "#0079FE").css("color", "#FFFFFF");
                li1.css("background-color", "#FFFFFF").css("color", "#999999");
                li2.css("background-color", "#FFFFFF").css("color", "#999999");
                li4.css("background-color", "#FFFFFF").css("color", "#999999");
                li5.css("background-color", "#FFFFFF").css("color", "#999999");
                $(".banner-left-msg-1").fadeOut(300);
                $(".banner-left-msg").fadeIn(300);
            });
            li4.on("click", function () {
                beishowvariable.slideUp(200);
                variableI.text(variableI4);
                $(this).css("background-color", "#0079FE").css("color", "#FFFFFF");
                li1.css("background-color", "#FFFFFF").css("color", "#999999");
                li2.css("background-color", "#FFFFFF").css("color", "#999999");
                li3.css("background-color", "#FFFFFF").css("color", "#999999");
                li5.css("background-color", "#FFFFFF").css("color", "#999999");
                $(".banner-left-msg").fadeOut(300);
                $(".banner-left-msg-1").fadeIn(300);
            });
            li5.on("click", function () {
                beishowvariable.slideUp(200);
                variableI.text(variableI5);
                $(this).css("background-color", "#0079FE").css("color", "#FFFFFF");
                li1.css("background-color", "#FFFFFF").css("color", "#999999");
                li2.css("background-color", "#FFFFFF").css("color", "#999999");
                li3.css("background-color", "#FFFFFF").css("color", "#999999");
                li4.css("background-color", "#FFFFFF").css("color", "#999999");
                $(".banner-left-msg-1").fadeOut(300);
                $(".banner-left-msg").fadeIn(300);
            });
        }, function () {
            $(this).stop().slideUp(300);
        });
    };

    show($(".shougongyijs"), $(".shougongyijs i"), $(".shougongyishow li:nth-child(1)").text(),$(".shougongyishow li:nth-child(2)").text(),null, null, null, $(".shougongyishow"), $(".shougongyishow li:nth-child(1)"), $(".shougongyishow li:nth-child(2)"));

    show($(".zhubianjs"), $(".zhubianjs i"),$(".shougongyimsgshow li:nth-child(1)").text(),$(".shougongyimsgshow li:nth-child(2)").text(), $(".shougongyimsgshow li:nth-child(3)").text(),$(".shougongyimsgshow li:nth-child(4)").text(), $(".shougongyimsgshow li:nth-child(5)").text(), $(".shougongyimsgshow"), $(".shougongyimsgshow li:nth-child(1)"), $(".shougongyimsgshow li:nth-child(2)")
        , $(".shougongyimsgshow li:nth-child(3)"), $(".shougongyimsgshow li:nth-child(4)"), $(".shougongyimsgshow li:nth-child(5)"));

    show($(".zuixinjs"), $(".zuixinjs i"),$(".shougongyifenleishow li:nth-child(1)").text(),$(".shougongyifenleishow li:nth-child(2)").text(), $(".shougongyifenleishow li:nth-child(3)").text(), $(".shougongyifenleishow li:nth-child(4)").text(),$(".shougongyifenleishow li:nth-child(5)").text(), $(".shougongyifenleishow"), $(".shougongyifenleishow li:nth-child(1)"), $(".shougongyifenleishow li:nth-child(2)")
        , $(".shougongyifenleishow li:nth-child(3)"), $(".shougongyifenleishow li:nth-child(4)"), $(".shougongyifenleishow li:nth-child(5)"));

    show($(".chuanzhujs"), $(".chuanzhujs i"),$(".shougongyimsgshowRun li:nth-child(1)").text(),$(".shougongyimsgshowRun li:nth-child(2)").text(), $(".shougongyimsgshowRun li:nth-child(3)").text(), $(".shougongyimsgshowRun li:nth-child(4)").text(),$(".shougongyimsgshowRun li:nth-child(5)").text(), $(".shougongyimsgshowRun"), $(".shougongyimsgshowRun li:nth-child(1)"), $(".shougongyimsgshowRun li:nth-child(2)")
        , $(".shougongyimsgshowRun li:nth-child(3)"), $(".shougongyimsgshowRun li:nth-child(4)"), $(".shougongyimsgshowRun li:nth-child(5)"));

    $(".shougongyishow li:nth-child(2)").on('click',function () {
        $(".zhubianjs").hide();
        $(".chuanzhujs").show();
    });

    $(".shougongyishow li:nth-child(1)").on('click',function () {
        $(".zhubianjs").show();
        $(".chuanzhujs").hide();
    });
    
    
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
            $(".banner-left-msg-1").fadeOut(300);
            $(".banner-left-msg").fadeIn(300);
        })
    };

    function msgshow3(lin) {
        lin.on('click',function () {
            $(".banner-left-msg").fadeOut(300);
            $(".banner-left-msg-1").fadeIn(300);
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


    $(".refresh").on('click',function () {
        $(".banner-right-msg-1").fadeToggle(300);
        $(".banner-right-msg-2").fadeToggle(300);
    });
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