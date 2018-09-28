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

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: "\n\t\t\t\t<app-article></app-article>\n             "
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _article_article_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./article/article.component */ "./src/app/article/article.component.ts");
/* harmony import */ var _article_article_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./article/article.service */ "./src/app/article/article.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _article_article_component__WEBPACK_IMPORTED_MODULE_5__["ArticleComponent"]
            ],
            providers: [
                _article_article_service__WEBPACK_IMPORTED_MODULE_6__["ArticleService"]
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/article/article.component.css":
/*!***********************************************!*\
  !*** ./src/app/article/article.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n    font-size: 2.0em;\r\n    margin: 20px 0 0 0;\r\n    font-weight: 400;   \r\n}\r\nh3 { \r\n\tcolor: blue;\r\n}\r\ntable {\r\n    border-collapse: collapse;\r\n}\r\ntable, th, td {\r\n    border: 1px solid black;\r\n\tfont-size:17px;\r\n}\r\ninput {\r\n    width: 225px;\r\n    margin: 8px 0;\r\n\tbackground-color: #dfdfdf;\r\n\tfont-size:17px;\r\n}\r\nbutton {\r\n    background-color: #008CBA;\r\n\tcolor: white;\r\n}\r\n.error{\r\n    color: red;\r\n    font-size: 20px;\r\n}\r\n.success{\r\n    color: green;\r\n    font-size: 20px;\r\n}"

/***/ }),

/***/ "./src/app/article/article.component.html":
/*!************************************************!*\
  !*** ./src/app/article/article.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Simple CRUD Example using Typescript</h1>\r\n<h3 *ngIf=\"articleIdToUpdate; else create\"> \r\n   Update Article for Id: {{articleIdToUpdate}}\r\n</h3>\r\n<ng-template #create>\r\n   <h3> Create New Article </h3>\r\n</ng-template>\r\n<div>\r\n <form [formGroup]=\"articleForm\" (ngSubmit)=\"onArticleFormSubmit()\">\r\n  <table>\r\n    <tr><td>Enter Title</td><td><input formControlName=\"title\">\r\n\t       <label *ngIf=\"articleForm.get('title').invalid && processValidation\" [ngClass] = \"'error'\"> Title is required. </label>\r\n   \t</td></tr>\r\n    <tr><td>Enter Category</td><td><input formControlName=\"category\">\r\n\t       <label *ngIf=\"articleForm.get('category').invalid && processValidation\" [ngClass] = \"'error'\"> Category is required. </label>\r\n\t</td></tr>\t\r\n    <tr><td colspan=\"2\">\r\n\t    <button *ngIf=\"!articleIdToUpdate\">CREATE</button>  \r\n\t\t<button *ngIf=\"articleIdToUpdate\">UPDATE</button>  \r\n\t    <button (click)=\"backToCreateArticle()\" *ngIf=\"articleIdToUpdate\">Go Back</button>  \r\n\t</td></tr>\r\n  </table>\r\n </form> \r\n <br/>\r\n <div *ngIf=\"statusCode; else processing\">\r\n   <div *ngIf=\"statusCode === 201\" [ngClass] = \"'success'\">\r\n\t    Article added successfully.\r\n   </div>   \r\n   <div *ngIf=\"statusCode === 409\" [ngClass] = \"'success'\">\r\n        Article already exists.\r\n   </div>   \t\r\n   <div *ngIf=\"statusCode === 200\" [ngClass] = \"'success'\">\r\n        Article updated successfully.\r\n   </div>   \t      \r\n   <div *ngIf=\"statusCode === 204\" [ngClass] = \"'success'\">\r\n        Article deleted successfully.\r\n   </div>   \t   \r\n   <div *ngIf=\"statusCode === 500\" [ngClass] = \"'error'\">\r\n        Internal Server Error.\r\n   </div>\t\r\n </div>\r\n <ng-template #processing>\r\n\t<img *ngIf=\"requestProcessing\" src=\"assets/images/loading.gif\">\r\n </ng-template>\r\n</div>\r\n<h3>Article Details</h3>\r\n<table>\r\n  <tr><th> Id</th> <th>Title</th><th>Category</th><th></th><th></th></tr>\r\n  <tr *ngFor=\"let article of allArticles\" >\r\n    <td>{{article.id}}</td> <td>{{article.title}}</td> <td>{{article.category}}</td>\r\n\t<td><button type=\"button\" (click)=\"loadArticleToEdit(article.id)\">Edit</button> </td> \r\n\t<td><button type=\"button\" (click)=\"deleteArticle(article.id)\">Delete</button></td>\r\n  </tr>\r\n</table>\r\n"

/***/ }),

/***/ "./src/app/article/article.component.ts":
/*!**********************************************!*\
  !*** ./src/app/article/article.component.ts ***!
  \**********************************************/
/*! exports provided: ArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleComponent", function() { return ArticleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _article_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./article.service */ "./src/app/article/article.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArticleComponent = /** @class */ (function () {
    //Create constructor to get service instance
    function ArticleComponent(articleService) {
        this.articleService = articleService;
        this.requestProcessing = false;
        this.articleIdToUpdate = null;
        this.processValidation = false;
        //Create form
        this.articleForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    }
    //Create ngOnInit() and load articles
    ArticleComponent.prototype.ngOnInit = function () {
        this.getAllArticles();
    };
    //Fetch all articles
    ArticleComponent.prototype.getAllArticles = function () {
        var _this = this;
        this.articleService.getAllArticles()
            .subscribe(function (data) { return _this.allArticles = data; }, function (errorCode) { return _this.statusCode = errorCode; });
    };
    //Handle create and update article
    ArticleComponent.prototype.onArticleFormSubmit = function () {
        var _this = this;
        this.processValidation = true;
        if (this.articleForm.invalid) {
            return; //Validation failed, exit from method.
        }
        //Form is valid, now perform create or update
        this.preProcessConfigurations();
        var article = this.articleForm.value;
        if (this.articleIdToUpdate === null) {
            //Generate article id then create article
            this.articleService.getAllArticles()
                .subscribe(function (articles) {
                //Generate article id	 
                var maxIndex = articles.length - 1;
                var articleWithMaxIndex = articles[maxIndex];
                var articleId = articleWithMaxIndex.id + 1;
                article.id = articleId;
                //Create article
                _this.articleService.createArticle(article)
                    .subscribe(function (successCode) {
                    _this.statusCode = successCode;
                    _this.getAllArticles();
                    _this.backToCreateArticle();
                }, function (errorCode) { return _this.statusCode = errorCode; });
            });
        }
        else {
            //Handle update article
            article.id = this.articleIdToUpdate;
            this.articleService.updateArticle(article)
                .subscribe(function (successCode) {
                _this.statusCode = successCode;
                _this.getAllArticles();
                _this.backToCreateArticle();
            }, function (errorCode) { return _this.statusCode = errorCode; });
        }
    };
    //Load article by id to edit
    ArticleComponent.prototype.loadArticleToEdit = function (articleId) {
        var _this = this;
        this.preProcessConfigurations();
        this.articleService.getArticleById(articleId)
            .subscribe(function (article) {
            _this.articleIdToUpdate = article.id;
            _this.articleForm.setValue({ title: article.title, category: article.category });
            _this.processValidation = true;
            _this.requestProcessing = false;
        }, function (errorCode) { return _this.statusCode = errorCode; });
    };
    //Delete article
    ArticleComponent.prototype.deleteArticle = function (articleId) {
        var _this = this;
        this.preProcessConfigurations();
        this.articleService.deleteArticleById(articleId)
            .subscribe(function (successCode) {
            //this.statusCode = successCode;
            //Expecting success code 204 from server
            _this.statusCode = 204;
            _this.getAllArticles();
            _this.backToCreateArticle();
        }, function (errorCode) { return _this.statusCode = errorCode; });
    };
    //Perform preliminary processing configurations
    ArticleComponent.prototype.preProcessConfigurations = function () {
        this.statusCode = null;
        this.requestProcessing = true;
    };
    //Go back from update to create
    ArticleComponent.prototype.backToCreateArticle = function () {
        this.articleIdToUpdate = null;
        this.articleForm.reset();
        this.processValidation = false;
    };
    ArticleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-article',
            template: __webpack_require__(/*! ./article.component.html */ "./src/app/article/article.component.html"),
            styles: [__webpack_require__(/*! ./article.component.css */ "./src/app/article/article.component.css")]
        }),
        __metadata("design:paramtypes", [_article_service__WEBPACK_IMPORTED_MODULE_2__["ArticleService"]])
    ], ArticleComponent);
    return ArticleComponent;
}());



/***/ }),

/***/ "./src/app/article/article.service.ts":
/*!********************************************!*\
  !*** ./src/app/article/article.service.ts ***!
  \********************************************/
/*! exports provided: ArticleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleService", function() { return ArticleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArticleService = /** @class */ (function () {
    //Create constructor to get Http instance
    function ArticleService(http) {
        this.http = http;
        //URL for CRUD operations
        this.articleUrl = "http://localhost:3000/articles";
    }
    //Fetch all articles
    ArticleService.prototype.getAllArticles = function () {
        return this.http.get(this.articleUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(this.extractData));
    };
    //Create article
    ArticleService.prototype.createArticle = function (article) {
        var cpHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: cpHeaders });
        return this.http.post(this.articleUrl, article, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (success) { return success.status; }));
    };
    //Fetch article by id
    ArticleService.prototype.getArticleById = function (articleId) {
        var cpHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: cpHeaders });
        console.log(this.articleUrl + "/" + articleId);
        return this.http.get(this.articleUrl + "/" + articleId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(this.extractData));
    };
    //Update article
    ArticleService.prototype.updateArticle = function (article) {
        var cpHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: cpHeaders });
        return this.http.put(this.articleUrl + "/" + article.id, article, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (success) { return success.status; }));
    };
    //Delete article	
    ArticleService.prototype.deleteArticleById = function (articleId) {
        var cpHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: cpHeaders });
        return this.http.delete(this.articleUrl + "/" + articleId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (success) { return success.status; }));
    };
    ArticleService.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    ArticleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], ArticleService);
    return ArticleService;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/sygitech/Documents/typescriptdemo/typescriptproject/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map