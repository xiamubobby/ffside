/**
 * 
 * Created by natsuki on 16/4/13.
 */
/// <reference path="./defaultscripts" />
import {defaultscripts} from "./defaultscripts"
import {Rest} from "../protos"
import * as pageMod from "sdk/page-mod"
var youkuMod = pageMod.PageMod({
    include: "*.youku.com",
    //contentScriptFile: defaultscripts.ARRAY.concat(["./sitemodules/youku/youkutstest.js"]),
    contentScriptFile: defaultscripts.ARRAY.concat([]),
    onAttach: init
})
function init(worker) {
    Rest.initWithWorker(worker)
}

