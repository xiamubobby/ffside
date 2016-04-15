(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", "./defaultscripts", "../protos", "sdk/page-mod"], factory);
    }
})(function (require, exports) {
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
        //contentScriptFile: defaultscripts.ARRAY.concat(["./sitemodules/youku/youkutstest.js"]),
        contentScriptFile: defaultscripts_1.defaultscripts.ARRAY.concat([]),
        onAttach: init
    });
    function init(worker) {
        protos_1.Rest.initWithWorker(worker);
    }
});
//# sourceMappingURL=youku.js.map