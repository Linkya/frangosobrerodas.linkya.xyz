webpackJsonp([8],{

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_update__ = __webpack_require__(408);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountUpdatePageModule", function() { return AccountUpdatePageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AccountUpdatePageModule = (function () {
    function AccountUpdatePageModule() {
    }
    return AccountUpdatePageModule;
}());
AccountUpdatePageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__account_update__["a" /* AccountUpdatePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__account_update__["a" /* AccountUpdatePage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__account_update__["a" /* AccountUpdatePage */]
        ]
    })
], AccountUpdatePageModule);

//# sourceMappingURL=account-update.module.js.map

/***/ }),

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var of_1 = __webpack_require__(397);
Observable_1.Observable.of = of_1.of;
//# sourceMappingURL=of.js.map

/***/ }),

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayObservable_1 = __webpack_require__(199);
exports.of = ArrayObservable_1.ArrayObservable.of;
//# sourceMappingURL=of.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SettingsService = (function () {
    function SettingsService(http, userService) {
        this.http = http;
        this.userService = userService;
        // API_URL = 'http://172.24.62.104/link.eddmi.com/index.php/takeaway/';
        // ENTITY_ID = 2;
        this.API_URL = 'https://app.linkya.xyz/takeaway/';
        this.ENTITY_ID = 281;
        // console.log('Hello SettingsService Provider');
    }
    SettingsService.prototype.get = function () {
        var _this = this;
        if (this.about) {
            return Promise.resolve(this.about);
        }
        return new Promise(function (resolve, reject) {
            var _headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': _this.ENTITY_ID });
            var _options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: _headers });
            var url = _this.API_URL + "settings/one";
            _this.http.get(url, _options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.about = data.data.settings;
                // console.log(this.about);
                resolve(_this.about);
            }, function (error) {
                reject(error);
            });
        });
    };
    SettingsService.prototype.getPath = function () {
        var _this = this;
        if (this.path) {
            return Promise.resolve(this.path);
        }
        return new Promise(function (resolve, reject) {
            var _headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': _this.ENTITY_ID });
            var _options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: _headers });
            var url = _this.API_URL + "settings/path/";
            _this.http.get(url, _options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.path = data.data.settings.path;
                resolve(_this.path);
            }, function (error) {
                reject(error);
            });
        });
    };
    SettingsService.prototype.getFees = function () {
        var _this = this;
        if (this.path) {
            return Promise.resolve(this.path);
        }
        return new Promise(function (resolve, reject) {
            _this.userService.getToken().then(function (data) {
                var _headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': _this.ENTITY_ID });
                var _options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: _headers });
                var url = _this.API_URL + "settings/fees/";
                _this.http.get(url, _options)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    resolve(data.data);
                }, function (error) {
                    reject(error);
                });
            });
        });
    };
    SettingsService.prototype.getOpeningTimes = function () {
        var _this = this;
        if (this.path) {
            return Promise.resolve(this.path);
        }
        return new Promise(function (resolve, reject) {
            _this.userService.getToken().then(function (data) {
                var _headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': _this.ENTITY_ID });
                var _options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: _headers });
                var url = _this.API_URL + "settings/schedule/";
                _this.http.get(url, _options)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    var opening_times = data.data;
                    if (data.data) {
                        opening_times = data.data.opening_times;
                    }
                    resolve(opening_times);
                }, function (error) {
                    reject(error);
                });
            });
        });
    };
    SettingsService.prototype.computeTotalDistance = function (result) {
        var total = 0;
        var myroute = result.routes[0];
        for (var i = 0; i < myroute.legs.length; i++) {
            total += myroute.legs[i].distance.value;
        }
        total = total / 1000;
        return total;
    };
    SettingsService.prototype.getDistance = function (postalCode) {
        var _this = this;
        var address = postalCode;
        var response = {
            status: "",
            valid: "",
            distance: 0,
            address: "",
            locality: ""
        };
        return new Promise(function (resolve, reject) {
            _this.getPath().then(function (data) {
                var decodedPath = google.maps.geometry.encoding.decodePath(data);
                var qt = { lat: 41.3354534, lng: -8.5601993 };
                var geocoder = new google.maps.Geocoder();
                geocoder.geocode({ 'address': address }, function (results, status) {
                    switch (status) {
                        case google.maps.GeocoderStatus.OK:
                            var request = {
                                destination: results[0].geometry.location,
                                origin: qt,
                                travelMode: google.maps.TravelMode.DRIVING
                            };
                            var locality = results[0].address_components[1].long_name;
                            var address = results[0].formatted_address;
                            var directionsService = new google.maps.DirectionsService();
                            directionsService.route(request, function (result, status) {
                                if (status == google.maps.DirectionsStatus.OK) {
                                    var polygon = new google.maps.Polygon({ paths: decodedPath });
                                    response.valid = google.maps.geometry.poly.containsLocation(results[0].geometry.location, polygon);
                                    if (response.valid) {
                                        for (var i = 0; i < result.routes[0].legs.length; i++) {
                                            response.distance += result.routes[0].legs[i].distance.value;
                                        }
                                        response.distance = response.distance / 1000;
                                    }
                                    response.status = "success";
                                    response.address = address;
                                    response.locality = locality;
                                    resolve(response);
                                }
                                else {
                                    response.status = "error";
                                    reject(response);
                                }
                            });
                            break;
                        case google.maps.GeocoderStatus.ZERO_RESULTS:
                            response.status = "error";
                            resolve(response);
                            break;
                        case google.maps.GeocoderStatus.ERROR:
                            response.status = "error";
                            reject(response);
                            break;
                        case google.maps.GeocoderStatus.OVER_QUERY_LIMIT:
                            response.status = "over";
                            reject(response);
                            break;
                        default:
                            response.status = "error";
                            reject(response);
                            break;
                    }
                });
            }, function (error) {
                response.status = "error";
                reject(response);
            });
        });
    };
    ;
    return SettingsService;
}());
SettingsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === "function" && _b || Object])
], SettingsService);

var _a, _b;
//# sourceMappingURL=settings-service.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_settings_service__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service__ = __webpack_require__(100);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountUpdatePage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AccountUpdatePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AccountUpdatePage = (function () {
    function AccountUpdatePage(alertCtrl, navCtrl, navParams, viewCtrl, UserService, settingsService, loadingCtrl) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.UserService = UserService;
        this.settingsService = settingsService;
        this.loadingCtrl = loadingCtrl;
        this.submitted = false;
        this.postalCodeValidation = {
            valid: true,
            spinner: false,
            message: ""
        };
        this.user = this.navParams.data.user;
        // console.log(this.user);
    }
    AccountUpdatePage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad AccountUpdatePage');
    };
    AccountUpdatePage.prototype.dismiss = function (data) {
        // using the injected ViewController this page
        // can "dismiss" itself and pass back data
        this.viewCtrl.dismiss(data);
    };
    AccountUpdatePage.prototype.onUpdate = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid && this.postalCodeValidation.valid) {
            this.loading = this.loadingCtrl.create();
            this.loading.present().then(function () {
                _this.UserService.update(_this.user).then(function (data) {
                    _this.loading.dismiss();
                    _this.viewCtrl.dismiss(_this.user);
                    _this.alert("Sucesso", "Dados alterados com sucesso.");
                }, function (error) {
                    _this.loading.dismiss();
                    _this.alert("Erro", "Ocorreu um erro.");
                });
            });
        }
    };
    AccountUpdatePage.prototype.checkLocation = function (postal_code) {
        var _this = this;
        if (postal_code.length == 8) {
            this.postalCodeValidation.spinner = true;
            this.settingsService.getDistance(postal_code).then(function (data) {
                if (data.status == "success") {
                    if (data.valid) {
                        _this.postalCodeValidation.valid = true;
                        _this.postalCodeValidation.message = data.address;
                        _this.user.locality = data.locality;
                    }
                    else {
                        _this.postalCodeValidation.valid = false;
                        _this.postalCodeValidation.message = data.address + " Não se encontra dentro do nosso raio de entrega. Consulte o nosso mapa para mais informações.";
                    }
                }
                else {
                    _this.postalCodeValidation.valid = false;
                    _this.postalCodeValidation.message = "Código postal inválido.";
                }
                _this.postalCodeValidation.spinner = false;
            }, function (error) {
                _this.postalCodeValidation.valid = false;
                _this.postalCodeValidation.spinner = false;
                _this.postalCodeValidation.message = "Ocorreu um erro a calcular.";
            });
        }
        else {
            this.user.locality = '';
        }
    };
    AccountUpdatePage.prototype.alert = function (title, subtitle) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subtitle,
            buttons: ['Ok']
        });
        alert.present();
    };
    return AccountUpdatePage;
}());
AccountUpdatePage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-account-update',template:/*ion-inline-start:"C:\Users\someb\Documents\Sites\fsr-takeaway\src\pages\account-update\account-update.html"*/'<ion-header>\n	<ion-toolbar>\n		<ion-buttons start>\n			<button ion-button (click)="dismiss()">Cancelar</button>\n		</ion-buttons>\n\n		<ion-title>\n			Alterar dados\n		</ion-title>\n\n		<!--<ion-buttons end>\n			<button ion-button (click)="applyFilters()" strong>Ok</button>\n		</ion-buttons>-->\n	</ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n\n	<form #userForm="ngForm" novalidate>\n		<ion-list>\n			<ion-item>\n				<ion-label stacked color="primary">Nome</ion-label>\n				<ion-input [(ngModel)]="user.name" name="name" type="text" #name="ngModel" required>\n				</ion-input>\n			</ion-item>\n			<ion-item>\n				<ion-label stacked color="primary">Telemóvel</ion-label>\n				<ion-input [(ngModel)]="user.mobile" [minlength]="9" name="mobile" type="tel" maxlength="9" #mobile="ngModel" required>\n				</ion-input>\n			</ion-item>\n			<ion-item>\n				<ion-label stacked color="primary">Data de Nascimento</ion-label>\n				<ion-datetime [(ngModel)]="user.birthday" name="birthday" #birthday="ngModel" displayFormat="DD/MMM/YYYY" max="2000" required></ion-datetime>\n			</ion-item>\n			<ion-item>\n				<ion-label stacked color="primary">Morada</ion-label>\n				<ion-input [(ngModel)]="user.address" name="address" type="text" #address="ngModel" required>\n				</ion-input>\n			</ion-item>\n			<ion-item [ngClass]="{\'invalid\': !postalCodeValidation.valid}">\n				<ion-label stacked color="primary">Código Postal</ion-label>\n				<ion-input [(ngModel)]="user.postal_code" [minlength]="8" [maxlength]="8" (ngModelChange)="checkLocation(user.postal_code, postalCode)" name="postal_code"  pattern="^\\d{4}-\\d{3}$" max="8" type="text" #postalCode="ngModel" required>\n				</ion-input>\n			</ion-item>\n			<ion-spinner [hidden]="!postalCodeValidation.spinner" margin-left></ion-spinner>\n			<p padding-left [hidden]="!postalCodeValidation.message">\n				<ion-icon name=\'alert\' [hidden]="postalCodeValidation.valid"></ion-icon> \n				{{postalCodeValidation.message}}\n			</p>\n		</ion-list>\n\n		<div padding>\n			<button [disabled]="!userForm.valid || !postalCodeValidation.valid" ion-button (click)="onUpdate(userForm)" type="submit" block>Editar</button>\n		</div>\n	</form>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\someb\Documents\Sites\fsr-takeaway\src\pages\account-update\account-update.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_settings_service__["a" /* SettingsService */], __WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__providers_settings_service__["a" /* SettingsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* LoadingController */]])
], AccountUpdatePage);

//# sourceMappingURL=account-update.js.map

/***/ })

});
//# sourceMappingURL=8.main.js.map