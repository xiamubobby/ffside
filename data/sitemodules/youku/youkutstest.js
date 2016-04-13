"use strict";
/**
 *
 * Created by natsuki on 16/4/12.
 */
console.log("0");
var protos_1 = require("../../modules/protos");
//import * as $ from "jquery"
console.log("1");
$(document).ready(function () {
    console.log("2");
    if (confirm("u r eating shit!!!")) {
        protos_1.Rest.interfaces.login.emit(window, {
            account: "kanhuangpian",
            password: "kanhuangpian"
        });
    }
});
//# sourceMappingURL=youkutstest.js.map