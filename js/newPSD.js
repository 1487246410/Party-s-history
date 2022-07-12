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
    $("#yanzheng").validate({//设置规范
        rules:{//规范
            usertest:{                //密码的name
                required:true,             //不为空
                rangelength:[6,20]             //输入的字符串的长度6-20
            },
            psdtest:{        //这个是确认密码的name
                required:true,            //不为空
                equalTo:".userInput",         //和第一个输入的密码，必须一样，引号里填的是class
                rangelength:[6,20]              //输入的字符串是6-20位
            },
        },
        messages:{
            usertest:{
                required:"密码不能为空",
                rangelength:"请输入6-20位有效密码"
            },
            psdtest:{
                required:"密码不能为空",
                equalTo:"与第一次密码输入不匹配",
                rangelength:"请输入6-20位有效密码"
            },
        },
    })
});