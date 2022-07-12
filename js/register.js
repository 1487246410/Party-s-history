$(document).ready(function () {

    function all(id,active,name) {
        $(id).hover(function () {
            $(active).show();
        },function () {
            $(active).hide();
        });
        $(active).click(function() {
            $(name).val("").focus(); // 清空并获得焦点
            $(active).hide();
        });
    }

    function other(id){
        $(id).hover(function () {
            $(this).show();
        },function () {
            $(this).hide();
        });
    }

    other($(".cuowu"));
    other($(".cuowu1"));
    other($(".cuowu2"));
    other($(".cuowu3"));
    other($(".cuowu4"));

    all($(".userInput"),$(".cuowu"),$("input[name='usertest']"));
    all($(".phoneInput"),$(".cuowu1"),$("input[name='phonetest']"));
    all($(".msgInput"),$(".cuowu2"),$("input[name='msgtest']"));
    all($(".psdInput"),$(".cuowu3"),$("input[name='psdtest1']"));
    all($(".psd1Input"),$(".cuowu4"),$("input[name='psdtest2']"));

    $.validator.setDefaults({
        submitHandler: function() {
        }
    });
    jQuery.validator.addMethod("isPhone", function(value, element) {//验证手机号的
        var length = value.length;
        var mobile = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
        return this.optional(element) || (length == 11 && mobile.test(value));
    }, "X");


    $("#yanzheng").validate({//设置规范
        rules:{//规范
            usertest:{          //用户名的name
                required:true,   //不为空
                rangelength:[1,10]             //输入的字符串的长度6-20
            },
            phonetest:{            //手机号的name
                required:true,           //不为空
                isPhone:true           //使用验证手机号的那个
            },
            msgtest:{                  //验证码的name
                required:true            //不为空
            },
            psdtest1:{                //密码的name
                required:true,             //不为空
                rangelength:[6,20]             //输入的字符串的长度6-20
            },
            psdtest2:{        //这个是确认密码的name
                required:true,            //不为空
                equalTo:".psdInput",         //和第一个输入的密码，必须一样，引号里填的是class
                rangelength:[6,20]              //输入的字符串是6-20位
            },
        },
        messages:{
            usertest:{              //这个是和上面的对应，不符合上面的要求就显示引号里的内容，全是大写的x
                required:"用户名不能为空",
                rangelength:"请输入6-20位有效用户名称"
            },
            phonetest:{
                required:"手机号不能为空",
                isPhone:"请输入有效手机号"
            },
            msgtest:{
                required:"验证码不能为空"
            },
            psdtest1:{
                required:"密码不能为空",
                rangelength:"请输入6-20位有效密码"
            },
            psdtest2:{
                required:"密码不能为空",
                equalTo:"与第一次密码输入不匹配",
                rangelength:"请输入6-20位有效密码"
            },
        },
    })
});