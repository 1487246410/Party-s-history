$(document).ready(function () {
    $(".banner-top").accordion();

    // var title = new Array($("#one"), $("#two"), $("#three"));
    // var content = new Array($(".shougongyi-left-01"), $(".shougongyi-left-02"), $(".shougongyi-left-03"));
    // var noticeContent = new Array($("檐前袅袅游丝上，上有蜘蛛巧来往。"), $("即使一根线，也要注入生命。"), $("兴来一挥百纸尽，骏马倏忽踏九州。"));

    // for (var i = 0; i < title.length; i++) {
    //     cc(title[i], content[i], noticeContent, ".shougongyi-Notice p", )
    // };

    cc("#one", "#two", "#three", ".shougongyi-left-01", ".shougongyi-left-02", ".shougongyi-left-03"
        , "中国共产党第一次全国代表大会，简称中共一大", "陈独秀任书记，张国焘为组织主任，李达为宣传主任", "宣告了中国共产党的正式成立！", ".shougongyi-Notice p")


    cc("#four", "#five", "#six", ".shougongyi-left-04", ".shougongyi-left-05", ".shougongyi-left-06"
        , "纠正博古“左”倾领导在军事指挥上的错误而召开", "秦邦宪（博古），朱德，周恩来，毛泽东。", "确定了毛泽东的领导地位", ".shougongyi-Notice p")


    cc("#seven", "#eight", "#nine", ".shougongyi-left-07", ".shougongyi-left-08", ".shougongyi-left-09"
        , "食堂召开的重大会议", "毛泽东、刘少奇、周恩来、朱德、任弼时组成的主席团主持", "会议确定了促进革命迅速取得全国胜利的各项方针", ".shougongyi-Notice p")


    cc("#ten", "#eleven", "#twelve", ".shougongyi-left-10", ".shougongyi-left-11", ".shougongyi-left-12"
        , "邓小平的讲话实际上成了三中全会的主题报告", "中央主席华国锋主持，邓小平同志", "会议实际上形成了以邓小平为核心的党中央领导集体", ".shougongyi-Notice p")

    function cc(one, two, three, Content1, Content2, Content3, noticeContent1, noticeContent2, noticeContent3, noitice) {
        $(one).hover(function () {
            $(Content3).stop().fadeOut();
            $(Content2).stop().fadeOut();
            $(Content1).stop().fadeIn();
            $(this).addClass("activeLi");
            $(two).removeClass("activeLi");
            $(three).removeClass("activeLi");
            $(noitice).text(noticeContent1);
        });
        $(two).hover(function () {
            $(Content3).stop().fadeOut();
            $(Content1).stop().fadeOut();
            $(Content2).stop().fadeIn();
            $(this).addClass("activeLi");
            $(one).removeClass("activeLi");
            $(three).removeClass("activeLi");
            $(noitice).text(noticeContent2);
        });
        $(three).hover(function () {
            $(Content1).stop().fadeOut();
            $(Content2).stop().fadeOut();
            $(Content3).stop().fadeIn();
            $(this).addClass("activeLi");
            $(one).removeClass("activeLi");
            $(two).removeClass("activeLi");
            $(noitice).text(noticeContent3);
        });
        
    }

    function dingwei(idstart, idend) {
        $(idstart).click(function () {
            var city_top = $(idend).offset().top;
            $('html,body').animate({ scrollTop: city_top }, 500);
        })
    };

    dingwei(".maodian6", '#zgyd');
    dingwei(".maodian2", '#zyhy');
    dingwei(".maodian3", '#xbphy');
    dingwei(".maodian4", '#syjszqh');



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
        lin.on('click', function () {
            $(".gongjiang-msg-2").fadeOut(300);
            $(".gongjiang-msg-1").fadeIn(300);
        })
    };

    function msgshow3(lin) {
        lin.on('click', function () {
            $(".gongjiang-msg-1").fadeOut(300);
            $(".gongjiang-msg-2").fadeIn(300);
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

    function pageshow(linstart, linend) {
        linstart.on('click', function () {
            $(".page").show();
            $(".page1").hide();
        });

        linend.on('click', function () {
            $(".page1").show();
            $(".page").hide();
        });
    }

    pageshow($(".page li:nth-child(1)"), $(".page li:nth-child(7)"));
    pageshow($(".page1 li:nth-child(1)"), $(".page1 li:nth-child(7)"));


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

    function dingwei(idstart, idend) {
        $(idstart).click(function () {
            var city_top = $(idend).offset().top;
            $('html,body').animate({ scrollTop: city_top }, 500);
        })
    };

    dingwei(".maodian1", '.top');
})
/*悬浮end*/