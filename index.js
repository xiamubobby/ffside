var self = require("sdk/self");

var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");
var pageMod = require("sdk/page-mod");
var Request = require("sdk/request").Request;
require("sdk/preferences/service").set("extensions.@ffside.sdk.console.logLevel", "all")
var BASE_URL = "http:127.0.0.1:8080/"

function withJQueryInjected(url) {
    var i = arguments.length
    var ret = []
    while ( i --> 0 ) {
        ret.push(arguments[i])
    }
    ret = ["./libs/jquery-1.12.3.min.js", "./sitemodules/tstest.js", "./sitemodules/basemodule.js"].concat(ret)
    return ret
}

var button = buttons.ActionButton({
    id: "ikanicon",
    label: "Visit Me",
    icon: {
        "16": "./icon.png",
        "32": "./icon.png",
        "64": "./icon.png"
    },
    onClick: handleClick
});
function handleClick(state) {
    tabs.open({
        url: "http://www.youku.com/",
        isPrivate: true
    });
}
var youkuMod = pageMod.PageMod({
    include: "*.youku.com",
    // contentScriptFile: ["./libs/jquery-1.12.3.min.js", "./sitemodules/youku/youku.js"]//window.alert('from here')"
    contentScriptFile: withJQueryInjected("./sitemodules/youku/youkutstest.js"),
    onAttach: youkuInit
    // contentStyleFile: "./styletest.css"
})
function baseinit(worker) {
    console.log(worker)
    worker.port.on("REQ", function(path) {
        Request({
            url: BASE_URL + path,
            onComplete: function(response) {
                console.log(response.json)
            }
        }).get()
    })

}
function youkuInit(worker) {
    baseinit(worker)
    worker.port.emit("aud")
}
// tabs.on('ready', functi on(tab) {
//     console.log('tab is loaded', tab.title, tab.url);
//     if (tab.url.match("youku")) {
//         console.log('tab is loaded2', tab.title, tab.url)
//     }
// });
function onOpen(tab) {
    console.log(tab.url, "is open")
    // tab.on("pageshow", function(){ console.log(tab.url, "is pageshow") });
    // tab.on("activate", function(){ console.log(tab.url, "is activate") });
    // tab.on("deactivate", function(){ console.log(tab.url, "is deactivate") });
    // tab.on("close", function(){ console.log(tab.url, "is close") });
    if (false) {
        tab.on("deactivate", function () {
            var worker = tab.attach({
                contentScriptFile: "./sitemodules/youku/youku.js",
            })
            worker.port.emit("aud")
        })
    }
}
tabs.on('open', onOpen)

function dummy(text, callback) {
    callback(text);
}

exports.dummy = dummy;
