/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/remove.js":
/*!***********************!*\
  !*** ./src/remove.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const clearTask = (index, list) => {
  if (list.length === 0) return;
  const fil = list[index];
  list.filter((item) => item === fil);

  document.querySelector(`#task-${index}`).parentNode.parentNode.remove();
  localStorage.setItem('tasks', JSON.stringify(list));
  if (list.length === 0) return;

  for (let i = index - 1; i < list.length; i += 1) {
    /*
    let ind = i + 2;
   let nextCheck = document.querySelector(`#task-${ind}`)
    nextCheck.attributes.id = `task-${i + 1}`;
    nextCheck.value -= 1;
    list[i].index -= 1;
    localStorage.setItem('tasks', JSON.stringify(list));
    */
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearTask);

/***/ }),

/***/ "./src/move.png":
/*!**********************!*\
  !*** ./src/move.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0cdea37dae77c92671b5.png";

/***/ }),

/***/ "./src/trash.png":
/*!***********************!*\
  !*** ./src/trash.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "667a1805229ae33e7d3d.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/addTaskUI.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _move_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./move.png */ "./src/move.png");
/* harmony import */ var _trash_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trash.png */ "./src/trash.png");
/* harmony import */ var _remove_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./remove.js */ "./src/remove.js");




const toDoListUI = document.querySelector('.to-do-list');
const endCont = document.querySelector('.clear');

const appendTask = (item, list) => {
  const taskUI = document.createElement('li');
  taskUI.innerHTML = `<div><input type='checkbox' id = task-${item.index} class = 'check' value=${item.index}><p size='12'>${item.description}</p></div>`;
  const moveImg = new Image();
  moveImg.src = _move_png__WEBPACK_IMPORTED_MODULE_0__;
  taskUI.appendChild(moveImg);
  moveImg.addEventListener('click', () => {
    if (moveImg.src === _move_png__WEBPACK_IMPORTED_MODULE_0__) {
      moveImg.src = _trash_png__WEBPACK_IMPORTED_MODULE_1__;
      moveImg.parentNode.style.background = 'rgba(214, 214, 148, 0.534)';
      taskUI.children[0].children[1].setAttribute('contenteditable', 'true');
      endCont.textContent = 'Click here to save changes';
      endCont.classList.add('makeChanges');
      endCont.style.fontSize = '24px';
      endCont.addEventListener('click', (e) => {
        if (moveImg.src === _trash_png__WEBPACK_IMPORTED_MODULE_1__) {
          e.target.textContent = 'Clear all completed';
          e.target.classList.remove('makeChanges');
          e.target.style.fontSize = '20px';
          taskUI.children[0].children[1].setAttribute('contenteditable', 'false');
          moveImg.src = _move_png__WEBPACK_IMPORTED_MODULE_0__;
          moveImg.parentNode.style.background = 'inherit';
          list.forEach((element) => {
            if (element.index === item.index) {
              element.description = taskUI.children[0].children[1].textContent;
              localStorage.setItem('tasks', JSON.stringify(list));
            }
          });
        }
      });
    } else {
      (0,_remove_js__WEBPACK_IMPORTED_MODULE_2__["default"])(item.index, list);
    }
  });
  toDoListUI.appendChild(taskUI);
  const check = taskUI.children[0].children[0];

  if (item.completed === true) {
    check.checked = true;
    taskUI.children[0].style.textDecoration = 'line-through';
  }

  check.style.cursor = 'pointer';
  moveImg.style.cursor = 'pointer';
  check.addEventListener('click', () => {
    if (check.checked === true) {
      taskUI.children[0].style.textDecoration = 'line-through';
      item.completed = true;
      localStorage.setItem('tasks', JSON.stringify(list));
    } else {
      taskUI.children[0].style.textDecoration = 'none';
      item.completed = false;
      localStorage.setItem('tasks', JSON.stringify(list));
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appendTask);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkVGFza1VJLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsTUFBTTtBQUN4QztBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsaUJBQWlCO0FBQzNDO0FBQ0E7QUFDQSxtREFBbUQsSUFBSTtBQUN2RCxzQ0FBc0MsTUFBTTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckJ4QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmaUM7QUFDRTtBQUNDO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCxZQUFZLHdCQUF3QixXQUFXLGdCQUFnQixpQkFBaUI7QUFDOUk7QUFDQSxnQkFBZ0Isc0NBQU87QUFDdkI7QUFDQTtBQUNBLHdCQUF3QixzQ0FBTztBQUMvQixvQkFBb0IsdUNBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHVDQUFRO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHNDQUFPO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ04sTUFBTSxzREFBUztBQUNmO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsaUVBQWUsVUFBVSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3JlbW92ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2FkZFRhc2tVSS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjbGVhclRhc2sgPSAoaW5kZXgsIGxpc3QpID0+IHtcclxuICBpZiAobGlzdC5sZW5ndGggPT09IDApIHJldHVybjtcclxuICBjb25zdCBmaWwgPSBsaXN0W2luZGV4XTtcclxuICBsaXN0LmZpbHRlcigoaXRlbSkgPT4gaXRlbSA9PT0gZmlsKTtcclxuXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Rhc2stJHtpbmRleH1gKS5wYXJlbnROb2RlLnBhcmVudE5vZGUucmVtb3ZlKCk7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkobGlzdCkpO1xyXG4gIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xyXG5cclxuICBmb3IgKGxldCBpID0gaW5kZXggLSAxOyBpIDwgbGlzdC5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgLypcclxuICAgIGxldCBpbmQgPSBpICsgMjtcclxuICAgbGV0IG5leHRDaGVjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0YXNrLSR7aW5kfWApXHJcbiAgICBuZXh0Q2hlY2suYXR0cmlidXRlcy5pZCA9IGB0YXNrLSR7aSArIDF9YDtcclxuICAgIG5leHRDaGVjay52YWx1ZSAtPSAxO1xyXG4gICAgbGlzdFtpXS5pbmRleCAtPSAxO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkobGlzdCkpO1xyXG4gICAgKi9cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGVhclRhc2s7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IG1vdmVTcmMgZnJvbSAnLi9tb3ZlLnBuZyc7XHJcbmltcG9ydCB0cmFzaFNyYyBmcm9tICcuL3RyYXNoLnBuZyc7XHJcbmltcG9ydCBjbGVhclRhc2sgZnJvbSAnLi9yZW1vdmUuanMnO1xyXG5cclxuY29uc3QgdG9Eb0xpc3RVSSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50by1kby1saXN0Jyk7XHJcbmNvbnN0IGVuZENvbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xlYXInKTtcclxuXHJcbmNvbnN0IGFwcGVuZFRhc2sgPSAoaXRlbSwgbGlzdCkgPT4ge1xyXG4gIGNvbnN0IHRhc2tVSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgdGFza1VJLmlubmVySFRNTCA9IGA8ZGl2PjxpbnB1dCB0eXBlPSdjaGVja2JveCcgaWQgPSB0YXNrLSR7aXRlbS5pbmRleH0gY2xhc3MgPSAnY2hlY2snIHZhbHVlPSR7aXRlbS5pbmRleH0+PHAgc2l6ZT0nMTInPiR7aXRlbS5kZXNjcmlwdGlvbn08L3A+PC9kaXY+YDtcclxuICBjb25zdCBtb3ZlSW1nID0gbmV3IEltYWdlKCk7XHJcbiAgbW92ZUltZy5zcmMgPSBtb3ZlU3JjO1xyXG4gIHRhc2tVSS5hcHBlbmRDaGlsZChtb3ZlSW1nKTtcclxuICBtb3ZlSW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgaWYgKG1vdmVJbWcuc3JjID09PSBtb3ZlU3JjKSB7XHJcbiAgICAgIG1vdmVJbWcuc3JjID0gdHJhc2hTcmM7XHJcbiAgICAgIG1vdmVJbWcucGFyZW50Tm9kZS5zdHlsZS5iYWNrZ3JvdW5kID0gJ3JnYmEoMjE0LCAyMTQsIDE0OCwgMC41MzQpJztcclxuICAgICAgdGFza1VJLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdLnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgJ3RydWUnKTtcclxuICAgICAgZW5kQ29udC50ZXh0Q29udGVudCA9ICdDbGljayBoZXJlIHRvIHNhdmUgY2hhbmdlcyc7XHJcbiAgICAgIGVuZENvbnQuY2xhc3NMaXN0LmFkZCgnbWFrZUNoYW5nZXMnKTtcclxuICAgICAgZW5kQ29udC5zdHlsZS5mb250U2l6ZSA9ICcyNHB4JztcclxuICAgICAgZW5kQ29udC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgaWYgKG1vdmVJbWcuc3JjID09PSB0cmFzaFNyYykge1xyXG4gICAgICAgICAgZS50YXJnZXQudGV4dENvbnRlbnQgPSAnQ2xlYXIgYWxsIGNvbXBsZXRlZCc7XHJcbiAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdtYWtlQ2hhbmdlcycpO1xyXG4gICAgICAgICAgZS50YXJnZXQuc3R5bGUuZm9udFNpemUgPSAnMjBweCc7XHJcbiAgICAgICAgICB0YXNrVUkuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0uc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCAnZmFsc2UnKTtcclxuICAgICAgICAgIG1vdmVJbWcuc3JjID0gbW92ZVNyYztcclxuICAgICAgICAgIG1vdmVJbWcucGFyZW50Tm9kZS5zdHlsZS5iYWNrZ3JvdW5kID0gJ2luaGVyaXQnO1xyXG4gICAgICAgICAgbGlzdC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50LmluZGV4ID09PSBpdGVtLmluZGV4KSB7XHJcbiAgICAgICAgICAgICAgZWxlbWVudC5kZXNjcmlwdGlvbiA9IHRhc2tVSS5jaGlsZHJlblswXS5jaGlsZHJlblsxXS50ZXh0Q29udGVudDtcclxuICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeShsaXN0KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjbGVhclRhc2soaXRlbS5pbmRleCwgbGlzdCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgdG9Eb0xpc3RVSS5hcHBlbmRDaGlsZCh0YXNrVUkpO1xyXG4gIGNvbnN0IGNoZWNrID0gdGFza1VJLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdO1xyXG5cclxuICBpZiAoaXRlbS5jb21wbGV0ZWQgPT09IHRydWUpIHtcclxuICAgIGNoZWNrLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgdGFza1VJLmNoaWxkcmVuWzBdLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ2xpbmUtdGhyb3VnaCc7XHJcbiAgfVxyXG5cclxuICBjaGVjay5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XHJcbiAgbW92ZUltZy5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XHJcbiAgY2hlY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBpZiAoY2hlY2suY2hlY2tlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICB0YXNrVUkuY2hpbGRyZW5bMF0uc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJztcclxuICAgICAgaXRlbS5jb21wbGV0ZWQgPSB0cnVlO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeShsaXN0KSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0YXNrVUkuY2hpbGRyZW5bMF0uc3R5bGUudGV4dERlY29yYXRpb24gPSAnbm9uZSc7XHJcbiAgICAgIGl0ZW0uY29tcGxldGVkID0gZmFsc2U7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KGxpc3QpKTtcclxuICAgIH1cclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFwcGVuZFRhc2s7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9