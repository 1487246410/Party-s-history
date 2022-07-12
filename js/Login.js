$(document).ready(function () {
    function all1(id,active,name) {
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
    all1($(".userInput"),$(".cuowu"),$("input[name='usertest']"));
    all1($(".psdInput"),$(".cuowu1"),$("input[name='psdtest']"));

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
                rangelength:[1,11],             //输入的字符串的长度6-20
                isPhone:true,
            },
            psdtest:{                //密码的name
                required:true,             //不为空
                rangelength:[6,20]             //输入的字符串的长度6-20
            },
        },
        messages:{
            usertest:{              //这个是和上面的对应，不符合上面的要求就显示引号里的内容，全是大写的x
                required:"用户名不能为空",
                isPhone: "请输入正确的11位有效手机号",
                rangelength:"请输入1-11位有效用户名",
            },
            psdtest:{
                required:"密码不能为空",
                rangelength:"请输入6-20位有效密码"
            },
        },
    })
});