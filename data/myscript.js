$(document).ready(function() {
    var hostname = location.hostname;

    var ikan_account = "361714571@qq.com";
    var ikan_pwd = "12345678";

    if(hostname.match("youku")){
        //youku
        $("#passport").val(ikan_account);
        $("#password").val(ikan_pwd);
        $(document).on("focus",".form_input form_input_l",function(){
            $("#passport").val(ikan_account);
            $("#password").val(ikan_pwd);
        })
    }else if(hostname.match("iqiyi")){
        //iqiyi
        $("input[data-loginbox-elem='emailInput']").val(ikan_account);
        $("input[data-loginbox-elem='passwdInput']").val(ikan_account);
        $(document).on("focus",".in-txt",function(){
            $("input[data-loginbox-elem='emailInput']").val(ikan_account);
            $("input[data-loginbox-elem='passwdInput']").val(ikan_account);
        })

    }else if(hostname.match("tudou")){
        //tudou
        $("#loginname").val(ikan_account);
        $("#password1").val(ikan_pwd);
        $(document).on("focus",".loginname,.password",function(){
            $("#loginname").val(ikan_account);
            $("#password1").val(ikan_pwd);
        })

    }else if(hostname.match("qq")){
        //qq
        $("#u").val(ikan_account);
        $("#p").val(ikan_pwd);
        $(document).on("focus",".inputstyle",function(){
            $("#u").val(ikan_account);
            $("#p").val(ikan_pwd);
        })

    }else if(hostname.match("sohu")){
        //sohu
        $("input[name='email']").val(ikan_account);
        $("input[name='password']").val(ikan_pwd);
        $(document).on("focus",".input-holder",function(){
            $("input[name='email']").val(ikan_account);
            $("input[name='password']").val(ikan_pwd);
        })
    }else if(hostname.match("le")){
        //letv
        $("#loginname").val(ikan_account);
        $("#password1").val(ikan_pwd);
        $(document).on("focus",".login-input",function(){
            $("#loginname").val(ikan_account);
            $("#password").val(ikan_pwd);
        })
    }


    //todo 1 其他浏览器 2 查看账号封停情况 3 extension to plugin


});