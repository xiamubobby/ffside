/**
 *
 * Created by natsuki on 16/4/12.
 */
$(document).ready(function () {
    // $.getScript("resource://sitemodules/basemodule.js", function(){
    //     alert("Script loaded but not necessarily executed.");
    //     alert(judas)
    // });

    if (confirm("u r eating shit!!!")) {
        Rest.interfaces.login.emit(window, {
            account: "kanhuangpian",
            password: "kanhuangpian"
        })
    }
})

