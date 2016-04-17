/**
 * Created by natsuki on 16/4/13.
 */
/// <reference path="data/modules/protos" />
var self = require("sdk/self");
var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");
var pageMod = require("sdk/page-mod");
var Request = require("sdk/request").Request;
console.log(self.data.url("configs.js"));
var button = buttons.ActionButton({
    id: "ikanicon",
    label: "Visit Me",
    icon: {
        "16": "./icon.png",
        "32": "./icon.png",
        "64": "./icon.png"
    },
    onClick: function (state) {
        tabs.open({
            url: "http://www.youku.com/",
            isPrivate: true
        });
    }
});
function withJQueryInjected(url) {
    var i = arguments.length;
    var ret = [];
    while (i-- > 0) {
        ret.push(arguments[i]);
    }
    ret = ["./libs/jquery-1.12.3.min.js", "./sitemodules/tstest.js", "./sitemodules/basemodule.js"].concat(ret);
    return ret;
}
require("./data/modules/pagemods/youku-addon");
// var youkuMod = pageMod.PageMod({
//     include: "*.youku.com",
//     contentScriptFile: withJQueryInjected("./sitemodules/youku/youkutstest.js"),
//     onAttach: youkuInit
// })
// function baseinit(worker) {
//     console.log("log")
//     console.log(tbe())
//     // worker.port.on("REQ", function(path) {
//     //     Request({
//     //         url: BASE_URL + path,
//     //         onComplete: function(response) {
//     //             console.log(response.json)
//     //         }
//     //     }).get()
//     // })
//
// }
// function youkuInit(worker) {
//     baseinit(worker)
// } 
//# sourceMappingURL=index2.js.map