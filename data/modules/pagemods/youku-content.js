define(["require", "exports", "./defaultscripts-addon", "../protos", "sdk/page-mod"], function (require, exports, defaultscripts_addon_1, protos_1, pageMod) {
    "use strict";
    var youkuMod = pageMod.PageMod({
        include: "*.youku.com",
        //contentScriptFile: defaultscripts.ARRAY.concat(["./sitemodules/youku/youkutstest.js"]),
        contentScriptFile: defaultscripts_addon_1.defaultscripts.ARRAY.concat([]),
        onAttach: init
    });
    function init(worker) {
        protos_1.Rest.initWithWorker(worker);
    }
});
