/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__media__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grid_item__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__overlay__ = __webpack_require__(3);
let data = {
    aaa: {
        title: 'title aaa',
        text: 'tetete gttettetvtvatsdtstdsdvjsa hvdj a',
    },
    bbb: {
        title: 'Aadf dkjbfkjdbk',
        text: 'tetete gttettetvtvatsdtstdsdvjsa hvdj a kjaskfjbkjas bdkjfbkjdsab kjbdsafkbsadkfbk baskdbfkbdsak jbdsakfjb kasbdfkb ksajbdkfj sadkflakdsnflkjdsaljf klkdsajf lkjdsaf',
    },
    abbxb: {
        title: 'title bbb',
        text: 'tetete gttettetvtvatsdtstdsdvjsa hvdj a',
    },
    bxbxb: {
        title: 'title bbb',
        text: 'tetete gttettetvtvatsdtstdsdvjsa hvdj a',
    },
    bbxxxb: {
        title: 'title bbb',
        text: 'tetete gttettetvtvatsdtstdsdvjsa hvdj a',
    },
    xbbxssdb: {
        title: 'title bbb',
        text: 'tetete gttettetvtvatsdtstdsdvjsa hvdj a',
    },
    abbxxxb: {
        title: 'title bbb',
        text: 'tetete gttettetvtvatsdtstdsdvjsa hvdj a',
    },
    wbbbddf: {
        title: 'title bbb',
        text: 'tetete gttettetvtvatsdtstdsdvjsa hvdj a',
    },
    ebbxxxb: {
        title: 'title bbb',
        text: 'tetete gttettetvtvatsdtstdsdvjsa hvdj a',
    },
    aSSS: {
        title: 'title bbb',
        text: 'tetete gttettetvtvatsdtstdsdvjsa hvdj a',
    },
    SDSS: {
        title: 'title bbb',
        text: 'tetete gttettetvtvatsdtstdsdvjsa hvdj a',
    },
    sdsd: {
        title: 'title bbb',
        text: 'tetete gttettetvtvatsdtstdsdvjsa hvdj a',
    },
    rrbbxssdb: {
        title: 'title bbb',
        text: 'tetete gttettetvtvatsdtstdsdvjsa hvdj a',
    },
    tbbxxxb: {
        title: 'title bbb',
        text: 'tetete gttettetvtvatsdtstdsdvjsa hvdj a',
    },
    ybbbddf: {
        title: 'title bbb',
        text: 'tetete gttettetvtvatsdtstdsdvjsa hvdj a',
    }
};





const TEMPLATES = {
    GRID_ITEM: document.querySelector('._templates .grid-item'),
    OVERLAY: document.querySelector('._templates .template-overlay'),
    OVERLAY_GRID_ITEM: document.querySelector('._templates .overlay-grid-item'),
    OVERLAY_SVG: document.querySelector('._templates .overlay-svg'),
    OVERLAY_CLOSE: document.querySelector('._templates .overlay-close')
};

const DOM = {
    BODY: document.querySelector('body'),
    HTML: document.querySelector('html'),
};

const media = Object(__WEBPACK_IMPORTED_MODULE_0__media__["a" /* default */])();

const Overlay = function() {
    const proto = Object.assign(
        __WEBPACK_IMPORTED_MODULE_2__overlay__["c" /* proto */],
        __WEBPACK_IMPORTED_MODULE_2__overlay__["d" /* svgProto */],
        __WEBPACK_IMPORTED_MODULE_2__overlay__["a" /* closeProto */],
        __WEBPACK_IMPORTED_MODULE_2__overlay__["b" /* overlayGridItemProto */]
    );
    let a = Object.create(proto)
        .init(TEMPLATES.OVERLAY)
        .initGridItem(TEMPLATES.OVERLAY_GRID_ITEM)
        .initSvg(TEMPLATES.OVERLAY_SVG)
        .initClose(TEMPLATES.OVERLAY_CLOSE)
    DOM.BODY.appendChild(a.dom.el);

    return a;
};

const GridItem = function(data) {
    var proto = Object.assign(__WEBPACK_IMPORTED_MODULE_1__grid_item__["a" /* gridItemProto */], {
        open() {
            this.DOM.el.style.opacity = 0;
        },
        close() {
            this.DOM.el.style.opacity = 1;
        }
    });

    let gridItem = Object.create(proto);
    gridItem.init(data);
    return gridItem;
};


const items = Object.values(data).map(function(attributes) {
    let el = TEMPLATES.GRID_ITEM.cloneNode(true);
    DOM.BODY.appendChild(el);
    let gridItem = GridItem({ el, attributes });

    el.addEventListener('click', function() {

        let el = this.DOM.el;
        let rect = el.getBoundingClientRect();

        console.log(rect);

        const w = media.getWidth();
        const h = media.getHeight();
        const o = 150;
        const item = this;

        DOM.HTML.style.overflow = 'hidden';

        overlay.open({
            rect, w, h, o,
            close: () => {
                this.close();
                overlay.hideData();
                DOM.HTML.style.overflow = 'auto';
            },
            done: function() {
                overlay.showData(item, rect);
            }
        });

        this.open();

    }.bind(gridItem));

    return gridItem;
});

const overlay = Overlay();













/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const Media = function() {

    var proto = {
        getWidth: function() {
            if (!this.width) {
                this.width = window.innerWidth;
            }
            return this.width;
        },
        getHeight: function() {
            if (!this.height) {
                this.height = window.innerHeight;
            }
            return this.height;
        }
    }

    return Object.create(proto);
};

/* harmony default export */ __webpack_exports__["a"] = (Media);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const gridItemProto = {
    name: 'grid item',

    init: function(data) {

        this.DOM = {};
        this.DOM.el = data.el;
        this.DOM.title = data.el.querySelector('.title');
        this.DOM.title.textContent = data.attributes.title;
        this.DOM.path = data.el.querySelector('.xxx');

        this.data = data.attributes;
    }
};
/* harmony export (immutable) */ __webpack_exports__["a"] = gridItemProto;




/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const proto = {

    init(template) {
        this.dom = {};
        this.dom.el = template.cloneNode(true);
        return this;
    }
}
/* harmony export (immutable) */ __webpack_exports__["c"] = proto;


const closeProto = {

    initClose(template) {

        this.dom.closeButon = template.cloneNode(true);
        this.dom.el.appendChild(this.dom.closeButon);

        this.dom.closeButon.addEventListener('click', this.close.bind(this));
        return this;
    },

    close() {

        let opt = this.opt;
        let el = this.dom.el;

        let rect = opt.rect;

        el.classList.remove('active');

        anime({
            targets: this.dom.path,
            duration: 200,
            easing: 'easeOutQuad',
            elasticity: 250,
            d: [{
                value: [
                    'M', rect.left, rect.top,
                    rect.left, rect.height + rect.top,
                    rect.left + rect.width, rect.height + rect.top,
                    rect.left + rect.width, rect.top
                ].join(' ')
            }
            ],
            complete: () => {
                el.style.opacity = 0;
            }
        });

        opt.close();
    },

}
/* harmony export (immutable) */ __webpack_exports__["a"] = closeProto;


const svgProto = {

    initSvg(template) {

        this.dom.svg = template.cloneNode(true);
        this.dom.el.appendChild(this.dom.svg);
        this.dom.path = this.dom.el.querySelector('path');

        return this;
    },

    open(opt) {

        if (this.openingAnimation) {
            return;
        }

        this.openingAnimation = true;

        this.opt = opt;
        let el = this.dom.el;

        el.style.opacity = 1;
        el.classList.add('active');

        let rect = opt.rect;
        let w = opt.w;
        let o = opt.o;
        let h = opt.h;

        var d = [
            'M', rect.left, rect.top,
            rect.left, rect.height + rect.top,
            rect.left + rect.width, rect.height + rect.top,
            rect.left + rect.width, rect.top
        ];

        this.dom.path.setAttribute('opacity', 1);
        this.dom.path.setAttribute('d', d.join(' '));

        var t = anime.timeline()
        t.add({
            targets: this.dom.path,
            duration: 500,
            easing: 'easeOutQuad',
            elasticity: 250,
            d: [{
                value: [
                    'M', rect.left, rect.top,
                    0, h,
                    w, h,
                    rect.left + rect.width, rect.top
                ].join(' ')
            }
            ],
            complete: () => this.isAnimating = false
        }).add({
            targets: this.dom.path,
            duration: 400,
            easing: 'easeOutQuad',
            elasticity: 250,
            offset: 100,
            d: [{
                value: [
                    'M', 0, o,
                    0, h,
                    w, h,
                    w, o
                ].join(' ')
            }
            ],
            complete: () => {
                opt.done()
                this.openingAnimation = false;
            }

        })
    }
};
/* harmony export (immutable) */ __webpack_exports__["d"] = svgProto;


const overlayGridItemProto = {

    initGridItem(template) {

        this.dom.gridItemTemplate = template.cloneNode(true);

        const el = this.dom.el;
        const t = this.dom.gridItemTemplate;

        el.appendChild(t);

        this.dom.header = t.querySelector('.header');
        this.dom.text = t.querySelector('.text');
        return this;
    },

    showData(gridItem, rect) {

        let data = gridItem.data;

        this.dom.gridItemTemplate.style.display = 'block';
        this.dom.text.textContent = data.text;
        this.dom.header.textContent = data.title;

        let itemsContent = this.dom.gridItemTemplate.querySelector('.items');
        let count = 10;

        var intro = document.createElement('div');
        intro.classList.add('intro')

        for (var i = 0, n = count; i < n; i++) {
            let x = intro.cloneNode(true);
            x.textContent = 'daaaaaa ' + i;
            itemsContent.appendChild(x);
        }

        anime({
            targets: [this.dom.text, this.dom.header],
            duration: 600,
            easing: 'easeOutExpo',
            delay: (target, index) => {
                return index * 60;
            },
            translateY: (target, index, total) => {
                return index !== total - 1 ? [50, 0] : 0;
            },
            scale: (target, index, total) => {
                return index === total - 1 ? [0, 1] : 1;
            },
            opacity: 1
        });
    },

    hideData() {
        this.dom.gridItemTemplate.style.display = 'none';
    }
};
/* harmony export (immutable) */ __webpack_exports__["b"] = overlayGridItemProto;




/***/ })
/******/ ]);