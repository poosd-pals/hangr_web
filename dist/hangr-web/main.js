(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _hamper_hamper_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hamper/hamper.component */ "./src/app/hamper/hamper.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pagenotfound/pagenotfound.component */ "./src/app/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");









var routes = [
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
    },
    {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"]
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
    },
    {
        path: '',
        redirectTo: '/closet',
        pathMatch: 'full'
    },
    {
        path: 'hamper',
        component: _hamper_hamper_component__WEBPACK_IMPORTED_MODULE_4__["HamperComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_7__["PagenotfoundComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { enableTracing: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div  class=\"container\">\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'hangr-web';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _closet_closet_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./closet/closet.module */ "./src/app/closet/closet.module.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/forgot-password/forgot-password.component.ts");
/* harmony import */ var _verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./verify-email/verify-email.component */ "./src/app/verify-email/verify-email.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _closet_closet_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./closet/closet.component */ "./src/app/closet/closet.component.ts");
/* harmony import */ var _hamper_hamper_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./hamper/hamper.component */ "./src/app/hamper/hamper.component.ts");
/* harmony import */ var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pagenotfound/pagenotfound.component */ "./src/app/pagenotfound/pagenotfound.component.ts");



















var config = {
    apiKey: "AIzaSyAkG4QmO8X_pWBBw4tQv6z_ad-3-Z_tKyc",
    authDomain: "hangr-233113.firebaseapp.com",
    databaseURL: "https://hangr-233113.firebaseio.com",
    projectId: "hangr-233113",
    storageBucket: "hangr-233113.appspot.com",
    messagingSenderId: "592709060474"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"],
                _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_12__["ForgotPasswordComponent"],
                _verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_13__["VerifyEmailComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"],
                _closet_closet_component__WEBPACK_IMPORTED_MODULE_16__["ClosetComponent"],
                _hamper_hamper_component__WEBPACK_IMPORTED_MODULE_17__["HamperComponent"],
                _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_18__["PagenotfoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"].initializeApp(config),
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__["AngularFireAuthModule"],
                _closet_closet_module__WEBPACK_IMPORTED_MODULE_7__["ClosetModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]
            ],
            providers: [
                _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.authService.isLoggedIn) {
            return true;
        }
        else {
            return this.router.navigate(['/login']);
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);





var AuthService = /** @class */ (function () {
    function AuthService(afAuth, router) {
        var _this = this;
        this.afAuth = afAuth;
        this.router = router;
        this.afAuth.authState.subscribe(function (user) {
            if (user) {
                _this.user = user;
                localStorage.setItem('user', JSON.stringify(_this.user));
            }
            else {
                localStorage.setItem('user', null);
            }
        });
    }
    AuthService.prototype.login = function (form) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var e_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.afAuth.auth.signInWithEmailAndPassword(form.get('email').value, form.get('password').value)];
                    case 1:
                        _a.sent();
                        this.router.navigate(['closet/list']);
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        alert("Error!" + e_1.message);
                        return [3 /*break*/, 3];
                    case 3:
                        console.log(form.value);
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.register = function (form) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result, e_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.afAuth.auth.createUserWithEmailAndPassword(form.get('email').value, form.get('password').value)
                                .then(function (success) {
                                // For debugging purposes.
                                // console.log("current user before: " + JSON.stringify(firebase.auth().currentUser));
                                firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().currentUser.updateProfile({
                                    displayName: form.get('username').value,
                                }).then(function () {
                                    // Update successful.
                                    console.log("Update user name successful");
                                    // For debugging purposes.
                                    // console.log("display name: " + firebase.auth().currentUser.displayName);
                                }).catch(function (error) {
                                    // An error happened.
                                    console.log("ERROR: Was unable to update user name");
                                    console.log(error);
                                });
                            })];
                    case 1:
                        result = _a.sent();
                        this.router.navigate(['closet/list']);
                        return [3 /*break*/, 3];
                    case 2:
                        e_2 = _a.sent();
                        alert("Error!" + e_2.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.logout = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.afAuth.auth.signOut()];
                    case 1:
                        _a.sent();
                        localStorage.removeItem('user');
                        this.router.navigate(['/login']);
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(AuthService.prototype, "isLoggedIn", {
        get: function () {
            var user = JSON.parse(localStorage.getItem('user'));
            return user !== null;
        },
        enumerable: true,
        configurable: true
    });
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/closet/closet-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/closet/closet-routing.module.ts ***!
  \*************************************************/
/*! exports provided: ClosetRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClosetRoutingModule", function() { return ClosetRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ "./src/app/closet/list/list.component.ts");
/* harmony import */ var _upload_upload_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./upload/upload.component */ "./src/app/closet/upload/upload.component.ts");
/* harmony import */ var _closet_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./closet.component */ "./src/app/closet/closet.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth/auth.guard */ "./src/app/auth/auth.guard.ts");







var routes = [
    {
        path: 'closet',
        component: _closet_component__WEBPACK_IMPORTED_MODULE_5__["ClosetComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
        children: [
            {
                path: 'list',
                component: _list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"]
            },
            {
                path: 'upload',
                component: _upload_upload_component__WEBPACK_IMPORTED_MODULE_4__["UploadComponent"]
            }
        ]
    }
];
var ClosetRoutingModule = /** @class */ (function () {
    function ClosetRoutingModule() {
    }
    ClosetRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ClosetRoutingModule);
    return ClosetRoutingModule;
}());



/***/ }),

/***/ "./src/app/closet/closet.component.css":
/*!*********************************************!*\
  !*** ./src/app/closet/closet.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nsb3NldC9jbG9zZXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/closet/closet.component.html":
/*!**********************************************!*\
  !*** ./src/app/closet/closet.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Closet Interface</h2>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/closet/closet.component.ts":
/*!********************************************!*\
  !*** ./src/app/closet/closet.component.ts ***!
  \********************************************/
/*! exports provided: ClosetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClosetComponent", function() { return ClosetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ClosetComponent = /** @class */ (function () {
    function ClosetComponent() {
    }
    ClosetComponent.prototype.ngOnInit = function () {
    };
    ClosetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-closet',
            template: __webpack_require__(/*! ./closet.component.html */ "./src/app/closet/closet.component.html"),
            styles: [__webpack_require__(/*! ./closet.component.css */ "./src/app/closet/closet.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ClosetComponent);
    return ClosetComponent;
}());



/***/ }),

/***/ "./src/app/closet/closet.module.ts":
/*!*****************************************!*\
  !*** ./src/app/closet/closet.module.ts ***!
  \*****************************************/
/*! exports provided: ClosetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClosetModule", function() { return ClosetModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ "./src/app/closet/list/list.component.ts");
/* harmony import */ var _upload_upload_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./upload/upload.component */ "./src/app/closet/upload/upload.component.ts");
/* harmony import */ var _outfit_outfit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./outfit/outfit.component */ "./src/app/closet/outfit/outfit.component.ts");
/* harmony import */ var _closet_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./closet-routing.module */ "./src/app/closet/closet-routing.module.ts");
/* harmony import */ var _clothing_clothing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./clothing/clothing.component */ "./src/app/closet/clothing/clothing.component.ts");








var ClosetModule = /** @class */ (function () {
    function ClosetModule() {
    }
    ClosetModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"], _upload_upload_component__WEBPACK_IMPORTED_MODULE_4__["UploadComponent"], _outfit_outfit_component__WEBPACK_IMPORTED_MODULE_5__["OutfitComponent"], _clothing_clothing_component__WEBPACK_IMPORTED_MODULE_7__["ClothingComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _closet_routing_module__WEBPACK_IMPORTED_MODULE_6__["ClosetRoutingModule"]
            ]
        })
    ], ClosetModule);
    return ClosetModule;
}());



/***/ }),

/***/ "./src/app/closet/clothing/clothing.component.css":
/*!********************************************************!*\
  !*** ./src/app/closet/clothing/clothing.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nsb3NldC9jbG90aGluZy9jbG90aGluZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/closet/clothing/clothing.component.html":
/*!*********************************************************!*\
  !*** ./src/app/closet/clothing/clothing.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label>\n  Name:\n  <input type=\"text\" [formControl]=\"name\">\n</label>"

/***/ }),

/***/ "./src/app/closet/clothing/clothing.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/closet/clothing/clothing.component.ts ***!
  \*******************************************************/
/*! exports provided: ClothingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClothingComponent", function() { return ClothingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var ClothingComponent = /** @class */ (function () {
    function ClothingComponent() {
    }
    ClothingComponent.prototype.ngOnInit = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    };
    ClothingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-clothing',
            template: __webpack_require__(/*! ./clothing.component.html */ "./src/app/closet/clothing/clothing.component.html"),
            styles: [__webpack_require__(/*! ./clothing.component.css */ "./src/app/closet/clothing/clothing.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ClothingComponent);
    return ClothingComponent;
}());



/***/ }),

/***/ "./src/app/closet/list/list.component.css":
/*!************************************************!*\
  !*** ./src/app/closet/list/list.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".addLink {\n    text-decoration: none;\n    color: white;\n}\n\n.addLink:hover {\n    text-decoration: underline;\n}\n\n.card {\n    height: 38vw;\n}\n\n.card-img-top {\n    width: 100%;\n    height: 20vw;\n    -o-object-fit: scale-down;\n       object-fit: scale-down;\n}\n\n.container-btn-add {\n    position: fixed;\n    bottom: 1em;\n    right: 1em;\n}\n\n.container-btn-add .btn-add {     \n    height: 62px;     \n    width: 62px;     \n    border:none;    \n    background-color:#6FB583;     \n    border-radius: 62px;        /*Transform the square into rectangle, sync that value with the width/height*/    \n    transition: all 300ms;      /*Animation to close the button (circle)*/     box-shadow:2px 2px 5px rgb(25, 73, 15);     \n    cursor:pointer; \n}\n\n.container-btn-add .btn-add span {\n    font-size: 72px;     \n    color:white;     \n    position: absolute;    \n    left: 10px;     \n    top: 16px;     \n    line-height: 28px; \n}\n\n.container-btn-add .btn-add:hover {\n    transition: all 400ms cubic-bezier(.62,.1,.5,1);     \n    width:200px;     \n    border-top-right-radius: 5px;     \n    border-bottom-right-radius: 5px; \n}\n\n/*     Long text appears slowly with an animation. That code prepare the animation by hidding the text.     The use of display is not there because it does not work well with CSS3 animation. */\n\n.container-btn-add .btn-add .long-text {    \n    transition: opacity 1000ms; /*Only the text fadein/fadeout is animated*/    \n    opacity:0;                /*By default we do not display the text, we want the text to fade in*/    \n    color:white;     \n    white-space: nowrap;     \n    font-size: 0;             /*Set to 0 to not have overflow on the right of the browser*/    \n    width: 0;                 /*Set to 0 to not have overflow on the right of the browser*/    \n    margin:0;  \n}\n\n/*     Animation to have a text that appear progressively. We need to play with a delay on the width and the font-size to not have the browser have the text appears on the right side of the browser view port. This has the side-effect of having an horizontal bar. */\n\n.container-btn-add .btn-add:hover .long-text{   \n    transition: opacity 700ms,               \n                width 1ms linear 270ms,       /*two thirds of the animation on the container width*/              \n                font-size 1ms linear 270ms;   /*two thirds of the animation on the container width*/  \n    opacity:1;   \n    margin-top: 2px;                          /*Center the position vertically*/  \n    margin-left: 65px;                        /*Center between the + and the right end side*/  \n    font-size: 20px;                          /*Text size, cannot be defined initially without moving the scrollbar*/  \n    width: auto;                              /*Required to be set with a delay (see animation) to not have scrollbar. Delay is to wait container to size up*/\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xvc2V0L2xpc3QvbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBc0I7T0FBdEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLFdBQVc7SUFDWCx3QkFBd0I7SUFDeEIsbUJBQW1CLFNBQVMsNkVBQTZFO0lBQ3pHLHFCQUFxQixPQUFPLHlDQUF5QyxNQUFNLHNDQUFzQztJQUNqSCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7SUFDVCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSwrQ0FBK0M7SUFDL0MsV0FBVztJQUNYLDRCQUE0QjtJQUM1QiwrQkFBK0I7QUFDbkM7O0FBRUEsZ01BQWdNOztBQUNoTTtJQUNJLDBCQUEwQixFQUFFLDJDQUEyQztJQUN2RSxTQUFTLGlCQUFpQixxRUFBcUU7SUFDL0YsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixZQUFZLGNBQWMsNERBQTREO0lBQ3RGLFFBQVEsa0JBQWtCLDREQUE0RDtJQUN0RixRQUFRO0FBQ1o7O0FBRUEsd1FBQXdROztBQUN4UTtJQUNJOzswQ0FFc0MsSUFBSSxxREFBcUQ7SUFDL0YsU0FBUztJQUNULGVBQWUsMkJBQTJCLGlDQUFpQztJQUMzRSxpQkFBaUIseUJBQXlCLDhDQUE4QztJQUN4RixlQUFlLDJCQUEyQixzRUFBc0U7SUFDaEgsV0FBVywrQkFBK0IsK0dBQStHO0FBQzdKIiwiZmlsZSI6InNyYy9hcHAvY2xvc2V0L2xpc3QvbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZExpbmsge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5hZGRMaW5rOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmNhcmQge1xuICAgIGhlaWdodDogMzh2dztcbn1cblxuLmNhcmQtaW1nLXRvcCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyMHZ3O1xuICAgIG9iamVjdC1maXQ6IHNjYWxlLWRvd247XG59XG5cbi5jb250YWluZXItYnRuLWFkZCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMWVtO1xuICAgIHJpZ2h0OiAxZW07XG59XG5cbi5jb250YWluZXItYnRuLWFkZCAuYnRuLWFkZCB7ICAgICBcbiAgICBoZWlnaHQ6IDYycHg7ICAgICBcbiAgICB3aWR0aDogNjJweDsgICAgIFxuICAgIGJvcmRlcjpub25lOyAgICBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM2RkI1ODM7ICAgICBcbiAgICBib3JkZXItcmFkaXVzOiA2MnB4OyAgICAgICAgLypUcmFuc2Zvcm0gdGhlIHNxdWFyZSBpbnRvIHJlY3RhbmdsZSwgc3luYyB0aGF0IHZhbHVlIHdpdGggdGhlIHdpZHRoL2hlaWdodCovICAgIFxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtczsgICAgICAvKkFuaW1hdGlvbiB0byBjbG9zZSB0aGUgYnV0dG9uIChjaXJjbGUpKi8gICAgIGJveC1zaGFkb3c6MnB4IDJweCA1cHggcmdiKDI1LCA3MywgMTUpOyAgICAgXG4gICAgY3Vyc29yOnBvaW50ZXI7IFxufVxuXG4uY29udGFpbmVyLWJ0bi1hZGQgLmJ0bi1hZGQgc3BhbiB7XG4gICAgZm9udC1zaXplOiA3MnB4OyAgICAgXG4gICAgY29sb3I6d2hpdGU7ICAgICBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7ICAgIFxuICAgIGxlZnQ6IDEwcHg7ICAgICBcbiAgICB0b3A6IDE2cHg7ICAgICBcbiAgICBsaW5lLWhlaWdodDogMjhweDsgXG59XG5cbi5jb250YWluZXItYnRuLWFkZCAuYnRuLWFkZDpob3ZlciB7XG4gICAgdHJhbnNpdGlvbjogYWxsIDQwMG1zIGN1YmljLWJlemllciguNjIsLjEsLjUsMSk7ICAgICBcbiAgICB3aWR0aDoyMDBweDsgICAgIFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7ICAgICBcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4OyBcbn1cblxuLyogICAgIExvbmcgdGV4dCBhcHBlYXJzIHNsb3dseSB3aXRoIGFuIGFuaW1hdGlvbi4gVGhhdCBjb2RlIHByZXBhcmUgdGhlIGFuaW1hdGlvbiBieSBoaWRkaW5nIHRoZSB0ZXh0LiAgICAgVGhlIHVzZSBvZiBkaXNwbGF5IGlzIG5vdCB0aGVyZSBiZWNhdXNlIGl0IGRvZXMgbm90IHdvcmsgd2VsbCB3aXRoIENTUzMgYW5pbWF0aW9uLiAqL1xuLmNvbnRhaW5lci1idG4tYWRkIC5idG4tYWRkIC5sb25nLXRleHQgeyAgICBcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDEwMDBtczsgLypPbmx5IHRoZSB0ZXh0IGZhZGVpbi9mYWRlb3V0IGlzIGFuaW1hdGVkKi8gICAgXG4gICAgb3BhY2l0eTowOyAgICAgICAgICAgICAgICAvKkJ5IGRlZmF1bHQgd2UgZG8gbm90IGRpc3BsYXkgdGhlIHRleHQsIHdlIHdhbnQgdGhlIHRleHQgdG8gZmFkZSBpbiovICAgIFxuICAgIGNvbG9yOndoaXRlOyAgICAgXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgICAgIFxuICAgIGZvbnQtc2l6ZTogMDsgICAgICAgICAgICAgLypTZXQgdG8gMCB0byBub3QgaGF2ZSBvdmVyZmxvdyBvbiB0aGUgcmlnaHQgb2YgdGhlIGJyb3dzZXIqLyAgICBcbiAgICB3aWR0aDogMDsgICAgICAgICAgICAgICAgIC8qU2V0IHRvIDAgdG8gbm90IGhhdmUgb3ZlcmZsb3cgb24gdGhlIHJpZ2h0IG9mIHRoZSBicm93c2VyKi8gICAgXG4gICAgbWFyZ2luOjA7ICBcbn1cblxuLyogICAgIEFuaW1hdGlvbiB0byBoYXZlIGEgdGV4dCB0aGF0IGFwcGVhciBwcm9ncmVzc2l2ZWx5LiBXZSBuZWVkIHRvIHBsYXkgd2l0aCBhIGRlbGF5IG9uIHRoZSB3aWR0aCBhbmQgdGhlIGZvbnQtc2l6ZSB0byBub3QgaGF2ZSB0aGUgYnJvd3NlciBoYXZlIHRoZSB0ZXh0IGFwcGVhcnMgb24gdGhlIHJpZ2h0IHNpZGUgb2YgdGhlIGJyb3dzZXIgdmlldyBwb3J0LiBUaGlzIGhhcyB0aGUgc2lkZS1lZmZlY3Qgb2YgaGF2aW5nIGFuIGhvcml6b250YWwgYmFyLiAqL1xuLmNvbnRhaW5lci1idG4tYWRkIC5idG4tYWRkOmhvdmVyIC5sb25nLXRleHR7ICAgXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSA3MDBtcywgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB3aWR0aCAxbXMgbGluZWFyIDI3MG1zLCAgICAgICAvKnR3byB0aGlyZHMgb2YgdGhlIGFuaW1hdGlvbiBvbiB0aGUgY29udGFpbmVyIHdpZHRoKi8gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZSAxbXMgbGluZWFyIDI3MG1zOyAgIC8qdHdvIHRoaXJkcyBvZiB0aGUgYW5pbWF0aW9uIG9uIHRoZSBjb250YWluZXIgd2lkdGgqLyAgXG4gICAgb3BhY2l0eToxOyAgIFxuICAgIG1hcmdpbi10b3A6IDJweDsgICAgICAgICAgICAgICAgICAgICAgICAgIC8qQ2VudGVyIHRoZSBwb3NpdGlvbiB2ZXJ0aWNhbGx5Ki8gIFxuICAgIG1hcmdpbi1sZWZ0OiA2NXB4OyAgICAgICAgICAgICAgICAgICAgICAgIC8qQ2VudGVyIGJldHdlZW4gdGhlICsgYW5kIHRoZSByaWdodCBlbmQgc2lkZSovICBcbiAgICBmb250LXNpemU6IDIwcHg7ICAgICAgICAgICAgICAgICAgICAgICAgICAvKlRleHQgc2l6ZSwgY2Fubm90IGJlIGRlZmluZWQgaW5pdGlhbGx5IHdpdGhvdXQgbW92aW5nIHRoZSBzY3JvbGxiYXIqLyAgXG4gICAgd2lkdGg6IGF1dG87ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLypSZXF1aXJlZCB0byBiZSBzZXQgd2l0aCBhIGRlbGF5IChzZWUgYW5pbWF0aW9uKSB0byBub3QgaGF2ZSBzY3JvbGxiYXIuIERlbGF5IGlzIHRvIHdhaXQgY29udGFpbmVyIHRvIHNpemUgdXAqL1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/closet/list/list.component.html":
/*!*************************************************!*\
  !*** ./src/app/closet/list/list.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-deck\">\n  <div class=\"card\">\n    <img class=\"card-img-top\" src=\"https://img.shein.com/images/shein.com/201606/1466821525857227182_im_600x799.jpg\" alt=\"Card image cap\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">Card title</h5>\n      <p class=\"card-text\">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\n      <p class=\"card-text float-right text-muted\">Edit</p>\n    </div>\n  </div>\n  <div class=\"card\">\n    <img class=\"card-img-top\" src=\"https://img.shein.com/images/shein.com/201704/27/14931170611033833818_im_600x799.jpg\" alt=\"Card image cap\">\n    <div class=\"card-body\">\n        <h5 class=\"card-title\">Card title</h5>\n        <p class=\"card-text\">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\n        <p class=\"card-text float-right text-muted\">Edit</p>\n    </div>\n  </div>\n  <div class=\"card\">\n    <img class=\"card-img-top\" src=\"https://cdn.fashiola.in/L36603085/shein-surplice-front-solid-blouse.jpg\" alt=\"Card image cap\">\n    <div class=\"card-body\">\n        <h5 class=\"card-title\">Card title</h5>\n        <p class=\"card-text\">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\n        <p class=\"card-text float-right text-muted\">Edit</p>\n    </div>\n  </div>\n  <div class=\"card\">\n    <img class=\"card-img-top\" src=\"https://img.shein.com/images/shein.com/201606/1466821525857227182_im_600x799.jpg\" alt=\"Card image cap\">\n    <div class=\"card-body\">\n        <h5 class=\"card-title\">Card title</h5>\n        <p class=\"card-text\">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\n        <p class=\"card-text float-right text-muted\">Edit</p>\n    </div>\n  </div>\n<div class=\"container-btn-add\">\n  <button type=\"button\" class=\"btn btn-primary btn-add\">\n    <span class=\"plus-sym\">+</span>\n    <span class=\"long-text\">\n      <a routerLink=\"/closet/upload\" class=\"addLink\"> \n        Add clothing\n      </a>\n    </span>\n  </button>\n</div>\n"

/***/ }),

/***/ "./src/app/closet/list/list.component.ts":
/*!***********************************************!*\
  !*** ./src/app/closet/list/list.component.ts ***!
  \***********************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ListComponent = /** @class */ (function () {
    function ListComponent() {
        this.longText = false;
    }
    ListComponent.prototype.ngOnInit = function () { };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/closet/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.css */ "./src/app/closet/list/list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/closet/outfit/outfit.component.css":
/*!****************************************************!*\
  !*** ./src/app/closet/outfit/outfit.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nsb3NldC9vdXRmaXQvb3V0Zml0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/closet/outfit/outfit.component.html":
/*!*****************************************************!*\
  !*** ./src/app/closet/outfit/outfit.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  outfit works!\n</p>\n"

/***/ }),

/***/ "./src/app/closet/outfit/outfit.component.ts":
/*!***************************************************!*\
  !*** ./src/app/closet/outfit/outfit.component.ts ***!
  \***************************************************/
/*! exports provided: OutfitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutfitComponent", function() { return OutfitComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OutfitComponent = /** @class */ (function () {
    function OutfitComponent() {
    }
    OutfitComponent.prototype.ngOnInit = function () {
    };
    OutfitComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-outfit',
            template: __webpack_require__(/*! ./outfit.component.html */ "./src/app/closet/outfit/outfit.component.html"),
            styles: [__webpack_require__(/*! ./outfit.component.css */ "./src/app/closet/outfit/outfit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OutfitComponent);
    return OutfitComponent;
}());



/***/ }),

/***/ "./src/app/closet/upload/upload.component.css":
/*!****************************************************!*\
  !*** ./src/app/closet/upload/upload.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n    display: flex;\n    flex-direction: column;\n    padding-top: 24px;\n  }\n  \n  label {\n    display: block;\n    width: 6em;\n    margin: .5em 0;\n    color: #607D8B;\n    font-weight: bold;\n  }\n  \n  input {\n    height: 2em;\n    font-size: 1em;\n    padding-left: .4em;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xvc2V0L3VwbG9hZC91cGxvYWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsY0FBYztJQUNkLFVBQVU7SUFDVixjQUFjO0lBQ2QsY0FBYztJQUNkLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0VBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY2xvc2V0L3VwbG9hZC91cGxvYWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZy10b3A6IDI0cHg7XG4gIH1cbiAgXG4gIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogNmVtO1xuICAgIG1hcmdpbjogLjVlbSAwO1xuICAgIGNvbG9yOiAjNjA3RDhCO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIFxuICBpbnB1dCB7XG4gICAgaGVpZ2h0OiAyZW07XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgcGFkZGluZy1sZWZ0OiAuNGVtO1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/closet/upload/upload.component.html":
/*!*****************************************************!*\
  !*** ./src/app/closet/upload/upload.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label>\n  Name:\n  <input type=\"text\" [formControl]=\"name\">\n</label>"

/***/ }),

/***/ "./src/app/closet/upload/upload.component.ts":
/*!***************************************************!*\
  !*** ./src/app/closet/upload/upload.component.ts ***!
  \***************************************************/
/*! exports provided: UploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadComponent", function() { return UploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var UploadComponent = /** @class */ (function () {
    function UploadComponent() {
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
    }
    UploadComponent.prototype.ngOnInit = function () {
        //this.name = new FormControl('');
    };
    UploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-upload',
            template: __webpack_require__(/*! ./upload.component.html */ "./src/app/closet/upload/upload.component.html"),
            styles: [__webpack_require__(/*! ./upload.component.css */ "./src/app/closet/upload/upload.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UploadComponent);
    return UploadComponent;
}());



/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.css":
/*!***************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.html":
/*!****************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  forgot-password works!\n</p>\n"

/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.ts ***!
  \**************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent() {
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! ./forgot-password.component.html */ "./src/app/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.css */ "./src/app/forgot-password/forgot-password.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/hamper/hamper.component.css":
/*!*********************************************!*\
  !*** ./src/app/hamper/hamper.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hhbXBlci9oYW1wZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/hamper/hamper.component.html":
/*!**********************************************!*\
  !*** ./src/app/hamper/hamper.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  hamper works!\n</p>\n"

/***/ }),

/***/ "./src/app/hamper/hamper.component.ts":
/*!********************************************!*\
  !*** ./src/app/hamper/hamper.component.ts ***!
  \********************************************/
/*! exports provided: HamperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HamperComponent", function() { return HamperComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HamperComponent = /** @class */ (function () {
    function HamperComponent() {
    }
    HamperComponent.prototype.ngOnInit = function () {
    };
    HamperComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hamper',
            template: __webpack_require__(/*! ./hamper.component.html */ "./src/app/hamper/hamper.component.html"),
            styles: [__webpack_require__(/*! ./hamper.component.css */ "./src/app/hamper/hamper.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HamperComponent);
    return HamperComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Lato:300|Roboto');\n\n.navbar {\n    background-color: #7807d4;\n    font-family: 'Helvetica';\n    color: white;\n}\n\n.navbar-brand{\n    font-family: 'Roboto', sans-serif;\n    color: white;\n    font-size: 1.3em;\n    text-transform: uppercase;\n}\n\na {\n    font-size: 1em;\n    color: #dcc8ec;\n    cursor: pointer;\n}\n\nli > a:hover {\n    color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNFQUFzRTs7QUFFdEU7SUFDSSx5QkFBeUI7SUFDekIsd0JBQXdCO0lBQ3hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjMwMHxSb2JvdG8nKTtcblxuLm5hdmJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc4MDdkNDtcbiAgICBmb250LWZhbWlseTogJ0hlbHZldGljYSc7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4ubmF2YmFyLWJyYW5ke1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxLjNlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG5hIHtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBjb2xvcjogI2RjYzhlYztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmxpID4gYTpob3ZlciB7XG4gICAgY29sb3I6IHdoaXRlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav *ngIf=\"authService.isLoggedIn\" class=\"navbar navbar-expand-lg sticky-top\">\n  <a class=\"navbar-brand\"  href=\"#\">Hangr &nbsp; &nbsp;| </a>\n    <div class=\"collapse navbar-collapse\"  id=\"navbarText\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n         <a class=\"nav-link\"  href=\"/closet/list\">Home</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\"  href=\"/closet/list\">My Closet</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\"  href=\"/hamper\">Hamper</a>\n        </li>\n      </ul>\n      <ul class=\"navbar-nav ml-auto\">\n          <li class=\"nav-item\">\n          <button type=\"button\" class=\"btn btn-outline-light\" (click)=\"authService.logout()\">Logout</button>\n          </li>\n      </ul>\n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService) {
        this.authService = authService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n    box-shadow: 0  10px  20px  rgba(0,0,0,0.19), 0  6px  6px  rgba(0,0,0,0.23);\n}\n\n.container {\n    margin-top: 10%;\n}\n\nimg {\n    width: 80%;\n}\n\n.blue {\n    background-color: blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBFQUEwRTtBQUM5RTs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xuICAgIGJveC1zaGFkb3c6IDAgIDEwcHggIDIwcHggIHJnYmEoMCwwLDAsMC4xOSksIDAgIDZweCAgNnB4ICByZ2JhKDAsMCwwLDAuMjMpO1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG59XG5cbmltZyB7XG4gICAgd2lkdGg6IDgwJTtcbn1cblxuLmJsdWUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG59Il19 */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container pt-3\">\n  <div class=\"row justify-content-sm-center\">\n    <div class=\"col-sm-10 col-md-6\">\n      <div class=\"card border-info\">\n        <div class=\"card-header\">Login</div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-md-4 text-center\">\n              <img src=\"https://image.flaticon.com/icons/png/512/47/47687.png\">\n            </div>\n            <div class=\"col-md-8\">\n              <form\n                [formGroup]=\"form\"\n                ngSubmit=\"login(form)\">\n                <input type=\"text\" formControlName=\"email\"  class=\"form-control mb-2\" placeholder=\"Email\" #userEmail required autofocus>\n                <input type=\"password\" formControlName=\"password\" class=\"form-control mb-2\" placeholder=\"Password\"  #userPassword required>\n                <button class=\"btn btn-lg btn-primary btn-block mb-1\"\n                (click)=\"authService.login(form)\">\n                  Login\n                </button>\n              </form> \n              <div class=\"text-center\">\n                  <button class=\"btn btn-link\">\n                    <a routerLink=\"/register\">\n                      New user? Register\n                    </a>\n                    </button>\n                </div>           \n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService) {
        this.authService = authService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        console.log(this.form.value);
    };
    LoginComponent.prototype.ngAfterViewInit = function () {
        //document.querySelector('body').classList.add('blue');
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        //document.querySelector('body').classList.remove('blue');
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Vub3Rmb3VuZC9wYWdlbm90Zm91bmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Error 404</h2>\n<p>\n  Page Not Found :(\n</p>\n"

/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.ts ***!
  \********************************************************/
/*! exports provided: PagenotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagenotfoundComponent", function() { return PagenotfoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PagenotfoundComponent = /** @class */ (function () {
    function PagenotfoundComponent() {
    }
    PagenotfoundComponent.prototype.ngOnInit = function () {
    };
    PagenotfoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pagenotfound',
            template: __webpack_require__(/*! ./pagenotfound.component.html */ "./src/app/pagenotfound/pagenotfound.component.html"),
            styles: [__webpack_require__(/*! ./pagenotfound.component.css */ "./src/app/pagenotfound/pagenotfound.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PagenotfoundComponent);
    return PagenotfoundComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n    box-shadow: 0  10px  20px  rgba(0,0,0,0.19), 0  6px  6px  rgba(0,0,0,0.23);\n}\n\n.container {\n    margin-top: 10%;\n}\n\nimg {\n    width: 80%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBFQUEwRTtBQUM5RTs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xuICAgIGJveC1zaGFkb3c6IDAgIDEwcHggIDIwcHggIHJnYmEoMCwwLDAsMC4xOSksIDAgIDZweCAgNnB4ICByZ2JhKDAsMCwwLDAuMjMpO1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG59XG5cbmltZyB7XG4gICAgd2lkdGg6IDgwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container pt-3\">\n  <div class=\"row justify-content-sm-center\">\n    <div class=\"col-sm-10 col-md-6\">\n      <div *ngIf=\"!authService.isLoggedIn\" class=\"card border-info\">\n        <div class=\"card-header\">Register</div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-md-4 text-center\">\n              <img src=\"https://image.flaticon.com/icons/png/512/47/47687.png\">\n            </div>\n            <div class=\"col-md-8\">\n              <form\n                [formGroup]=\"form\"\n                ngSubmit=\"login(form)\">\n                <input type=\"text\" formControlName=\"username\"  class=\"form-control mb-2\" placeholder=\"Username\" #userName required autofocus>\n                <input type=\"text\" formControlName=\"email\"  class=\"form-control mb-2\" placeholder=\"Email\" #userEmail required autofocus>\n                <input type=\"password\" formControlName=\"password\" class=\"form-control mb-2\" placeholder=\"Password\"  #userPassword required>\n                <button class=\"btn btn-lg btn-primary btn-block mb-1\"\n                (click)=\"authService.register(form)\">\n                  Register\n                </button>\n              </form>  \n              <div class=\"text-center\">\n                  <button class=\"btn btn-link register\">\n                    <a routerLink=\"/login\">\n                      Existing user? Login\n                    </a>\n                    </button>\n              </div>            \n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService) {
        this.authService = authService;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/verify-email/verify-email.component.css":
/*!*********************************************************!*\
  !*** ./src/app/verify-email/verify-email.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlcmlmeS1lbWFpbC92ZXJpZnktZW1haWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/verify-email/verify-email.component.html":
/*!**********************************************************!*\
  !*** ./src/app/verify-email/verify-email.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  verify-email works!\n</p>\n"

/***/ }),

/***/ "./src/app/verify-email/verify-email.component.ts":
/*!********************************************************!*\
  !*** ./src/app/verify-email/verify-email.component.ts ***!
  \********************************************************/
/*! exports provided: VerifyEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyEmailComponent", function() { return VerifyEmailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VerifyEmailComponent = /** @class */ (function () {
    function VerifyEmailComponent() {
    }
    VerifyEmailComponent.prototype.ngOnInit = function () {
    };
    VerifyEmailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-verify-email',
            template: __webpack_require__(/*! ./verify-email.component.html */ "./src/app/verify-email/verify-email.component.html"),
            styles: [__webpack_require__(/*! ./verify-email.component.css */ "./src/app/verify-email/verify-email.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VerifyEmailComponent);
    return VerifyEmailComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jiajinkoay/Documents/GitHub/hangr_web/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map