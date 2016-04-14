/**
 *
 * Created by natsuki on 16/4/13.
 */
(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    console.log("alpha");
    var BASE_URL = "http://127.0.0.1:8080/";
    console.log("beta");
    return BASE_URL;
});
//# sourceMappingURL=configs.js.map