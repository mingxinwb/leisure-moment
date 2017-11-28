webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Leisure Moment';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_conversation_panel_conversation_panel_component__ = __webpack_require__("../../../../../src/app/components/conversation-panel/conversation-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_moment_detail_moment_detail_component__ = __webpack_require__("../../../../../src/app/components/moment-detail/moment-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_moment_list_moment_list_component__ = __webpack_require__("../../../../../src/app/components/moment-list/moment-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_new_moment_new_moment_component__ = __webpack_require__("../../../../../src/app/components/new-moment/new-moment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_nickname_wrapper_nickname_wrapper_component__ = __webpack_require__("../../../../../src/app/components/nickname-wrapper/nickname-wrapper.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_socket_service__ = __webpack_require__("../../../../../src/app/services/socket.service.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_moment_list_moment_list_component__["a" /* MomentListComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_moment_detail_moment_detail_component__["a" /* MomentDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_new_moment_new_moment_component__["a" /* NewMomentComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_conversation_panel_conversation_panel_component__["a" /* ConversationPanelComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_nickname_wrapper_nickname_wrapper_component__["a" /* NicknameWrapperComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_12__app_routes__["a" /* routing */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__services_data_service__["a" /* DataService */],
                __WEBPACK_IMPORTED_MODULE_13__services_socket_service__["a" /* SocketService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_moment_list_moment_list_component__ = __webpack_require__("../../../../../src/app/components/moment-list/moment-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_moment_detail_moment_detail_component__ = __webpack_require__("../../../../../src/app/components/moment-detail/moment-detail.component.ts");



var routes = [
    {
        path: '',
        redirectTo: 'moments',
        pathMatch: 'full'
    },
    {
        path: 'moments',
        component: __WEBPACK_IMPORTED_MODULE_1__components_moment_list_moment_list_component__["a" /* MomentListComponent */]
    },
    {
        path: 'moments/:id',
        component: __WEBPACK_IMPORTED_MODULE_2__components_moment_detail_moment_detail_component__["a" /* MomentDetailComponent */]
    },
    {
        path: '**',
        redirectTo: 'moments'
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(routes);


/***/ }),

/***/ "../../../../../src/app/components/conversation-panel/conversation-panel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html, body {\n    margin: 0;\n    background-color: #16a9ee;\n    font-family: sans-serif;\n}\n\n.wrapper {\n    width: 600px;\n    height: 640px;\n    padding: 5px;\n    margin: 0 auto;\n    background-color: #5798d4;\n}\n\n.banner {\n    height: 80px;\n    width: 100%;\n}\n\n.banner p {\n    float: left;\n}\n\n.controls {\n    height: 100px;\n    margin: 5px 0;\n    position: relative;\n}\n\n.mainDisplay {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    position: relative;\n}\n\n.usersList {\n    height: 400px;\n    margin: 0;\n    background-color: #fff;\n    overflow: auto;\n    padding: 2px;\n    border-left: 1px solid black;\n    width: 30%;\n}\n\n.usersTitle {\n    margin: 0;\n    padding: 0;\n    height: 30px;\n    color: black;\n    text-align: center;\n    vertical-align: middle;\n}\n\n#participantList {  \n    height: 370px;\n    margin: 0;\n    padding: 0;\n    \n}\n\n#historyMsg {    \n    height: 400px;\n    background-color: #fff;\n    overflow: auto;\n    padding: 2px;\n    width: 70%;\n}\n\n#historyMsg img {\n    max-width: 99%;\n}\n\n.timespan {\n    color: #ddd;\n}\n\n.items {\n    height: 30px;\n}\n\n#colorStyle {\n    width: 50px;\n    border: none;\n    padding: 0;\n}\n\n/* custom the file input */\n.imageLabel {\n    position: relative;\n}\n\n#sendImage {\n    position: absolute;\n    width: 52px;\n    left: 0;\n    opacity: 0;\n    overflow: hidden;\n}\n/* end custom the file input */\n\n#messageInput {\n    width: 520px;\n    max-width: 520px;\n    height: 90px;\n    max-height: 90px;\n}\n\n#sendBtn {\n    width: 65px;\n    height: 96px;\n    float: right;\n}\n\n#emojiWrapper {\n    display: none;\n    width: 500px;\n    bottom: 105px;\n    position: absolute;\n    background-color: #aaa;\n    box-shadow: 0 0 10px #555;\n}\n\n#emojiWrapper img {\n    margin: 2px;\n    padding: 2px;\n    width: 25px;\n    height: 25px;\n}\n\n#emojiWrapper img:hover {\n    background-color: blue;\n}\n\n.emoji {\n    display: inline;\n}\n\nfooter {\n    text-align: center;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/conversation-panel/conversation-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"banner\">\n      <h1 id=\"welcomeName\">Let's Conversation</h1>\n      <span id=\"status\"></span>\n  </div>\n  <div class=\"mainDisplay\">\n    <div id=\"historyMsg\"></div>\n    <div class=\"usersList\">\n        <h4 class=\"usersTitle\">Online Members</h4>\n        <div id=\"participantList\" class=\"list-group\">\n            <a class=\"list-group-item\" *ngFor=\"let participant of participants\">\n                <span>{{ participant.value }}</span>\n            </a>\n        </div>\n    </div>\n  </div>\n  <div class=\"controls\">\n      <div class=\"items\">\n          <input id=\"colorStyle\" type=\"color\" placeholder=\"#000000\" title=\"font color\" />\n          <input id=\"emoji\" style=\"color:black\" type=\"button\" value=\"emoji\" title=\"emoji\" />\n          <label for=\"sendImage\" class=\"imageLabel\">\n              <input type=\"button\" style=\"color:black\" value=\"image\" />\n              <input id=\"sendImage\" type=\"file\" value=\"image\" />\n          </label>\n          <input id=\"clearBtn\" style=\"color:black\" type=\"button\" value=\"clear\" title=\"clear screen\" />\n      </div>\n      <textarea id=\"messageInput\" placeholder=\"enter to send\"></textarea>\n      <input id=\"sendBtn\" type=\"button\" class=\"btn btn-primary\" value=\"SEND\" />\n      <div id=\"emojiWrapper\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/conversation-panel/conversation-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConversationPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_socket_service__ = __webpack_require__("../../../../../src/app/services/socket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConversationPanelComponent = (function () {
    function ConversationPanelComponent(socketService) {
        this.socketService = socketService;
        this.userName = document.getElementById('userName').textContent;
    }
    ConversationPanelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socketService.conversation(this.userName);
        this.socketService.socket.on('usersList', function (users) {
            console.log(JSON.stringify(users));
            _this.participants = [JSON.stringify(users)];
        });
    };
    ;
    ConversationPanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-conversation-panel',
            template: __webpack_require__("../../../../../src/app/components/conversation-panel/conversation-panel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/conversation-panel/conversation-panel.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_socket_service__["a" /* SocketService */]])
    ], ConversationPanelComponent);
    return ConversationPanelComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/moment-detail/moment-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn {\n    background-color: #245685;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/moment-detail/moment-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf = \"moment\">\n  <div class=\"col-xs-12 col-md-4\">\n    <h2>\n      {{ moment.title }}\n    </h2>\n    <p>\n      {{ moment.content }}\n    </p>\n    <small>@{{ moment.nickname }}</small>\n    <br />\n    <button class=\"btn\"><i class=\"fa fa-heart\"></i> {{ moment.likes }}</button>\n    <button class=\"btn\"><i class=\"fa fa-commenting\"> {{ moment.comments }}</i></button>\n  </div>\n  <div class=\"hidden-xs col-sm-12 col-md-8\">\n    <app-conversation-panel></app-conversation-panel>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/moment-detail/moment-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MomentDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MomentDetailComponent = (function () {
    function MomentDetailComponent(route, dataService) {
        this.route = route;
        this.dataService = dataService;
    }
    MomentDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.dataService.getMoment(+params['id'])
                .then(function (moment) { return _this.moment = moment; });
        });
    };
    MomentDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-moment-detail',
            template: __webpack_require__("../../../../../src/app/components/moment-detail/moment-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/moment-detail/moment-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */]])
    ], MomentDetailComponent);
    return MomentDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/moment-list/moment-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nickname {\n    min-width: 65px;\n    margin-right: 10px; \n}\n  \nspan.label {\n    padding-top: 0.6em;\n    font-size: 12px;\n    display: block;\n    width: 150px;\n    overflow: hidden;\n    text-align: left;\n    color: #fff;\n  }\n\na.list-group-item {\n    background-color: #245685;\n    color: #fff;\n}\n  \n.title {\n    font-size: 1.2em;\n}\n\n.badge-info {\n    background-color: #0bc038;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/moment-list/moment-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-new-moment></app-new-moment>\n  <div class=\"list-group\">\n    <a class=\"list-group-item\" *ngFor=\"let moment of moments\" [routerLink]=\"['/moments', moment.id]\">\n      <span class=\"pull-left label nickname\">\n          {{ moment.nickname }}\n      </span>\n      <strong class=\"title d-flex justify-content-between align-items-center\">{{ moment.title }}</strong>\n      <span class=\"badge badge-info badge-pill\">{{ moment.likes }} Likes</span>\n      <span class=\"badge badge-info badge-pill\">{{ moment.comments }} Moments</span>\n    </a>\n  </div>\n  <app-nickname-wrapper></app-nickname-wrapper>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/moment-list/moment-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MomentListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_socket_service__ = __webpack_require__("../../../../../src/app/services/socket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MomentListComponent = (function () {
    function MomentListComponent(dataService, socketService) {
        this.dataService = dataService;
        this.socketService = socketService;
        this.moments = [];
    }
    MomentListComponent.prototype.ngOnInit = function () {
        this.getMoments();
        this.socketService.init();
    };
    MomentListComponent.prototype.getMoments = function () {
        var _this = this;
        this.dataService.getMoments()
            .subscribe(function (moments) { return _this.moments = moments; });
    };
    ;
    MomentListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-moment-list',
            template: __webpack_require__("../../../../../src/app/components/moment-list/moment-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/moment-list/moment-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_2__services_socket_service__["a" /* SocketService */]])
    ], MomentListComponent);
    return MomentListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".title {\n    font-size: 1.2em;\n  }\n\n/* .headmargin {\n    margin-left: 350px;\n}\n\n.signupmargin {\n    margin-right: 350px;\n} */\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top navbar-dark title\" style=\"background-color: #000000\">\n    <div class=\"container-fluid center\">\n      <!-- Brand and toggle get grouped for better mobile display -->\n      <div class=\"navbar-header headmargin\">\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" href=\"#\"><strong>{{ title }}</strong></a>\n      </div>\n\n      <!-- Collect the nav links, forms, and other content for toggling -->\n      <div class=\"collapse navbar-collapse signupmargin\" id=\"bs-example-navbar-collapse-1\">\n        <form class=\"navbar-form navbar-right my-2 my-lg-0\">\n          <div class=\"form-group\">\n            <input type=\"search\" class=\"form-control mr-sm-2\" aria-label=\"Search\" placeholder=\"Search\">\n          </div>\n          <button type=\"submit\" class=\"btn btn-primary pull-right my-2 my-sm-0\">Sourch</button>\n        </form>\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li><a id=\"userName\" href=\"#\">Sign Up/Sign In</a></li>\n        </ul>\n      </div><!-- /.navbar-collapse -->\n    </div><!-- /.container-fluid -->\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
        this.title = 'Leisure Moment';
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/new-moment/new-moment.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/new-moment/new-moment.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <form #formRef=\"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"momentTitle\">Leisure Moment Title</label>\n        <input type=\"text\" class=\"form-control\" id=\"momentTitle\"\n          name=\"momentTitle\" placeholder=\"Please enter your leisure moment title\" required\n          [(ngModel)]=\"newMoment.title\">\n      </div>\n      <div class=\"form-group\">\n          <label for=\"momentContent\">Moment Content</label>\n          <textarea type=\"text\" class=\"form-control\" id=\"momentContent\" \n            name=\"momentContent\" placeholder=\"Please enter your leisure moment content\" required\n            [(ngModel)]=\"newMoment.content\" rows=\"3\">\n          </textarea> \n        </div>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <button type=\"submit\" class=\"btn btn-primary pull-right\"\n            (click)=\"addMoment()\">Submit</button>\n        </div>\n      </div>     \n    </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/new-moment/new-moment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewMomentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DEFAULT_MOMENT = Object.freeze({
    id: 0,
    title: '',
    nickname: '',
    content: '',
    likes: 0,
    comments: 0
});
var NewMomentComponent = (function () {
    function NewMomentComponent(dataService) {
        this.dataService = dataService;
        this.newMoment = Object.assign({}, DEFAULT_MOMENT);
    }
    NewMomentComponent.prototype.ngOnInit = function () {
    };
    NewMomentComponent.prototype.addMoment = function () {
        this.newMoment.nickname = document.getElementById('userName').textContent;
        this.dataService.addMoment(this.newMoment)
            .catch(function (error) { return console.log(error.body); });
        this.newMoment = Object.assign({}, DEFAULT_MOMENT);
    };
    ;
    NewMomentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-new-moment',
            template: __webpack_require__("../../../../../src/app/components/new-moment/new-moment.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/new-moment/new-moment.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]])
    ], NewMomentComponent);
    return NewMomentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/nickname-wrapper/nickname-wrapper.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#loginWrapper {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: rgba(5, 5, 5, 0.6);\n    text-align: center;\n    color: #fff;\n    display: black;\n    padding-top: 200px;\n}\n\n#nickWrapper {\n    display: none;\n    width: 200px;\n}\n\n#nicknameInput {\n    vertical-align: middle;\n    \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/nickname-wrapper/nickname-wrapper.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"loginWrapper\">\n    <p id=\"info\">connecting to server...</p>\n    <div >\n        <form #formRef=\"ngForm\">\n            <div id=\"nickWrapper\" class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" id=\"nicknameInput\"\n                  name=\"nicknameInput\" placeholder=\"nickname\" required\n                  [(ngModel)]=\"newMoment.nickname\">\n                <button id=\"loginBtn\" type=\"submit\" class=\"btn btn-primary\" (click)=\"addNewName()\">OK</button>\n            </div>\n        </form>    \n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/nickname-wrapper/nickname-wrapper.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NicknameWrapperComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_socket_service__ = __webpack_require__("../../../../../src/app/services/socket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DEFAULT_MOMENT = Object.freeze({
    id: 0,
    title: '',
    nickname: '',
    content: '',
    likes: 0,
    comments: 0
});
var NicknameWrapperComponent = (function () {
    function NicknameWrapperComponent(socketService) {
        this.socketService = socketService;
        this.newMoment = Object.assign({}, DEFAULT_MOMENT);
    }
    NicknameWrapperComponent.prototype.ngOnInit = function () {
        // this.socketService.checkname();
    };
    NicknameWrapperComponent.prototype.addNewName = function () {
        if (this.newMoment.nickname.trim().length != 0) {
            this.socketService.addNewName(this.newMoment.nickname);
            this.newMoment = Object.assign({}, DEFAULT_MOMENT);
        }
        else {
            document.getElementById('nicknameInput').focus;
        }
        ;
    };
    NicknameWrapperComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nickname-wrapper',
            template: __webpack_require__("../../../../../src/app/components/nickname-wrapper/nickname-wrapper.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/nickname-wrapper/nickname-wrapper.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_socket_service__["a" /* SocketService */]])
    ], NicknameWrapperComponent);
    return NicknameWrapperComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this._momentSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
    }
    DataService.prototype.getMoments = function () {
        var _this = this;
        this.http.get('api/v1/moments')
            .toPromise()
            .then(function (res) {
            _this._momentSource.next(res.json());
        })
            .catch(this.handleError);
        return this._momentSource.asObservable();
    };
    ;
    DataService.prototype.getMoment = function (id) {
        var _this = this;
        return this.http.get("api/v1/moments/" + id)
            .toPromise()
            .then(function (res) {
            _this.getMoments();
            return res.json();
        })
            .catch(this.handleError);
    };
    ;
    DataService.prototype.addMoment = function (moment) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'content-type': 'application/json' });
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post('/api/v1/moments', moment, requestOptions)
            .toPromise()
            .then(function (res) {
            _this.getMoments();
            return res.json;
        })
            .catch(this.handleError);
    };
    ;
    DataService.prototype.handleError = function (error) {
        console.error('An error occured', error);
        return Promise.reject(error);
    };
    ;
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/app/services/socket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SocketService = (function () {
    function SocketService() {
    }
    SocketService.prototype.init = function () {
        this.socket = io.connect();
        this.socket.on('connect', function () {
            console.log('client connected to server now.');
            document.getElementById('info').textContent = 'get yourself a nickname :)';
            document.getElementById('nickWrapper').style.display = 'inline-block';
            document.getElementById('nicknameInput').focus();
        });
        this.socket.on('nameExisted', function () {
            document.getElementById('info').textContent = "oops...nickname is taken, choose another pls";
        });
        this.socket.on('loginSuccess', function (nickname) {
            console.log(nickname + ' has login.');
            document.getElementById('loginWrapper').style.display = 'none';
            document.getElementById('userName').textContent = nickname;
        });
    };
    SocketService.prototype.addNewName = function (nickname) {
        this.socket.emit('login', nickname);
    };
    ;
    SocketService.prototype.conversation = function (userNickname) {
        var _this = this;
        document.getElementById('welcomeName').textContent = 'Hello ' + userNickname;
        this.socket.emit('chatConnect', userNickname);
        this.socket.on('system', function (username, userCount, type) {
            var msg = username + (type == 'login' ? ' joined' : ' left');
            _this._displayNewMsg('system', msg, 'red');
            document.getElementById('status').textContent = userCount + (userCount > 1 ? ' users' : ' user') + ' online';
        });
    };
    SocketService.prototype._displayNewMsg = function (user, msg, color) {
        var container = document.getElementById('historyMsg');
        var msgToDisplay = document.createElement('p');
        var date = new Date().toTimeString().substr(0, 8);
        // var msg = Chat.prototype._showEmoji(msg);
        msgToDisplay.style.color = color || '#000';
        msgToDisplay.innerHTML = user + '<span class="timespan">(' + date + '): </span>' + msg;
        container.appendChild(msgToDisplay);
        container.scrollTop = container.scrollHeight;
    };
    ;
    SocketService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SocketService);
    return SocketService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map