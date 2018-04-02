/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function require(moduleId) {
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, require);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	// Load entry module and return exports
/******/ 	return require(require.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/***/ function(module, exports,require) {

eval(`let name = require('./src/a/a1.js');
require('./src/index.less');
alert(name);`);

/***/ },

/***/ "./src/a/a1.js":
/***/ function(module, exports,require) {

eval(`let a2 = require('./src/a/a2.js');
module.exports = a2;`);

/***/ },

/***/ "./src/a/a2.js":
/***/ function(module, exports,require) {

eval(`module.exports = 'a2';`);

/***/ },

/***/ "./src/index.less":
/***/ function(module, exports,require) {

eval(`let style = document.createElement('style');
style.innerHTML = 'body {\\n  color: red;\\n}\\n';
document.head.appendChild(style);`);

/***/ },

/******/ });