$(document).ready(function () {
    // 这个用于初始化实现一次效果，
    // localStorage.setItem("temp",null);
    // console.log(localStorage.getItem('temp'));

    if (localStorage.getItem('temp') == null) {
        localStorage.setItem("temp", 2);
    }

    if (localStorage.getItem('temp') == 1) {
    } else {
        localStorage.setItem("temp", 0);
    }
    if (localStorage.getItem('temp') == 0) {
        $("#create").click(function () {
            $(this).fadeOut(1000);
            $('.all').fadeIn(1000);
            localStorage.setItem("temp", 1);
        });
    } else {
        $('#create').fadeOut(0);
        $('.all').fadeIn(0);
    }
    console.log(localStorage.getItem('temp'));

    /*首先获取到 wrap（因为要设置其left才能控制轮播图），然后获取到左右两个箭头，并实现手动轮播*/
    var wrap = document.querySelector(".wrap");
    var next = document.querySelector(".arrow_right");
    var prev = document.querySelector(".arrow_left");
    next.onclick = function () {
        next_pic();
    };
    prev.onclick = function () {
        prev_pic();
    };
    /*注意的是，这里wrap.style.left是一个字符串，所以要转化为数字才能进行计算，而设定left时就要加上px成为一个字符串了。*/

    /*也就是说，当我们点击下一张到-3600px（这是第一张图片）时，我们需要下次跳转到第二张，即-1200px；这样才能正常跳转；

  同理，当我们点击上一张到0px（这是第五张图片时），我们希望下次跳转到第四张，即-2400px；*/
    function next_pic() {
        index++;
        if (index > 4) {
            index = 0;
        }
        showCurrentDot();
        var newLeft;
        if (wrap.style.left === "-6660px") {
            newLeft = -2220;
        } else {
            newLeft = parseInt(wrap.style.left) - 1110;
        }
        wrap.style.left = newLeft + "px";
    }

    function prev_pic() {
        index--;
        if (index < 0) {
            index = 4;
        }
        showCurrentDot();
        var newLeft;
        if (wrap.style.left === "0px") {
            newLeft = -4440;
        } else {
            newLeft = parseInt(wrap.style.left) + 1110;
        }
        wrap.style.left = newLeft + "px";
    }

    var timer = null;

    function autoPlay() {
        timer = setInterval(function () {
            next_pic();
        }, 2000);
    }

    autoPlay();

    /*我们希望轮播图停止播放，只要clearInterval()即可*/
    var container = document.querySelector(".banner-container");
    container.onmouseenter = function () {
        clearInterval(timer);
    }
    container.onmouseleave = function () {
        autoPlay();
    }

    var index = 0;
    var dots = document.getElementById("dot").getElementsByTagName("span");

    function showCurrentDot() {
        for (var i = 0, len = dots.length; i < len; i++) {
            dots[i].className = "";
        }
        dots[index].className = "on";
    }

    for (var i = 0, len = dots.length; i < len; i++) {
        (function (i) {
            dots[i].onclick = function () {
                var dis = index - i;
                if (index == 4 && parseInt(wrap.style.left) !== -5550) {
                    dis = dis - 5;
                }
                //和使用prev和next相同，在最开始的照片5和最终的照片1在使用时会出现问题，导致符号和位数的出错，做相应地处理即可
                if (index == 0 && parseInt(wrap.style.left) !== -1110) {
                    dis = 5 + dis;
                }
                wrap.style.left = (parseInt(wrap.style.left) + dis * 1110) + "px";
                index = i;
                showCurrentDot();
            }
        })(i);
    }

    $(window).scroll(function () {
        if ($(window).scrollTop() >= $(".top").height()) {//如果从上往下滑动的高度大于login的高度
            $(".banner-left").css("display", "block");
        } else {
            $(".banner-left").css("display", "none");
        }
    });

    function cc(chuantong, xiandai, leixingchauntong, leixingxiandai, textchuantong, textxiandai, noitice
        , collection, rankingList, rankingListtoggle, Give) {
        $(chuantong).hover(function () {
            $(leixingchauntong).stop().fadeIn();
            $(leixingxiandai).stop().fadeOut();
            $(this).addClass("activeLi");
            $(xiandai).removeClass("activeLi");
            $(noitice).text(textchuantong);
        });
        $(xiandai).hover(function () {
            $(leixingxiandai).stop().fadeIn();
            $(leixingchauntong).stop().fadeOut();
            $(this).addClass("activeLi");
            $(chuantong).removeClass("activeLi");
            $(noitice).text(textxiandai);
        });

        $(collection).hover(function () {
            $(this).toggleClass("activeDiv");
            $(rankingList).show();
            $(rankingListtoggle).hide();
        });
        $(Give).hover(function () {
            $(this).toggleClass("activeDiv");
            $(rankingListtoggle).show();
            $(rankingList).hide();
        });

    }

    cc("#chauntong-1", "#xiandai-1", ".shougongyi-left-chauntong", ".shougongyi-left-xiandai", "檐前袅袅游丝上，上有蜘蛛巧来往。",
        "即使一根线，也要注入生命。", ".shougongyi-Notice p", ".Collection-1", ".Ranking-List-1", ".Ranking-List-toggle-1", ".Give-the-thumbs-up-1");

    cc("#chauntong-2", "#xiandai-2", ".shufa-left-chauntong", ".shufa-left-xiandai", "兴来一挥百纸尽，骏马倏忽踏九州。",
        "文学是一字一字的救出自己，书法是一笔一笔的救出自己。", ".shufa-Notice p", ".Collection-2", ".Ranking-List-2", ".Ranking-List-toggle-2", ".Give-the-thumbs-up-2");

    cc("#chauntong-3", "#xiandai-3", ".huihua-left-chauntong", ".huihua-left-xiandai", "世间无限丹青手，一片伤心画不成。",
        "为寂寞的夜空画一个月亮，把我画在月亮下面歌唱。", ".huihua-Notice p", ".Collection-3", ".Ranking-List-3", ".Ranking-List-toggle-3", ".Give-the-thumbs-up-3");

    cc("#chauntong-4", "#xiandai-4", ".chuangxin-left-chauntong", ".chuangxin-left-xiandai", "一尺深红蒙曲尘，天生旧物不如新。",
        "创新的秘密在于知道如何把你的智谋藏而不露。", ".chaungxin-Notice p", ".Collection-4", ".Ranking-List-4", ".Ranking-List-toggle-4", ".Give-the-thumbs-up-4");

    cc("#chauntong-5", "#xiandai-5", "diaosu-left-chauntong", ".diaosu-left-xiandai", "粉默消磨雕刻在，神仙飘忽有无中。",
        "心是最善巧的工匠，可以把自己雕塑成佛，也可雕成魔。", ".diaosu-Notice p", ".Collection-5", ".Ranking-List-5", ".Ranking-List-toggle-5", ".Give-the-thumbs-up-5");

    cc("#chauntong-6", "#xiandai-6", ".shifu-left-chauntong", ".shifu-left-xiandai", "画罗织扇总如云，细草如泥簇蝶裙。",
        "后来，我再也找不到比校服更像青春的衣服。", ".shifu-Notice p", ".Collection-6", ".Ranking-List-6", ".Ranking-List-toggle-6", ".Give-the-thumbs-up-6");

    cc("#chauntong-7", "#xiandai-7", ".minzugongyi-left-chauntong", ".minzugongyi-left-xiandai", "马头琴上卷胡风，龙骥曾惊罗马宫。",
        "人生若只如初见，何事秋风悲画扇。", ".minzugongyi-Notice p", ".Collection-7", ".Ranking-List-7", ".Ranking-List-toggle-7", ".Give-the-thumbs-up-7");

    cc("#chauntong-8", "#xiandai-8", ".guwangjinlai-left-chauntong", ".guwangjinlai-left-xiandai", "但愿人长久，千里共婵娟。",
        "遥知兄弟登高处，遍插茱萸少一人。", ".guwangjinlai-Notice p", ".Collection-8", ".Ranking-List-8", ".Ranking-List-toggle-8", ".Give-the-thumbs-up-8");

    function dingwei(idstart, idend) {
        $(idstart).click(function () {
            var city_top = $(idend).offset().top;
            $('html,body').animate({ scrollTop: city_top }, 500);
        })
    };

    dingwei(".maodian6", '#1');
    dingwei(".maodian2", '#2');
    dingwei(".maodian3", '#3');
    dingwei(".maodian4", '#4');
    dingwei(".maodian5", '#5');

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
            var city_top = $(idend).offset().top - 80;
            $('html,body').animate({ scrollTop: city_top }, 500);
        })
    };

    function dingweicc(idstart, idend) {
        $(idstart).click(function () {
            var city_top = 0;
            $('html,body').animate({ scrollTop: city_top }, 500);
        })
    };

    dingweicc(".maodian1", '.top');

    /*悬浮end*/
});