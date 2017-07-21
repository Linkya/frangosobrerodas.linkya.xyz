webpackJsonp([13],{

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account__ = __webpack_require__(409);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageModule", function() { return AccountPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AccountPageModule = (function () {
    function AccountPageModule() {
    }
    return AccountPageModule;
}());
AccountPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__account__["a" /* AccountPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__account__["a" /* AccountPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__account__["a" /* AccountPage */]
        ]
    })
], AccountPageModule);

//# sourceMappingURL=account.module.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_service__ = __webpack_require__(100);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountPage = (function () {
    function AccountPage(alertCtrl, nav, userService, modalCtrl, loadingCtrl) {
        this.alertCtrl = alertCtrl;
        this.nav = nav;
        this.userService = userService;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    AccountPage.prototype.ngAfterViewInit = function () {
        // this.userService.getUser().then(data => {
        // 	this.user = data;
        // })
    };
    AccountPage.prototype.ionViewDidLoad = function () {
        // this.cartService.set(this.cart);
        this.loadUser();
    };
    AccountPage.prototype.loadUser = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create();
        this.loading.present().then(function () {
            _this.userService.get()
                .then(function (data) {
                _this.loading.dismiss();
                _this.user = data;
            }, function (error) {
                _this.loading.dismiss();
                // console.log(error);
            });
        });
    };
    AccountPage.prototype.presentUpdate = function () {
        var _this = this;
        var user = new __WEBPACK_IMPORTED_MODULE_2__providers_user_service__["b" /* User */](this.user);
        var modal = this.modalCtrl.create('AccountUpdatePage', { user: user });
        modal.present();
        modal.onWillDismiss(function (data) {
            if (data) {
                _this.user = data;
            }
        });
    };
    // Present an alert with the current username populated
    // clicking OK will update the username and display it
    // clicking Cancel will close the alert and do nothing
    AccountPage.prototype.changePassword = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Alterar password',
            buttons: [
                'Cancelar'
            ]
        });
        alert.addInput({
            name: 'password',
            value: this.user.password,
            placeholder: 'Password'
        });
        alert.addInput({
            name: 'newPassword',
            value: this.user.newPassword,
            placeholder: 'Nova Password'
        });
        alert.addButton({
            text: 'Ok',
            handler: function (data) {
                _this.loading = _this.loadingCtrl.create();
                _this.loading.present().then(function () {
                    _this.userService.changePassword(data.password, data.newPassword).then(function (data) {
                        _this.loading.dismiss();
                        _this.user.token = data.data.token;
                        _this.userService.setUser(_this.user);
                        _this.alert('Sucesso', 'Password alterada com sucesso.');
                    }, function (error) {
                        _this.loading.dismiss();
                        switch (error.status) {
                            case 403:
                                _this.alert('Erro', 'Password errada.');
                                break;
                            default:
                                _this.alert('Erro', 'Ocorreu um erro a alterar a password.');
                                break;
                        }
                    });
                });
            }
        });
        alert.present();
    };
    AccountPage.prototype.logout = function () {
        this.userService.logout();
        this.nav.setRoot('LoginPage');
    };
    AccountPage.prototype.alert = function (title, subtitle) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subtitle,
            buttons: ['Ok']
        });
        alert.present();
    };
    return AccountPage;
}());
AccountPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-account',template:/*ion-inline-start:"C:\Users\someb\Documents\Sites\fsr-takeaway\src\pages\account\account.html"*/'<ion-header>\n\n	<ion-navbar>\n\n		<button ion-button menuToggle>\n\n			<ion-icon name="menu"></ion-icon>\n\n		</button>\n\n		<ion-title>Conta</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n	<div padding text-center *ngIf="user">\n\n	 	<ion-list no-lines>\n\n			<ion-item>\n\n				<h1>{{user.name}}</h1>\n\n			</ion-item>\n\n			<ion-item>\n\n				<ion-icon name="mail" item-left></ion-icon>\n\n				<ion-label style="overflow: inital; white-space: initial">{{user.email}}</ion-label>\n\n			</ion-item>\n\n			<ion-item>\n\n				<ion-icon name="call" item-left></ion-icon>\n\n				<ion-label>{{user.mobile}}</ion-label>\n\n			</ion-item>\n\n			<ion-item>\n\n				<ion-icon name="calendar" item-left></ion-icon>\n\n				<ion-label>{{user.birthday}}</ion-label>\n\n			</ion-item>\n\n			<ion-item>\n\n				<ion-icon name="locate" item-left></ion-icon>\n\n				<ion-label style="overflow: inital; white-space: initial">\n\n					{{user.address}}\n\n					<br>\n\n					{{user.postal_code}} {{user.locality}}\n\n				</ion-label>\n\n			</ion-item>\n\n		</ion-list>\n\n\n\n		<ion-row responsive-sm>\n\n			<ion-col col-12>\n\n				<button ion-button (click)="presentUpdate()" block>Alterar dados</button>\n\n			</ion-col>\n\n			<ion-col col-12>\n\n				<button ion-button color="light" (click)="changePassword()" block>Alterar password</button>\n\n			</ion-col>\n\n			<ion-col col-12>\n\n				<button ion-button color="light" (click)="logout()" block>Logout</button>\n\n			</ion-col>\n\n		</ion-row>\n\n	</div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\someb\Documents\Sites\fsr-takeaway\src\pages\account\account.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* LoadingController */]])
], AccountPage);

//# sourceMappingURL=account.js.map

/***/ })

});
//# sourceMappingURL=13.main.js.map