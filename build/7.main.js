webpackJsonp([7],{

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map__ = __webpack_require__(414);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPageModule", function() { return MapPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MapPageModule = (function () {
    function MapPageModule() {
    }
    return MapPageModule;
}());
MapPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__map__["a" /* MapPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__map__["a" /* MapPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__map__["a" /* MapPage */]
        ]
    })
], MapPageModule);

//# sourceMappingURL=map.module.js.map

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
                var qt = { lat: 41.1294944, lng: -8.6198778 };
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */], __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]])
], SettingsService);

//# sourceMappingURL=settings-service.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_user_service__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_settings_service__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(46);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MapPage = (function () {
    function MapPage(platform, user, settingsService, loadingCtrl) {
        this.platform = platform;
        this.user = user;
        this.settingsService = settingsService;
        this.loadingCtrl = loadingCtrl;
    }
    MapPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create();
        this.loading.present().then(function () {
            _this.settingsService.getPath()
                .then(function (data) {
                _this.path = data;
                var polygon = null;
                if (_this.path) {
                    var decodedPath = google.maps.geometry.encoding.decodePath(_this.path);
                    polygon = new google.maps.Polygon({
                        paths: decodedPath,
                        strokeOpacity: 0.8,
                        strokeWeight: 0.1,
                        fillOpacity: 0.35
                    });
                }
                // this.confData.getMap().subscribe((mapData: any) => {
                var mapEle = _this.mapElement.nativeElement;
                var map = new google.maps.Map(mapEle, {
                    center: {
                        "name": "Frango Sobre Rodas",
                        "lat": 41.1294944,
                        "lng": -8.6198778
                    },
                    zoom: 11
                });
                // mapData.forEach((markerData: any) => {
                // 	let infoWindow = new google.maps.InfoWindow({
                // 		content: `<h5>${markerData.name}</h5>`
                // 	});
                // // 	let marker = new google.maps.Marker({
                // // 		position: markerData,
                // // 		map: map,
                // // 		title: markerData.name
                // // 	});
                // 	marker.addListener('click', () => {
                // 		infoWindow.open(map, marker);
                // 	});
                // });
                google.maps.event.addListenerOnce(map, 'idle', function () {
                    mapEle.classList.add('show-map');
                });
                if (polygon) {
                    polygon.setMap(map);
                }
                _this.loading.dismiss();
                // });
            }, function (error) {
                // console.log(error);
                _this.loading.dismiss();
            });
        });
    };
    MapPage.prototype.openSite = function (site) {
        window.open(site, '_blank');
    };
    return MapPage;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('mapCanvas'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* ElementRef */])
], MapPage.prototype, "mapElement", void 0);
MapPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-map',template:/*ion-inline-start:"C:\Users\someb\Documents\Sites\fsr-takeaway\src\pages\map\map.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Zona de entrega</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="map-page">\n\n  <div style="height: 100%; width: 100%" #mapCanvas id="map_canvas"></div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\someb\Documents\Sites\fsr-takeaway\src\pages\map\map.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_settings_service__["a" /* SettingsService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["r" /* Platform */], __WEBPACK_IMPORTED_MODULE_1__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__providers_settings_service__["a" /* SettingsService */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* LoadingController */]])
], MapPage);

//# sourceMappingURL=map.js.map

/***/ })

});
//# sourceMappingURL=7.main.js.map