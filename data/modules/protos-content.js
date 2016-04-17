var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "sdk/request"], function (require, exports, request_1) {
    "use strict";
    var Rest;
    (function (Rest) {
        Rest.BASE_URL = Rest.BASE_URL;
        var HttpPredicate;
        (function (HttpPredicate) {
            HttpPredicate[HttpPredicate["GET"] = 0] = "GET";
            HttpPredicate[HttpPredicate["POST"] = 1] = "POST";
        })(HttpPredicate || (HttpPredicate = {}));
        var WebInterface = (function () {
            function WebInterface(path, method) {
                this.path = path;
                this.method = method;
            }
            return WebInterface;
        }());
        var FirefoxAddonWebInterface = (function (_super) {
            __extends(FirefoxAddonWebInterface, _super);
            function FirefoxAddonWebInterface(signal, path, method) {
                _super.call(this, path, method);
                this.caSignal = signal + "_request";
                this.acSignal = signal + "_response";
            }
            FirefoxAddonWebInterface.prototype.emit = function (window, payload) {
                window.self.port.emit(this.caSignal, payload);
            };
            return FirefoxAddonWebInterface;
        }(WebInterface));
        var loginInterface = new FirefoxAddonWebInterface("login", "user/login", HttpPredicate.GET);
        Rest.interfaces = {
            login: new FirefoxAddonWebInterface("login", "user/login", HttpPredicate.GET)
        };
        function initWithWindow(window) {
            for (var interfaceKey in Rest.interfaces) {
                if (Rest.interfaces.hasOwnProperty(interfaceKey)) {
                    var interfase = Rest.interfaces[interfaceKey];
                    window.self.port.on(interfase.acSignal, function (response) {
                        console.log(response.json);
                    });
                }
            }
        }
        Rest.initWithWindow = initWithWindow;
        function initWithWorker(worker) {
            var _loop_1 = function(interfaceKey) {
                console.log(Rest.interfaces[interfaceKey]);
                if (Rest.interfaces.hasOwnProperty(interfaceKey)) {
                    var interfase_1 = Rest.interfaces[interfaceKey];
                    worker.port.on(interfase_1.caSignal, function (payload) {
                        var req = request_1.Request({
                            url: "" + Rest.BASE_URL + interfase_1.path,
                            content: payload,
                            onComplete: function (response) {
                                worker.port.emit(interfase_1.acSignal, response);
                            }
                        });
                        switch (interfase_1.method) {
                            case HttpPredicate.GET:
                                req.get();
                            case HttpPredicate.POST:
                                req.post();
                        }
                    });
                }
            };
            for (var interfaceKey in Rest.interfaces) {
                _loop_1(interfaceKey);
            }
        }
        Rest.initWithWorker = initWithWorker;
    })(Rest = exports.Rest || (exports.Rest = {}));
});
