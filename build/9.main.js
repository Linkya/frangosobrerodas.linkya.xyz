webpackJsonp([9],{

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_detail__ = __webpack_require__(417);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailPageModule", function() { return OrderDetailPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OrderDetailPageModule = (function () {
    function OrderDetailPageModule() {
    }
    return OrderDetailPageModule;
}());
OrderDetailPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__order_detail__["a" /* OrderDetailPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__order_detail__["a" /* OrderDetailPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__order_detail__["a" /* OrderDetailPage */]
        ]
    })
], OrderDetailPageModule);

//# sourceMappingURL=order-detail.module.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(47);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Cart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Order; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CartService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Cart = (function () {
    function Cart() {
        this.items = [];
        this.totalPrice = 0;
        this.totalQuantity = 0;
        this.items = [];
    }
    return Cart;
}());

var Order = (function () {
    function Order() {
        this.payment_method_id = null;
        this.postal_code = null;
        this.hour = null;
    }
    return Order;
}());

var CartService = (function () {
    function CartService(events, storage, http) {
        this.events = events;
        this.storage = storage;
        this.http = http;
        // API_URL = 'http://172.24.62.104/link.eddmi.com/index.php/takeaway/';
        // ENTITY_ID = 2;
        this.API_URL = 'https://app.linkya.xyz/takeaway/';
        this.ENTITY_ID = 281;
    }
    CartService.prototype.addItem = function (item, measure) {
        var _this = this;
        return this.get().then(function (cart) {
            // console.log(cart);
            var auxItem = cart.items.find(function (p) { return p.id === item.id && p.measure_name === measure.name; });
            if (!auxItem) {
                var newItem = item;
                newItem.measure_name = measure.name;
                newItem.price = measure.value;
                newItem.quantity = 1;
                cart.totalQuantity++;
                cart.items.push(newItem);
            }
            else {
                var index = cart.items.indexOf(auxItem);
                cart.items[index].quantity++;
            }
            cart.totalPrice += Number(measure.value);
            cart.totalPrice = Number(cart.totalPrice.toFixed(2));
            _this.set(cart);
            return cart;
        });
    };
    CartService.prototype.incrementQuantity = function (item) {
        var _this = this;
        return this.get().then(function (cart) {
            // console.log(cart);
            var auxItem = cart.items.find(function (p) { return p.id === item.id && p.measure_name === item.measure_name; });
            var index = cart.items.indexOf(auxItem);
            cart.items[index].quantity++;
            cart.totalPrice += Number(cart.items[index].price);
            cart.totalPrice = Number(cart.totalPrice.toFixed(2));
            _this.set(cart);
            return cart;
        });
    };
    CartService.prototype.decrementQuantity = function (item) {
        var _this = this;
        return this.get().then(function (cart) {
            var auxItem = cart.items.find(function (p) { return p.id === item.id && p.measure_name === item.measure_name; });
            var index = cart.items.indexOf(auxItem);
            if (cart.items[index].quantity > 1) {
                cart.items[index].quantity--;
                cart.totalPrice -= Number(cart.items[index].price);
                cart.totalPrice = Number(cart.totalPrice.toFixed(2));
                _this.set(cart);
            }
            return cart;
        });
    };
    CartService.prototype.removeItem = function (item) {
        var _this = this;
        return this.get().then(function (cart) {
            var auxItem = cart.items.find(function (p) { return p.id === item.id && p.measure_name === item.measure_name; });
            var index = cart.items.indexOf(auxItem);
            if (index > -1) {
                cart.totalQuantity--;
                cart.totalPrice -= auxItem.quantity * Number(auxItem.price);
                cart.totalPrice = Number(cart.totalPrice.toFixed(2));
                cart.items.splice(index, 1);
            }
            _this.set(cart);
            return cart;
        });
    };
    CartService.prototype.set = function (cart) {
        this.storage.set('cart', cart);
    };
    ;
    CartService.prototype.get = function () {
        var _this = this;
        return this.storage.get('cart').then(function (value) {
            if (value) {
                return value;
            }
            else {
                var cart = new Cart();
                _this.set(cart);
                return cart;
            }
        });
    };
    ;
    CartService.prototype.paymentMethods = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var url = _this.API_URL + '/payment/all';
            var _headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': _this.ENTITY_ID });
            var _options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: _headers });
            _this.http.get(url, _options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    return CartService;
}());
CartService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Events */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]])
], CartService);

//# sourceMappingURL=cart-service.js.map

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_cart_service__ = __webpack_require__(404);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDetailPage; });
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
 * Generated class for the OrderDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var OrderDetailPage = (function () {
    function OrderDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.order = new __WEBPACK_IMPORTED_MODULE_2__providers_cart_service__["a" /* Order */]();
        this.order = this.navParams.data.order;
        // console.log(this.order);
    }
    OrderDetailPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad OrderDetailPage');
    };
    return OrderDetailPage;
}());
OrderDetailPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-order-detail',template:/*ion-inline-start:"C:\Users\someb\Documents\Sites\fsr-takeaway\src\pages\order-detail\order-detail.html"*/'<ion-header>\n	<ion-navbar>\n		<ion-title>#{{order.id}}</ion-title>\n	</ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n	<ion-row *ngFor="let item of order.items" padding-left padding-right>\n		<ion-col col-md-6 col-lg-8 no-padding>\n			<p no-margin>{{item.name}}</p>\n			<p no-margin style="font-size: 11px">{{item.measure_name}}</p>\n		</ion-col>\n		<ion-col col-md-6 col-lg-4 text-right no-padding>\n			<ion-row>\n				<ion-col col-6>\n					<p no-margin>{{item.quantity}}</p>\n				</ion-col>\n				<ion-col col-6>\n					<p no-margin>{{item.quantity * item.price }} €</p>\n				</ion-col>\n			</ion-row>\n		</ion-col>\n	</ion-row>\n	<ion-row padding>\n		<ion-col col-lg-8 col-md-6 no-padding>\n		</ion-col>\n		<ion-col text-right no-padding>\n			<ion-row>\n				<ion-col align-right>\n					TOTAL:\n				</ion-col>\n				<ion-col>\n					{{order.total}} €\n				</ion-col>\n			</ion-row>\n		</ion-col>\n	</ion-row>\n</ion-content>\n'/*ion-inline-end:"C:\Users\someb\Documents\Sites\fsr-takeaway\src\pages\order-detail\order-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], OrderDetailPage);

//# sourceMappingURL=order-detail.js.map

/***/ })

});
//# sourceMappingURL=9.main.js.map