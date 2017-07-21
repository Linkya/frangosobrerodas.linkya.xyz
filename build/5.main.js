webpackJsonp([5],{

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order__ = __webpack_require__(418);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPageModule", function() { return OrderPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OrderPageModule = (function () {
    function OrderPageModule() {
    }
    return OrderPageModule;
}());
OrderPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__order__["a" /* OrderPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__order__["a" /* OrderPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__order__["a" /* OrderPage */]
        ]
    })
], OrderPageModule);

//# sourceMappingURL=order.module.js.map

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

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OrderService = (function () {
    function OrderService(http, userService) {
        this.http = http;
        this.userService = userService;
        // API_URL = 'http://172.24.62.104/link.eddmi.com/index.php/takeaway/';
        // ENTITY_ID = 2;
        this.API_URL = 'https://app.linkya.xyz/takeaway/';
        this.ENTITY_ID = 281;
        // console.log('Hello OrderService Provider');
    }
    OrderService.prototype.all = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.userService.getToken().then(function (data) {
                var _headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': data });
                var _options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: _headers });
                var url = _this.API_URL + 'order/all/';
                _this.http.get(url, _options)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    _this.orders = data.data.orders;
                    resolve(_this.orders);
                }, function (error) {
                    reject(error);
                });
            });
        });
    };
    OrderService.prototype.create = function (order) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.userService.getToken().then(function (data) {
                var _headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': data });
                var _options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: _headers });
                var url = _this.API_URL + 'order/new';
                _this.http.post(url, order, _options)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    // console.log(data);
                    resolve(data);
                }, function (error) {
                    // console.log(error);
                    reject(error);
                });
            });
        });
    };
    ;
    return OrderService;
}());
OrderService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */], __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]])
], OrderService);

//# sourceMappingURL=order-service.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductService = (function () {
    function ProductService(http) {
        this.http = http;
        // API_URL = 'http://172.24.62.104/link.eddmi.com/index.php/takeaway/';
        // ENTITY_ID = 2;
        this.API_URL = 'https://app.linkya.xyz/takeaway/';
        this.ENTITY_ID = 281;
        // console.log('Hello ProductService Provider');
    }
    ProductService.prototype.getFixed = function (local) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var url = _this.API_URL + 'product/menu?type=fixed&local=' + local;
            var _headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': _this.ENTITY_ID });
            var _options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: _headers });
            _this.http.get(url, _options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.fixedMenu = data.data.menu;
                resolve(_this.fixedMenu);
            }, function (error) {
                // console.log(error);
                reject(error);
            });
        });
    };
    ProductService.prototype.getDaily = function (local) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var url = _this.API_URL + 'product/menu?type=daily&local=' + local;
            var _headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': _this.ENTITY_ID });
            var _options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: _headers });
            _this.http.get(url, _options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.dailyMenu = data.data.menu;
                resolve(_this.dailyMenu);
            }, function (error) {
                // console.log(error);
                reject(error);
            });
        });
    };
    return ProductService;
}());
ProductService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]])
], ProductService);

//# sourceMappingURL=menu-service.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_menu_service__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_cart_service__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_order_service__ = __webpack_require__(405);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
    To learn how to use third party libs in an
    Ionic app check out our docs here: http://ionicframework.com/docs/v2/resources/third-party-libs/
*/
// import moment from 'moment';




var OrderPage = (function () {
    function OrderPage(alertCtrl, app, loadingCtrl, modalCtrl, navCtrl, toastCtrl, productService, orderService, user) {
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.productService = productService;
        this.orderService = orderService;
        this.user = user;
        // the list is a child of the menu page
        // @ViewChild('scheduleList') gets a reference to the list
        // with the variable #scheduleList, `read: List` tells it to return
        // the List and not a reference to the element
        this.segment = 'pending';
        this.fixedMenu = [];
        this.dailyMenu = [];
    }
    OrderPage.prototype.ionViewDidLoad = function () {
        this.app.setTitle('orders');
        // this.cartService.set(this.cart);
        this.loadOrders();
    };
    OrderPage.prototype.loadOrders = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create();
        this.loading.present().then(function () {
            _this.orderService.all()
                .then(function (data) {
                console.log(data);
                if (data) {
                    _this.orders = data.filter(function (d) { return d.state == 'Entregue' || d.state == 'Cancelada'; });
                    _this.pending = data.filter(function (d) { return d.state == 'Submetida' || d.state == 'Em preparação' || d.state == 'Em processo de entrega'; });
                }
                else {
                    var alert_1 = _this.alertCtrl.create({
                        title: "Encomendas",
                        subTitle: "Sem histórico de encomendas."
                    });
                    alert_1.addButton({
                        text: 'Ok',
                        handler: function (data) {
                            _this.navCtrl.setRoot('MenuPage');
                        }
                    });
                    alert_1.present();
                }
                _this.loading.dismiss();
            }, function (error) {
                _this.alert('Erro', 'Ocorreu um erro no carregamento das encomendas.');
                _this.loading.dismiss();
            });
        });
    };
    OrderPage.prototype.detail = function (order) {
        this.navCtrl.push('OrderDetailPage', {
            order: order
        });
    };
    OrderPage.prototype.alert = function (title, subtitle) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subtitle,
            buttons: ['Ok']
        });
        alert.present();
    };
    return OrderPage;
}());
OrderPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-order',template:/*ion-inline-start:"C:\Users\someb\Documents\Sites\fsr-takeaway\src\pages\order\order.html"*/'<ion-header>\n\n	<ion-navbar no-border-bottom>\n\n		<button ion-button menuToggle>\n\n			<ion-icon name="menu"></ion-icon>\n\n		</button>\n\n		\n\n		<ion-title [hidden]="true">Encomendas</ion-title>\n\n		<ion-segment [(ngModel)]="segment">\n\n			<ion-segment-button value="pending">\n\n				Pendentes\n\n			</ion-segment-button>\n\n			<ion-segment-button value="completed">\n\n				Concluídas\n\n			</ion-segment-button>\n\n		</ion-segment>\n\n\n\n		<ion-buttons end>\n\n			\n\n		</ion-buttons>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n	<div [ngSwitch]="segment">\n\n	 <ion-list *ngSwitchCase="\'pending\'">\n\n		<ion-item (click)="detail(order)" *ngFor="let order of pending">\n\n			<h2>#{{order.id}}</h2>\n\n			<p>{{order.created_at}}</p>\n\n			<div class="item-note" item-right>\n\n				<p text-right>{{order.state}}</p>\n\n				<p text-right>{{order.total}}€</p>\n\n			</div>\n\n		</ion-item>\n\n	 </ion-list>\n\n	 <ion-list *ngSwitchCase="\'completed\'">\n\n		<ion-item (click)="detail(order)" *ngFor="let order of orders">\n\n			<h2>#{{order.id}}</h2>\n\n			<p>{{order.created_at}}</p>\n\n			<div class="item-note" item-right>\n\n				<p text-right>{{order.state}}</p>\n\n				<p text-right>{{order.total}}€</p>\n\n			</div>\n\n		</ion-item>\n\n	 </ion-list>\n\n	</div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\someb\Documents\Sites\fsr-takeaway\src\pages\order\order.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_menu_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_4__providers_cart_service__["b" /* CartService */], __WEBPACK_IMPORTED_MODULE_5__providers_order_service__["a" /* OrderService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_menu_service__["a" /* ProductService */],
        __WEBPACK_IMPORTED_MODULE_5__providers_order_service__["a" /* OrderService */],
        __WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */]])
], OrderPage);

//# sourceMappingURL=order.js.map

/***/ })

});
//# sourceMappingURL=5.main.js.map