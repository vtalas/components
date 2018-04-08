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

eval("const calc = Object.create({\n\n    init(rate, monthlyPayment) {\n        this.rate = parseFloat(rate);\n        this.monthlyPayment = parseFloat(monthlyPayment);\n        return this;\n    },\n\n    getRate(sum) {\n\n        return sum * this.rate / 100;\n    },\n\n    daysInMonth(month, year) {\n        return new Date(year, month, 0).getDate();\n    },\n\n    round(number, precision) {\n        const x = Math.pow(10, precision);\n        return Math.round(number * x) / x;\n    },\n\n    aaa: function(sum, months) {\n\n        const res = {\n            sum: {\n                begin: Number.parseInt(sum, 10),\n                end: null,\n                interestYearly: null\n            },\n            meta: {\n                interest: this.rate,\n                months: months,\n                payment: this.monthlyPayment,\n            },\n            payments: []\n        };\n\n        let interestYearly = 0;\n        for (var i = 1, n = months; i <= n; i++) {\n\n            let dailyRate = this.getRate(sum) / 360;\n            let interestPayment = dailyRate * this.daysInMonth(i % 12, 2017);\n\n            let payment = this.monthlyPayment - interestPayment;\n\n            sum -= payment;\n            interestYearly += interestPayment;\n            res.payments.push({\n                rate: this.round(interestPayment, 2),\n                payment: this.round(payment, 2)\n            })\n        }\n\n        res.sum.end = this.round(sum, 2);\n        res.sum.interestYearly = this.round(interestYearly, 2);\n        return res;\n    }\n\n});\n\nmodule.exports = calc;\n\n\n\n//# sourceURL=webpack:///./src/calc.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const calc = __webpack_require__(/*! ./calc */ \"./src/calc.js\");\n\nconst sum = document.querySelector('#sum');\nconst interest = document.querySelector('#interest');\nconst months = document.querySelector('#months');\nconst payment = document.querySelector('#payment');\n\nsum.value = 2295722.39;\ninterest.value = 2.79;\nmonths.value = 12;\npayment.value = 10021;\n\nconst Render = Object.create({\n    init(result) {\n        this.el = document.querySelector('#result');\n        this.el.textContent = '';\n        this.result = result;\n        return this;\n    },\n\n    add(tag, label, value) {\n        const x = document.createElement(tag);\n        x.textContent = `${label} \\t ${value || ''}`;\n        this.el.appendChild(x);\n    },\n\n    render() {\n\n        const r = this.result;\n        this.add('span', 'castka');\n        this.add('h3',  (r.sum.begin).toLocaleString());\n\n        this.add('h3', 'urok', (r.meta.interest).toLocaleString() + '%');\n        this.add('h3', 'pocet mesicu', (r.meta.months).toLocaleString());\n        this.add('h3', 'splatka', (r.meta.payment).toLocaleString());\n        this.add('h3', '---------------------------------------------------------');\n    }\n});\n\nconst get = function() {\n\n\n    const x = calc.init(interest.value, payment.value);\n    const result = x.aaa(sum.value, months.value);\n\n    const render = Render.init(result);\n\n    render.render();\n};\ndocument.querySelector('#submit').addEventListener('click', function() {\n    get();\n});\n\nget();\n\nconsole.log(calc);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });