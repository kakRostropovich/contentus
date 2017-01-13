var contentus =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.create = create;

	var _Plugin = __webpack_require__(1);

	var _Plugin2 = _interopRequireDefault(_Plugin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Export the main method for plugin starting
	 *
	 * @param {object} options
	 * @param {string} options.container
	 * @param {string} options.fastClass
	 * @param {array} options.contents
	 */
	function create(options) {
	  return new _Plugin2.default(options);
	} /**
	   * Contentus
	   *
	   * @author Rostislav Nazmeev <r.m.nazmeev@gmail.com>
	   * @description Simple JS-plugin (without dependencies) to help fast testing
	   * elements during the development of web interfaces.
	   *
	   */

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Element = __webpack_require__(2);

	var _Element2 = _interopRequireDefault(_Element);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Plugin = function () {

	  /**
	   * Create plugin with params
	   *
	   * @constructor
	   * @param {object} options
	   * @param {string} options.container
	   * @param {string} options.fastClass
	   * @param {array} options.contents
	   */
	  function Plugin(options) {
	    _classCallCheck(this, Plugin);

	    this.container = document.querySelector('' + options.container);
	    this.fastSelector = options.fastClass ? '.' + options.targetSelector : '.fp';
	    this.contents = options.contents && options.contents.push !== undefined ? options.contents : null;
	    this.elements = [];

	    this.addHandlers();

	    var defaultElement = document.querySelector(this.fastSelector);

	    if (defaultElement) {
	      this.createElement(this.fastSelector);
	    }
	  }

	  /**
	   * @param {string} selector
	   */


	  _createClass(Plugin, [{
	    key: 'createElement',
	    value: function createElement(selector) {
	      var element = new _Element2.default(selector, this.contents);

	      this.elements.push(element);
	      element.elementId = this.elements.indexOf(element);

	      this.assignCurrentElement(element);
	    }

	    /**
	     * @param {object} elem - element, created by createElement()
	     */

	  }, {
	    key: 'assignCurrentElement',
	    value: function assignCurrentElement(elem) {

	      this.elements.forEach(function (item) {
	        item.removeCurrentStatus();
	      });

	      this.currentElement = elem;
	      elem.assignCurrentStatus();
	    }

	    // Add handlers

	  }, {
	    key: 'addHandlers',
	    value: function addHandlers() {
	      var _this = this;

	      document.body.addEventListener('mousemove', function (event) {

	        if (event.altKey) {
	          [].map.call(document.querySelectorAll('.fp-hover'), function (item) {
	            item.classList.remove('fp-hover');
	          });
	          event.target.classList.add('fp-hover');

	          event.stopPropagation();
	        } else {
	          [].map.call(document.querySelectorAll('.fp-hover'), function (item) {
	            item.classList.remove('fp-hover');
	          });
	        }
	      });

	      document.body.addEventListener('click', function (event) {

	        if (event.altKey) {
	          var _ret = function () {

	            var prefix = 'fp-uniq';
	            var uniqClass = prefix + Math.random().toString().slice(2);
	            var classWithPrefix = '';
	            var target = event.target;

	            if (~target.className.indexOf(prefix)) {

	              [].map.call(target.classList, function (item) {
	                if (item.includes(prefix)) classWithPrefix = item;
	              });

	              var filteredElements = _this.elements.filter(function (item) {
	                return item.DOMElement.className.includes(classWithPrefix);
	              });

	              _this.assignCurrentElement(filteredElements[0]);

	              return {
	                v: false
	              };
	            }

	            target.classList.add(uniqClass);

	            _this.createElement('.' + uniqClass);

	            return {
	              v: false
	            };
	          }();

	          if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	        }

	        return true;
	      });

	      document.body.addEventListener('keyup', function (event) {

	        event.preventDefault();
	        var code = event.keyCode;

	        switch (code) {

	          // pressed Left
	          case 37:
	            _this.currentElement.applyPrevContent();
	            break;

	          // pressed Right
	          case 39:
	            _this.currentElement.applyNextContent();
	            break;

	          // pressed Esc
	          case 27:
	            _this.currentElement.applyDefaultContent();
	            break;

	          default:

	            // pressed 1..4
	            if (~[49, 50, 51, 52].indexOf(code)) {
	              _this.currentElement.applyContentByIndex(code + 1 - 50);
	              break;
	            }

	            return;
	        }
	      });
	    }
	  }]);

	  return Plugin;
	}();

	exports.default = Plugin;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	__webpack_require__(3);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Element = function () {

	  /**
	   * Create element based DOM-element for testing
	   *
	   * @param {string} selector
	   * @param {array} contents - or null if contents were not transferred
	   */
	  function Element(selector, contents) {
	    _classCallCheck(this, Element);

	    if (contents !== null) {

	      this.contents = contents.map(function (item) {
	        return item;
	      });
	    } else {

	      this.contents = ['This is a small text in one line', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam animi beatae, corporis delectus deleniti eos eum explicabo in inventore iure minima nesciunt odit placeat porro provident quae rerum! Animi aspernatur at aut explicabo fugit itaque molestias provident quis voluptatibus. Adipisci aliquam fugiat molestias perferendis porro provident suscipit voluptas voluptatem!', '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam animi beatae, corporis delectus deleniti eos eum explicabo in inventore iure minima nesciunt odit placeat porro provident quae rerum! Animi aspernatur at aut explicabo fugit itaque molestias provident quis voluptatibus. Adipisci aliquam fugiat molestias perferendis porro provident suscipit voluptas voluptatem!</p>\n         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam animi beatae, corporis delectus deleniti eos eum explicabo in inventore iure minima nesciunt odit placeat porro provident quae rerum! Animi aspernatur at aut explicabo fugit itaque molestias provident quis voluptatibus. Adipisci aliquam fugiat molestias perferendis porro provident suscipit voluptas voluptatem!</p>\n         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam animi beatae, corporis delectus deleniti eos eum explicabo in inventore iure minima nesciunt odit placeat porro provident quae rerum! Animi aspernatur at aut explicabo fugit itaque molestias provident quis voluptatibus. Adipisci aliquam fugiat molestias perferendis porro provident suscipit voluptas voluptatem!</p>'];
	    }

	    this.DOMElement = document.querySelector('' + selector);
	    this.initialContent = this.DOMElement.innerHTML;
	    this.currentIndex = 0;
	    this.debugClass = 'fp-current';

	    this.contents.unshift(this.initialContent);
	  }

	  /**
	   * @param {object} elem - DOM element
	   * @param {string} content
	   */


	  _createClass(Element, [{
	    key: 'changeContent',
	    value: function changeContent(elem, content) {
	      elem.innerHTML = '' + content;
	    }

	    /**
	     * @param {object} elem - DOM element
	     * @param {string} initialContent - preserve the original value of the element
	     */

	  }, {
	    key: 'resetContent',
	    value: function resetContent(elem, initialContent) {
	      elem.innerHTML = '' + initialContent;
	    }
	  }, {
	    key: 'applyPrevContent',
	    value: function applyPrevContent() {
	      this.currentIndex = this.currentIndex === 0 ? this.contents.length - 1 : this.currentIndex - 1;

	      this.changeContent(this.DOMElement, this.contents[this.currentIndex]);
	    }
	  }, {
	    key: 'applyNextContent',
	    value: function applyNextContent() {
	      this.currentIndex = this.currentIndex === this.contents.length - 1 ? 0 : this.currentIndex + 1;

	      this.changeContent(this.DOMElement, this.contents[this.currentIndex]);
	    }

	    /**
	     * @param {number} index - starts with 0
	     */

	  }, {
	    key: 'applyContentByIndex',
	    value: function applyContentByIndex(index) {
	      this.currentIndex = index;
	      this.changeContent(this.DOMElement, this.contents[this.currentIndex]);
	    }

	    /**
	     * @param {number} index - starts with 0
	     */

	  }, {
	    key: 'applyDefaultContent',
	    value: function applyDefaultContent(index) {
	      this.currentIndex = 0;
	      this.changeContent(this.DOMElement, this.contents[this.currentIndex]);
	    }
	  }, {
	    key: 'assignCurrentStatus',
	    value: function assignCurrentStatus() {
	      this.DOMElement.classList.add(this.debugClass);
	    }
	  }, {
	    key: 'removeCurrentStatus',
	    value: function removeCurrentStatus() {
	      this.DOMElement.classList.remove(this.debugClass);
	    }
	  }]);

	  return Element;
	}();

	exports.default = Element;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(4);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./element.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./element.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "html * {\n  outline: 0 solid magenta !important;\n}\n\nhtml .fp-hover {\n  outline: 2px solid #FC8DFF !important;\n  cursor: pointer;\n}\n\nhtml .fp-current, html .fp-hover.fp-current {\n  outline: 3px solid magenta !important;\n  cursor: pointer;\n  -webkit-transition: outline .1s;\n  -moz-transition: outline .1s;\n  -ms-transition: outline .1s;\n  -o-transition: outline .1s;\n  transition: outline .1s;\n}", ""]);

	// exports


/***/ },
/* 5 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);