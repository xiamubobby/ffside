(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", "../modules/protos"], factory);
    }
})(function (require, exports) {
    "use strict";
    /**
     *
     * Created by natsuki on 16/4/13.
     */
    console.log("a");
    var protos_1 = require("../modules/protos");
    console.log("b");
    protos_1.Rest.initWithWindow(window);
});
//# sourceMappingURL=sitebasecontentscript.js.map