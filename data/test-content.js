/**
 *
 * Created by natsuki on 16/4/14.
 */
// (function() {
//     var global = this;
//     require.load = function (context, moduleName, url) {
//         var xhr;
//         xhr = new XMLHttpRequest();
//         xhr.open("GET", url, true);
//         xhr.onreadystatechange = function (e) {
//             if (xhr.readyState === 4 && xhr.status === 200) {
//                 eval.call(global, xhr.responseText + '\n//@ sourceURL=' + url);
//                 context.completeLoad(moduleName)
//             }
//         };
//         xhr.send(null);
//     };
// })();
// require.config({
//     paths: { jjj: 'http://xiamubobby.gicp.net:41780/jjj.js' }
// });
// require(["jjj"], function(a) {
//     console.log(a)
// });
// require.config({
//     paths: { jjj: "http://xiamubobby.gicp.net:41780/jjj.js" }
// });
require.config({
    baseUrl: "./data/",
});
var a = "http://xiamubobby.gicp.net:41780/jjj.js";
var b = "resource://@ffside/data/configs-content.js";
var c = "./data/configs-content.js";
require([b], function (aa, bb, cc, d) {
    console.log("zhu3");
    console.log(aa);
    console.log(bb);
    console.log(cc);
    console.log(d);
});
