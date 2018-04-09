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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/calc.js":
/*!*********************!*\
  !*** ./src/calc.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const calc = Object.create({\n\n    init(rate, monthlyPayment) {\n\n        this.rate = parseFloat(rate);\n        this.monthlyPayment = parseFloat(monthlyPayment);\n        return this;\n    },\n\n    getRate(sum) {\n\n        return sum * this.rate / 100;\n    },\n\n    daysInMonth(month, year) {\n        return new Date(year, month, 0).getDate();\n    },\n\n    round(number, precision) {\n        const x = Math.pow(10, precision);\n        return Math.round(number * x) / x;\n    },\n\n    aaa: function(sum, months) {\n\n        if (!sum || !months || !this.rate || !this.monthlyPayment) {\n            return null;\n        }\n\n        const res = {\n            sum: {\n                begin: Number.parseInt(sum, 10),\n                end: null,\n                interestYearly: null\n            },\n            meta: {\n                interest: this.rate,\n                months: months,\n                payment: this.monthlyPayment,\n            },\n            payments: []\n        };\n\n        let interestYearly = 0;\n        for (var i = 1, n = months; i <= n; i++) {\n\n            let dailyRate = this.getRate(sum) / 360;\n            let interestPayment = dailyRate * this.daysInMonth(i % 12, 2017);\n\n            let payment = this.monthlyPayment - interestPayment;\n\n            sum -= payment;\n            interestYearly += interestPayment;\n            res.payments.push({\n                rate: this.round(interestPayment, 2),\n                payment: this.round(payment, 2)\n            })\n        }\n\n        res.sum.end = this.round(sum, 2);\n        res.sum.interestYearly = this.round(interestYearly, 2);\n        return res;\n    }\n\n});\n\nmodule.exports = calc;\n\n\n\n//# sourceURL=webpack:///./src/calc.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const calc = __webpack_require__(/*! ./calc */ \"./src/calc.js\");\n\nconst sumEl = document.querySelector('#sum');\nconst interestEl = document.querySelector('#interest');\nconst monthsEl = document.querySelector('#months');\nconst paymentEl = document.querySelector('#payment');\n\nconst Render = Object.create({\n    init(result) {\n        this.el = document.querySelector('#result');\n        this.el.textContent = '';\n        this.result = result;\n        return this;\n    },\n\n    add(tag, value) {\n        const x = document.createElement(tag);\n        if (typeof  value === 'string') {\n            x.textContent = `${value}`;\n        } else if (Array.isArray(value)) {\n            value.forEach(function(item) {\n                x.appendChild(item)\n            })\n        } else {\n            x.appendChild(value);\n        }\n\n        return this.el.appendChild(x);\n    },\n\n    textEl(tag, text, attrs) {\n        const x = document.createElement(tag);\n        x.textContent = text;\n        Object.keys(attrs || {}).forEach(function(item) {\n            x.setAttribute(item, attrs[item])\n        });\n        return x;\n    },\n\n    render() {\n\n        const r = this.result;\n        if (!r) {\n            this.add('h4', 'zadej vsechny hodnoty');\n            return;\n        }\n        this.add('h4', '---------------------------------------------------------');\n        this.add('h3', `${(r.meta.interest).toLocaleString()}% / ${r.meta.months} měsíců / splatka: ${(r.meta.payment).toLocaleString()} Kc`);\n        // this.add('h3', 'urok', (r.meta.interest).toLocaleString() + '%');\n        // this.add('h3', 'pocet mesicu', (r.meta.months).toLocaleString());\n        // this.add('h3', 'splatka', (r.meta.payment).toLocaleString());\n        this.add('h4', '---------------------------------------------------------');\n\n        this.add('span', 'jistina');\n        this.add('h3', (r.sum.begin).toLocaleString());\n        this.add('h3', (r.sum.end).toLocaleString());\n\n        this.add('h4', ' ');\n        this.add('span', 'zaplaceno jistiny celkem');\n        this.add('h3', (r.sum.begin - r.sum.end).toLocaleString());\n        this.add('h4', ' ');\n        this.add('span', 'zaplaceny urok celkem');\n        this.add('h3', (r.sum.interestYearly).toLocaleString());\n        this.add('h4', ' ');\n        this.add('div', '---------------------------------------------------------');\n\n        const tableHeader = this.add('div', [this.textEl('span', '#splatka', { class: 's_1' }), this.textEl('span', 'urok'), this.textEl('span', 'jistina')]);\n        tableHeader.setAttribute('class', 'list');\n        this.add('div', '---------------------------------------------------------');\n        for (var i = 0; i < r.payments.length; i++) {\n            var a = r.payments[i];\n\n            const tableContent = this.add('div', [\n                this.textEl('span', i + 1, { class: 's_1' }),\n                this.textEl('span', (a.rate).toLocaleString()),\n                this.textEl('span', (a.payment).toLocaleString())\n            ]);\n            tableContent.setAttribute('class', 'list')\n        }\n    }\n});\nconst q = function(url) {\n    var query = url.split('?')[1];\n    var params = {};\n    if (typeof query === 'string') {\n        var args = query.split('&');\n\n        params = args.reduce(function(res, item) {\n            var x = item.split('=');\n            res[x[0]] = x[1];\n            return res;\n        }, {});\n    }\n\n    return params;\n};\n\n\nconst get = function() {\n\n    const opt = {\n        interest: interestEl.value,\n        sum: sumEl.value,\n        months: monthsEl.value,\n        payment: paymentEl.value,\n    };\n\n    const x = calc.init(opt.interest, opt.payment);\n    const result = x.aaa(opt.sum, opt.months);\n\n    const render = Render.init(result);\n    render.render();\n};\n\nconst initialize = function() {\n\n    const params = q(window.location.href);\n\n    let sum = parseFloat(params.sum);\n    let interest = parseFloat(params.interest);\n    let months = parseFloat(params.months);\n    let payment = parseFloat(params.payment);\n\n    sumEl.value = Number.isFinite(sum) ? sum : 0.0;\n    interestEl.value = Number.isFinite(interest) ? interest : 0.0;\n    monthsEl.value = Number.isFinite(months) ? months : 0.0;\n    paymentEl.value = Number.isFinite(payment) ? payment : 0;\n\n    // sum.value = 2295722.39;\n    // interest.value = 2.79;\n    // months.value = 12;\n    // payment.value = 10021;\n};\n\n\ndocument.querySelector('#submit').addEventListener('click', function() {\n    get();\n});\n\n\ninitialize();\nget();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });