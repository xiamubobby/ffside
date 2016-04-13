/**
 * Created by natsuki on 16/4/13.
 */
import {BASE_URL} from "../configs"
import {Request} from "sdk/request"
export namespace Rest {
    export var BASE_URL = BASE_URL
    enum HttpPredicate {
        GET,
        POST,
    }
    class WebInterface {
        path:string
        method:HttpPredicate

        constructor(path:string, method:HttpPredicate) {
            this.path = path
            this.method = method
           }
    }
    class FirefoxAddonWebInterface extends WebInterface {
        caSignal: string
        acSignal: string
        constructor(signal: string, path: string, method: HttpPredicate) {
            super(path, method)
            this.caSignal = `${signal}_request`
            this.acSignal = `${signal}_response`
        }
        emit(window, payload: {}) {
            window.self.port.emit(this.caSignal, payload)
        }
    }

    var loginInterface = new FirefoxAddonWebInterface("login", "user/login", HttpPredicate.GET)
    export var interfaces = {
        login: new FirefoxAddonWebInterface("login", "user/login", HttpPredicate.GET)
    }
    
    export function initWithWindow(window) {
        for (let interfaceKey in interfaces) {
            if (interfaces.hasOwnProperty(interfaceKey)) {
                let interfase = interfaces[interfaceKey]
                window.self.port.on(interfase.acSignal, function (response) {
                    console.log(response.json)
                })
            }
        }
    }

    export function initWithWorker(worker) {
        for (let interfaceKey in interfaces) {
            console.log(interfaces[interfaceKey])
            if (interfaces.hasOwnProperty(interfaceKey)) {
                let interfase = interfaces[interfaceKey]
                worker.port.on(interfase.caSignal, function (payload) {
                    let req = Request({
                        url: `${BASE_URL}${interfase.path}`,
                        content: payload,
                        onComplete: function (response) {
                            worker.port.emit(interfase.acSignal, response)
                        }
                    })
                    switch (interfase.method) {
                        case HttpPredicate.GET:
                            req.get()
                        case HttpPredicate.POST:
                            req.post()
                    }
                })
            }
        }
    }
}