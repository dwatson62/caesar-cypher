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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _caesar = __webpack_require__(1);

var caesar = _interopRequireWildcard(_caesar);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var select = document.getElementById('key');

for (var i = 1; i < 26; i++) {
  var opt = document.createElement('option');
  opt.value = i;
  opt.innerHTML = i;
  select.appendChild(opt);
}

document.getElementById('cypherButton').addEventListener('click', function () {
  var word = document.getElementById('word').value;
  var key = document.getElementById('key').value;
  var cypheredWord = caesar.cypher(word, key);
  document.getElementById('word').value = cypheredWord;
});

document.getElementById('decypherButton').addEventListener('click', function () {
  var word = document.getElementById('word').value;
  var key = document.getElementById('key').value;
  var cypheredWord = caesar.decypher(word, key);
  document.getElementById('word').value = cypheredWord;
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var cypher = exports.cypher = function cypher(word, key) {
  return splitWord(word).map(function (letter) {
    return nextLetter(letter, key);
  }).join('');
};

var decypher = exports.decypher = function decypher(word, key) {
  return splitWord(word).map(function (letter) {
    return previousLetter(letter, key);
  }).join('');
};

var splitWord = exports.splitWord = function splitWord(word) {
  return word.split('');
};

var nextLetter = exports.nextLetter = function nextLetter(letter, key) {
  for (var i = 0; i < key; i++) {
    if (letter === 'z') {
      letter = 'a';
    } else if (letter === 'Z') {
      letter = 'A';
    } else {
      letter = String.fromCharCode(letter.charCodeAt(0) + 1);
    }
  }
  return letter;
};

var previousLetter = exports.previousLetter = function previousLetter(letter, key) {
  for (var i = 0; i < key; i++) {
    if (letter === 'a') {
      letter = 'z';
    } else if (letter === 'A') {
      letter = 'Z';
    } else {
      letter = String.fromCharCode(letter.charCodeAt(0) - 1);
    }
  }
  return letter;
};

/***/ })
/******/ ]);
//# sourceMappingURL=main.bundle.js.map