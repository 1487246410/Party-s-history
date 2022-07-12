
$(document).ready(function () {                    //有填的不规范的就不能提交
    $.validator.setDefaults({
        submitHandler: function() {
            alert("提交");
        }
    });
    jQuery.validator.addMethod("isPhone", function(value, element) {            //验证手机号的
        var length = value.length;
        var mobile = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
        return this.optional(element) || (length == 11 && mobile.test(value));
    }, "请填写有效的手机号");


    $("#renzheng").validate({
        rules:{
            name:{
                required:true
            },
            id:{
                required:true,
                rangelength:[18,18]
            },
            phone:{
                required:true,
                isPhone:true
            },
            img:{
                required:true
            },
            email:{
                email: true,
                required:true
            },
            up:{
                required:true
            },
            class: {
                required:true
            },
        },
        messages:{
            name:{
                required:"请输入真实姓名"
            },
            id:{
                required:"请输入有效证件号",
                rangelength:"请输入有效证件号"
            },
            phone:{
                required:"请输入有效手机号",
                isPhone:"请输入有效手机号"
            },
            img:{
                required:"请输入验证码"
            },
            email:{
                email: "请输入有效email",
                required:"请输入有效email"
            },
            up:{
                required:"请选择文件"
            },
            class: {
                required:"请输入认证领域"
            },
            },
    });
});