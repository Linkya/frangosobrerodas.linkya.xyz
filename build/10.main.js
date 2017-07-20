webpackJsonp([10],{

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tutorial__ = __webpack_require__(420);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialPageModule", function() { return TutorialPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TutorialPageModule = (function () {
    function TutorialPageModule() {
    }
    return TutorialPageModule;
}());
TutorialPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__tutorial__["a" /* TutorialPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tutorial__["a" /* TutorialPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__tutorial__["a" /* TutorialPage */]
        ]
    })
], TutorialPageModule);

//# sourceMappingURL=tutorial.module.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(47);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TutorialPage = (function () {
    function TutorialPage(navCtrl, menu, storage) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.storage = storage;
        this.showSkip = true;
    }
    TutorialPage.prototype.startApp = function () {
        var _this = this;
        this.navCtrl.setRoot('MenuPage').then(function () {
            _this.storage.set('hasSeenTutorial', 'true');
        });
    };
    TutorialPage.prototype.onSlideChangeStart = function (slider) {
        this.showSkip = !slider.isEnd();
    };
    TutorialPage.prototype.ionViewWillEnter = function () {
        this.slides.update();
    };
    TutorialPage.prototype.ionViewDidEnter = function () {
        // the root left menu should be disabled on the tutorial page
        this.menu.enable(false);
    };
    TutorialPage.prototype.ionViewDidLeave = function () {
        // enable the root left menu when leaving the tutorial page
        this.menu.enable(true);
    };
    return TutorialPage;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('slides'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Slides */])
], TutorialPage.prototype, "slides", void 0);
TutorialPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-tutorial',template:/*ion-inline-start:"C:\Users\someb\Documents\Sites\fsr-takeaway\src\pages\tutorial\tutorial.html"*/'<ion-header no-border>\n\n  <ion-navbar>\n\n    <ion-buttons end *ngIf="showSkip">\n\n      <button ion-button (click)="startApp()" color="primary">Skip</button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content no-bounce>\n\n  <ion-slides #slides (ionSlideWillChange)="onSlideChangeStart($event)" pager>\n\n\n\n    <ion-slide>\n\n      <img src="assets/img/ica-slidebox-img-1.png" class="slide-image"/>\n\n      <h2 class="slide-title">\n\n        Welcome to <b>ICA</b>\n\n      </h2>\n\n      <p>\n\n        The <b>ionic conference app</b> is a practical preview of the ionic framework in action, and a demonstration of proper code use.\n\n      </p>\n\n    </ion-slide>\n\n\n\n    <ion-slide>\n\n      <img src="assets/img/ica-slidebox-img-2.png" class="slide-image"/>\n\n      <h2 class="slide-title" >What is Ionic?</h2>\n\n      <p><b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.</p>\n\n    </ion-slide>\n\n\n\n    <ion-slide>\n\n      <img src="assets/img/ica-slidebox-img-3.png" class="slide-image"/>\n\n      <h2 class="slide-title">What is Ionic Platform?</h2>\n\n      <p>The <b>Ionic Platform</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.</p>\n\n    </ion-slide>\n\n\n\n    <ion-slide>\n\n      <img src="assets/img/ica-slidebox-img-4.png" class="slide-image"/>\n\n      <h2 class="slide-title">Ready to Play?</h2>\n\n      <button ion-button icon-right large clear (click)="startApp()">\n\n        Continue\n\n        <ion-icon name="arrow-forward"></ion-icon>\n\n      </button>\n\n    </ion-slide>\n\n\n\n  </ion-slides>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\someb\Documents\Sites\fsr-takeaway\src\pages\tutorial\tutorial.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], TutorialPage);

//# sourceMappingURL=tutorial.js.map

/***/ })

});
//# sourceMappingURL=10.main.js.map