(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    /**
     *
     * Created by natsuki on 16/4/13.
     */
    var defaultscripts;
    (function (defaultscripts) {
        defaultscripts.ARRAY = [
            "./libs/require.js",
            "./test.js",
        ];
    })(defaultscripts = exports.defaultscripts || (exports.defaultscripts = {}));
});
//# sourceMappingURL=defaultscripts.js.map