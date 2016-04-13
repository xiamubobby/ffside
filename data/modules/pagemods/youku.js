"use strict";
/**
 *
 * Created by natsuki on 16/4/13.
 */
/// <reference path="./defaultscripts" />
var defaultscripts_1 = require("./defaultscripts");
var protos_1 = require("../protos");
var pageMod = require("sdk/page-mod");
var youkuMod = pageMod.PageMod({
    include: "*.youku.com",
    contentScriptFile: defaultscripts_1.defaultscripts.ARRAY.concat(["./sitemodules/youku/youkutstest.js"]),
    onAttach: init
});
function init(worker) {
    protos_1.Rest.initWithWorker(worker);
}
//# sourceMappingURL=youku.js.map