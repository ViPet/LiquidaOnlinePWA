webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "app-publisher, app-subscriber {\n  display: block;\n  float: left;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>{{title}}</h1>\n<div *ngIf=\"session\">\n  <app-publisher [session]=\"session\"></app-publisher>\n  <app-subscriber *ngFor=\"let stream of streams\" [stream]=\"stream\" [session]=\"session\"></app-subscriber>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__opentok_service__ = __webpack_require__("./src/app/opentok.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(ref, opentokService) {
        this.ref = ref;
        this.opentokService = opentokService;
        this.title = 'Angular Basic Video Chat';
        this.streams = [];
        this.changeDetectorRef = ref;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.opentokService.initSession().then(function (session) {
            _this.session = session;
            _this.session.on('streamCreated', function (event) {
                _this.streams.push(event.stream);
                _this.changeDetectorRef.detectChanges();
            });
            _this.session.on('streamDestroyed', function (event) {
                var idx = _this.streams.indexOf(event.stream);
                if (idx > -1) {
                    _this.streams.splice(idx, 1);
                    _this.changeDetectorRef.detectChanges();
                }
            });
        })
            .then(function () { return _this.opentokService.connect(); })
            .catch(function (err) {
            console.error(err);
            alert('Unable to connect. Make sure you have updated the config.ts file with your OpenTok details.');
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__opentok_service__["a" /* OpentokService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_1__opentok_service__["a" /* OpentokService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__publisher_publisher_component__ = __webpack_require__("./src/app/publisher/publisher.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__subscriber_subscriber_component__ = __webpack_require__("./src/app/subscriber/subscriber.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__opentok_service__ = __webpack_require__("./src/app/opentok.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__publisher_publisher_component__["a" /* PublisherComponent */],
                __WEBPACK_IMPORTED_MODULE_4__subscriber_subscriber_component__["a" /* SubscriberComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__opentok_service__["a" /* OpentokService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/opentok.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpentokService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__opentok_client__ = __webpack_require__("./node_modules/@opentok/client/dist/js/opentok.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__opentok_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__opentok_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__("./src/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OpentokService = (function () {
    function OpentokService() {
    }
    OpentokService.prototype.getOT = function () {
        return __WEBPACK_IMPORTED_MODULE_1__opentok_client__;
    };
    OpentokService.prototype.initSession = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].API_KEY && __WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].TOKEN && __WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].SESSION_ID) {
            this.session = this.getOT().initSession(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].API_KEY, __WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].SESSION_ID);
            this.token = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].TOKEN;
            return Promise.resolve(this.session);
        }
        else {
            return fetch(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].SAMPLE_SERVER_BASE_URL + '/session')
                .then(function (data) { return data.json(); })
                .then(function (json) {
                _this.session = _this.getOT().initSession(json.apiKey, json.sessionId);
                _this.token = json.token;
                return _this.session;
            });
        }
    };
    OpentokService.prototype.connect = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.session.connect(_this.token, function (err) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(_this.session);
                }
            });
        });
    };
    OpentokService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], OpentokService);
    return OpentokService;
}());



/***/ }),

/***/ "./src/app/publisher/publisher.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/publisher/publisher.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"{'publishing': publishing}\" #publisherDiv></div>\n"

/***/ }),

/***/ "./src/app/publisher/publisher.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublisherComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__opentok_service__ = __webpack_require__("./src/app/opentok.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var publish = function () {
};
var PublisherComponent = (function () {
    function PublisherComponent(opentokService) {
        this.opentokService = opentokService;
        this.publishing = false;
    }
    PublisherComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var OT = this.opentokService.getOT();
        this.publisher = OT.initPublisher(this.publisherDiv.nativeElement, { insertMode: 'append' });
        if (this.session) {
            if (this.session['isConnected']()) {
                this.publish();
            }
            this.session.on('sessionConnected', function () { return _this.publish(); });
        }
    };
    PublisherComponent.prototype.publish = function () {
        var _this = this;
        this.session.publish(this.publisher, function (err) {
            if (err) {
                alert(err.message);
            }
            else {
                _this.publishing = true;
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ViewChild */])('publisherDiv'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */])
    ], PublisherComponent.prototype, "publisherDiv", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", OT.Session)
    ], PublisherComponent.prototype, "session", void 0);
    PublisherComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-publisher',
            template: __webpack_require__("./src/app/publisher/publisher.component.html"),
            styles: [__webpack_require__("./src/app/publisher/publisher.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__opentok_service__["a" /* OpentokService */]])
    ], PublisherComponent);
    return PublisherComponent;
}());



/***/ }),

/***/ "./src/app/subscriber/subscriber.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/subscriber/subscriber.component.html":
/***/ (function(module, exports) {

module.exports = "<div #subscriberDiv></div>\n"

/***/ }),

/***/ "./src/app/subscriber/subscriber.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscriberComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__opentok_client__ = __webpack_require__("./node_modules/@opentok/client/dist/js/opentok.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__opentok_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__opentok_client__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SubscriberComponent = (function () {
    function SubscriberComponent() {
    }
    SubscriberComponent.prototype.ngAfterViewInit = function () {
        var subscriber = this.session.subscribe(this.stream, this.subscriberDiv.nativeElement, function (err) {
            if (err) {
                alert(err.message);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ViewChild */])('subscriberDiv'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */])
    ], SubscriberComponent.prototype, "subscriberDiv", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__opentok_client__["Session"])
    ], SubscriberComponent.prototype, "session", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__opentok_client__["Stream"])
    ], SubscriberComponent.prototype, "stream", void 0);
    SubscriberComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-subscriber',
            template: __webpack_require__("./src/app/subscriber/subscriber.component.html"),
            styles: [__webpack_require__("./src/app/subscriber/subscriber.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SubscriberComponent);
    return SubscriberComponent;
}());



/***/ }),

/***/ "./src/config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    // Set this to the base URL of your sample server, such as 'https://your-app-name.herokuapp.com'.
    // Do not include the trailing slash. See the README for more information:
    SAMPLE_SERVER_BASE_URL: 'http://YOUR-SERVER-URL',
    // OR, if you have not set up a web server that runs the learning-opentok-php code,
    // set these values to OpenTok API key, a valid session ID, and a token for the session.
    // For test purposes, you can obtain these from https://tokbox.com/account.
    API_KEY: '46101642',
    SESSION_ID: '2_MX40NjEwMTY0Mn5-MTUyMzk1MTEyNDg5OH5CbXg1cEtiaWlIZGJhbDkyZjlIZzFOLzl-fg',
    TOKEN: 'T1==cGFydG5lcl9pZD00NjEwMTY0MiZzaWc9MmMwZTc3YmY2NTM1ODM0ZjNkZDIwNzY0ZjMxNzg1M2ViYjdkYjBlZTpzZXNzaW9uX2lkPTJfTVg0ME5qRXdNVFkwTW41LU1UVXlNemsxTVRFeU5EZzVPSDVDYlhnMWNFdGlhV2xJWkdKaGJEa3laamxJWnpGT0x6bC1mZyZjcmVhdGVfdGltZT0xNTIzOTUxMTI0Jm5vbmNlPTEzOTk5Njc2NTMmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTUyNDAzNzUyNA=='
});


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map