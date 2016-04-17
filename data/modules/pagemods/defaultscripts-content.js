define(["require", "exports"], function (require, exports) {
    "use strict";
    /**
     *
     * Created by natsuki on 16/4/13.
     */
    var defaultscripts;
    (function (defaultscripts) {
        defaultscripts.ARRAY = [
            // "./libs/jquery-1.12.3.min.js",
            // "./modules/protos.js",
            // "./sitemodules/sitebasecontentscript.js"
            "./libs/require.js",
            "./test-content.js"
        ];
    })(defaultscripts = exports.defaultscripts || (exports.defaultscripts = {}));
});
