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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modals */ "./src/js/modules/modals.js");
/* harmony import */ var _modules_sliders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/sliders */ "./src/js/modules/sliders.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");
/* harmony import */ var _modules_mask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/mask */ "./src/js/modules/mask.js");
/* harmony import */ var _modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/checkTextInputs */ "./src/js/modules/checkTextInputs.js");
/* harmony import */ var _modules_showMoreStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/showMoreStyles */ "./src/js/modules/showMoreStyles.js");
/* harmony import */ var _modules_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/filter */ "./src/js/modules/filter.js");
/* harmony import */ var _modules_pictureSize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/pictureSize */ "./src/js/modules/pictureSize.js");
/* harmony import */ var _modules_accordion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/accordion */ "./src/js/modules/accordion.js");
/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/burger */ "./src/js/modules/burger.js");
/* harmony import */ var _modules_scrolling__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/scrolling */ "./src/js/modules/scrolling.js");
/* harmony import */ var _modules_drop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/drop */ "./src/js/modules/drop.js");












window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  Object(_modules_modals__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_modules_sliders__WEBPACK_IMPORTED_MODULE_1__["default"])('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
  Object(_modules_sliders__WEBPACK_IMPORTED_MODULE_1__["default"])('.main-slider-item', 'vertical');
  Object(_modules_forms__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_modules_mask__WEBPACK_IMPORTED_MODULE_3__["default"])('[name="phone"]');
  Object(_modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_4__["default"])('[name="name"]');
  Object(_modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_4__["default"])('[name="message"]');
  Object(_modules_showMoreStyles__WEBPACK_IMPORTED_MODULE_5__["default"])('.button-styles', '#styles .row');
  Object(_modules_filter__WEBPACK_IMPORTED_MODULE_6__["default"])();
  Object(_modules_pictureSize__WEBPACK_IMPORTED_MODULE_7__["default"])('.sizes-block');
  Object(_modules_accordion__WEBPACK_IMPORTED_MODULE_8__["default"])('.accordion-heading');
  Object(_modules_burger__WEBPACK_IMPORTED_MODULE_9__["default"])('.burger-menu', '.burger');
  Object(_modules_scrolling__WEBPACK_IMPORTED_MODULE_10__["default"])('.pageup');
  Object(_modules_drop__WEBPACK_IMPORTED_MODULE_11__["default"])();
});

/***/ }),

/***/ "./src/js/modules/accordion.js":
/*!*************************************!*\
  !*** ./src/js/modules/accordion.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const accordion = triggersSelector => {
  const btns = document.querySelectorAll(triggersSelector);
  btns.forEach(btn => {
    btn.addEventListener('click', function () {
      this.classList.toggle('active-style');
      this.nextElementSibling.classList.toggle('active-content');
      if (this.classList.contains('active-style')) {
        this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + "px";
      } else {
        this.nextElementSibling.style.maxHeight = '0px';
      }
    });
  });
};
/* harmony default export */ __webpack_exports__["default"] = (accordion);

/***/ }),

/***/ "./src/js/modules/burger.js":
/*!**********************************!*\
  !*** ./src/js/modules/burger.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const burger = (menuSelector, burgerSelector) => {
  const menuElem = document.querySelector(menuSelector),
    bergerElem = document.querySelector(burgerSelector);
  menuElem.style.display = 'none';
  bergerElem.addEventListener('click', () => {
    if (menuElem.style.display == "none" && window.screen.availWidth < 993) {
      menuElem.style.display = 'block';
    } else {
      menuElem.style.display = 'none';
    }
  });
  window.addEventListener('resize', () => {
    if (window.screen.availWidth > 992) {
      menuElem.style.display = 'none';
    }
  });
};
/* harmony default export */ __webpack_exports__["default"] = (burger);

/***/ }),

/***/ "./src/js/modules/checkTextInputs.js":
/*!*******************************************!*\
  !*** ./src/js/modules/checkTextInputs.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const checkTextInputs = selector => {
  const txtInputs = document.querySelectorAll(selector);
  txtInputs.forEach(input => {
    input.addEventListener('keypress', function (e) {
      if (e.key.match(/[^а-яіїє 0-9]/ig)) {
        e.preventDefault();
      }
    });
  });
};
/* harmony default export */ __webpack_exports__["default"] = (checkTextInputs);

/***/ }),

/***/ "./src/js/modules/drop.js":
/*!********************************!*\
  !*** ./src/js/modules/drop.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const drop = () => {
  const fileInputs = document.querySelectorAll('[name="upload"]');
  ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
    fileInputs.forEach(input => {
      input.addEventListener(eventName, preventDefaults, false);
    });
  });
  function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation(); // зупиняєм спливання
    // добавляєм індикатор який дозволить користувачу розуміти що він може перетягнути зображення над потрібною областю
    // створюємо 2 ф-ції 
  }

  function highlight(item) {
    item.closest('.file_upload').style.border = "5px solid yellow";
    item.closest('.file_upload').style.backgroundColor = "rgba(0,0,0, .7)";
  }
  // робимо зворотню функцію, коли в буде виконуватись певна подія будемо забирати цю мітку (що в першій ф-ції)
  function unhighlight(item) {
    item.closest('.file_upload').style.border = "none";
    if (item.closest('.calc_form')) {
      item.closest('.file_upload').style.backgroundColor = "#fff";
    } else {
      item.closest('.file_upload').style.backgroundColor = "#ededed";
    }
  }
  ['dragenter', 'dragover'].forEach(eventName => {
    fileInputs.forEach(input => {
      input.addEventListener(eventName, () => highlight(input), false);
    });
  });
  ['dragleave', 'drop'].forEach(eventName => {
    fileInputs.forEach(input => {
      input.addEventListener(eventName, () => unhighlight(input), false);
      ;
    });
  });
  fileInputs.forEach(input => {
    input.addEventListener('drop', e => {
      input.files = e.dataTransfer.files;
      let dots;
      const filesName = input.files[0].name.split('.');
      filesName[0].length > 5 ? dots = '...' : dots = '.';
      const name = filesName[0].substring(0, 6) + dots + filesName[1];
      input.previousElementSibling.textContent = name;
    });
  });
};
/* harmony default export */ __webpack_exports__["default"] = (drop);

/***/ }),

/***/ "./src/js/modules/filter.js":
/*!**********************************!*\
  !*** ./src/js/modules/filter.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const filter = () => {
  const menu = document.querySelector('.portfolio-menu'),
    items = menu.querySelectorAll('li'),
    wrapper = document.querySelector('.portfolio-wrapper'),
    markAll = wrapper.querySelectorAll('.all'),
    no = document.querySelector('.portfolio-no');

  // створюємо функцію яка буде відповідати за фільтрацію цих елементів 
  // markType - в цей аргумент будемо передавати колекцію певних елементів
  const typeFilter = markType => {
    // беремо всі елементи які розташовані в wrapper і приховуємо їх
    markAll.forEach(mark => {
      mark.style.display = 'none';
      mark.classList.remove('animated', 'fadeIn');
    });
    no.style.display = 'none';
    no.classList.remove('animated', 'fadeIn');

    // якщо в аргумент markType хоть щось було передано
    if (markType) {
      markType.forEach(mark => {
        mark.style.display = 'block';
        mark.classList.add('animated', 'fadeIn');
      });
    } else {
      no.style.display = 'block';
      no.classList.add('animated', 'fadeIn');
    }
  };
  function clickBtn(btn, elem) {
    const btnSelect = menu.querySelector(btn);
    const elemSelect = wrapper.querySelectorAll(elem);
    btnSelect.addEventListener('click', () => {
      typeFilter(elemSelect);
    });
  }
  function clickBtnGrand(btn, elem) {
    const btnSelect = menu.querySelector(btn);
    const elemSelect = wrapper.querySelector(elem);
    btnSelect.addEventListener('click', () => {
      typeFilter(elemSelect);
    });
  }
  clickBtn('.all', '.all');
  clickBtn('.lovers', '.lovers');
  clickBtn('.chef', '.chef');
  clickBtn('.girl', '.girl');
  clickBtn('.guy', '.guy');
  clickBtnGrand('.grandmother');
  clickBtnGrand('.granddad');
  menu.addEventListener('click', e => {
    let target = e.target;
    // перевіряєм чи цей таргет існує
    if (target && target.tagName == "LI") {
      items.forEach(btn => btn.classList.remove('active'));
      target.classList.add('active');
    }
  });
};
/* harmony default export */ __webpack_exports__["default"] = (filter);

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/requests */ "./src/js/services/requests.js");

const forms = () => {
  // зробити дві змінні
  // 1 - це всі форми які є на сторінці 
  // 2 - всі input які є в цих формах
  // потрібно буде навішати один і той самий обробиник події на всі одинакові форми
  const form = document.querySelectorAll('form'),
    inputs = document.querySelectorAll('input'),
    upload = document.querySelectorAll('[name="upload"]');
  const message = {
    loading: 'Завантаження...',
    success: 'Дякую! Скоро ми з вами звяжемся',
    failure: 'Щось пішло не так...',
    spiner: 'assets/img/spinner.gif',
    ok: 'assets/img/ok.png',
    fail: 'assets/img/fail.png'
  };

  // створ змінна в якій будуть знаходитися шляхи по яким будуть розміщуватися наші дані
  const path = {
    designer: 'assets/server.php',
    question: 'assets/question.php'
  };

  // очищення інпутів
  const clearInputs = () => {
    inputs.forEach(i => {
      i.value = '';
    });
    // очищаєм назву зображення з форми після її відправки
    upload.forEach(i => {
      i.previousElementSibling.textContent = "Файл не вибраний";
    });
  };

  // перебираєм всі інпути з назвою upload
  upload.forEach(i => {
    i.addEventListener('input', () => {
      console.log(i.files[0]);
      // якщо зображення яке загружає користувач більше 6 симфолів воно буде скорочуватись і ставитись ...
      let dots;
      const filesName = i.files[0].name.split('.');
      filesName[0].length > 5 ? dots = '...' : dots = '.';
      const name = filesName[0].substring(0, 6) + dots + filesName[1];
      i.previousElementSibling.textContent = name;
    });
  });
  form.forEach(i => {
    i.addEventListener('submit', e => {
      e.preventDefault();

      // створюємо змінну яка буде поміщати на сторінку статуси завантаження
      let statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      statusMessage.style.textAlign = 'center';
      // поміщаєм цей блок на сторінку
      i.parentNode.appendChild(statusMessage); // поміщаєм цей блок в кінець нашої форми

      // робимо форму прозорую
      i.classList.add('animated', 'fadeOutUp');
      // після того як форма стала прозорою вона пропаде зі сторінки
      setTimeout(() => {
        i.style.display = 'none';
      }, 400);

      // відображення статусу на сторінці
      let statusImg = document.createElement('img');
      statusImg.setAttribute('src', message.spiner);
      statusImg.classList.add('animated', 'fadeInUp');
      // поміщаємо блок на сторінку
      statusMessage.appendChild(statusImg);

      // добавляєм текстове повідомлення статусу завантаження
      let textMessage = document.createElement('div');
      textMessage.textContent = message.loading;
      statusMessage.appendChild(textMessage);
      const formData = new FormData(i); // цей обєкт найде всі інпути збере всі ці дані в спеціальну структуру,
      // яку ми помістимо в змінну formData

      // створюєм змінну для того щоб сформувати динамічний шлях куда ми будемо все це відправляти
      let api;
      // створюжсо умова що якщо форма буде вміщати цей клас тоді ми будемо відправляти дані на сервер
      i.closest('.popup-design') || i.classList.contains('calc_form') ? api = path.designer : api = path.question;
      console.log(api);

      // коли formData буду повністю сформована ми її відправляємо
      // відправляємо тіло запиту на сервер
      Object(_services_requests__WEBPACK_IMPORTED_MODULE_0__["postData"])(api, formData).then(res => {
        console.log(res);
        statusImg.setAttribute('src', message.ok);
        textMessage.textContent = message.success;
      }).catch(() => {
        statusImg.setAttribute('src', message.fail);
        textMessage.textContent = message.failure;
      }).finally(() => {
        clearInputs();
        setTimeout(() => {
          statusMessage.remove();
          i.style.display = 'block';
          i.classList.remove('fadeOutUp');
          i.classList.add('fadeInUp');
        }, 5000);
      });
    });
  });
};
/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./src/js/modules/mask.js":
/*!********************************!*\
  !*** ./src/js/modules/mask.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const mask = selector => {
  let setCursorPosition = (pos, elem) => {
    elem.focus();
    if (elem.setSelectionRange) {
      elem.setSelectionRange(pos, pos);
    } else if (elem.createTextRange) {
      let range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  };
  function createMask(e) {
    // створюємо матрицю на яку будемо орієнтуватись при створенні маски

    let matrix = '+38 (0__) ___ __ __',
      i = 0,
      // статичне значення працює на основі матриці
      def = matrix.replace(/\D/g, ''),
      // получаєм всі не цифри які є
      val = this.value.replace(/\D/g, ''); // динамічне значення працює на основі того що ввів користувач

    // прописуєм умову що якщо к-сть цифр яка залишиться в матриці після дії по видаленню всіх не цифр всередині(def)
    // якщо воно буде більше або рівне к-сті цифр які будуть в value, тоді це значення потрібно буде замінити на стандартне 
    // коли користувач щось вводить в матрицю і починає видаляти +380 то ми йому цього зробити не дамо,
    // тому що при видаленні 380 val.length буде менше ніж def.length
    if (def.length >= val.length) {
      val = def;
    }

    //перебираємо всі симфоли що знаходяться в матриці і при заповненні матриці цифрами ми будемо видаляти __ і підставляти замість них цифри
    // /./ - кожний елемент який існує в рядку
    // a - кожен символ який буде перебиратись всередині матриці
    this.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
    });

    // користувач перестав щось вводити
    if (e.type === 'blur') {
      // якщо к-сть символів в інпуті буде = 2, тоді ми очистимо інпут
      if (this.value.length == 4) {
        this.value = '';
      }
    } else {
      // setCursorPosition() - встановлює позицію курсору
      setCursorPosition(this.value.length, this);
    }
  }
  let inputs = document.querySelectorAll(selector);
  inputs.forEach(input => {
    input.addEventListener('input', createMask);
    input.addEventListener('focus', createMask);
    input.addEventListener('blur', createMask);
  });
};
/* harmony default export */ __webpack_exports__["default"] = (mask);

/***/ }),

/***/ "./src/js/modules/modals.js":
/*!**********************************!*\
  !*** ./src/js/modules/modals.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const modals = () => {
  let btnPressed;
  function bindModal(triggerSelector, modalSelector, closeSelector) {
    let gift = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    const trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector),
      windows = document.querySelectorAll('[data-modal]'),
      scroll = calcScroll();
    trigger.forEach(item => {
      item.addEventListener('click', e => {
        if (e.target) {
          e.preventDefault();
        }
        btnPressed = true; // користувач клікнув на кнопку

        windows.forEach(item => {
          item.style.display = 'none';
          item.classList.add('animated', 'fadeIn');
        });
        if (gift) {
          item.remove();
        }
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        // document.body.classList.add('modal-open');
        document.body.style.marginRight = `${scroll}px`;
        document.querySelector('.fixed-gift').style.marginRight = `${scroll}px`;
      });
    });
    // закриття модального вікна при натисканні на хрестик
    close.addEventListener('click', () => {
      windows.forEach(item => {
        item.style.display = 'none';
      });
      modal.style.display = "none";
      document.body.style.overflow = "";
      // document.body.classList.remove('modal-open');
      document.body.style.marginRight = `0px`;
      document.querySelector('.fixed-gift').style.marginRight = `0px`;
    });

    // закриття модального вікна при натисканні на подложку
    modal.addEventListener('click', e => {
      if (e.target === modal) {
        windows.forEach(item => {
          item.style.display = 'none';
        });
        modal.style.display = "none";
        document.body.style.overflow = "";
        // document.body.classList.remove('modal-open'); 
        document.body.style.marginRight = `0px`;
        document.querySelector('.fixed-gift').style.marginRight = `0px`;
      }
    });
  }

  // відкриття модального вікна через певний проміжок часу
  // selector - модальне вікно
  // time - час через який відкриється це модальне вікно
  function showModalByTime(selector, time) {
    setTimeout(function () {
      // якщо користувач вже відкрив модальне вікно тоді ця функція відміняється
      let d;
      document.querySelectorAll('[data-modal]').forEach(item => {
        if (getComputedStyle(item).display !== 'none') {
          d = 'block';
        }
      });

      // якщо користувач не відкрив ні одного модального вікна, тоді ми його показуємо через певний проміжок часу
      if (!d) {
        document.querySelector(selector).style.display = "block";
        document.body.style.overflow = "hidden";
        // робимо щоб сторінка не дьоргалась
        let scroll = calcScroll();
        document.body.style.marginRight = `${scroll}px`;
        // щоб подарунок не дьоргався
        document.querySelector('.fixed-gift').style.marginRight = `${scroll}px`;
      }
    }, time);
  }

  // створ функцію щоб модальне вікно не дьоргалось
  function calcScroll() {
    let div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';
    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
  }

  // selector - той елемент який необхідно показати коли виконається певна умова
  function openByScroll(selector) {
    // для того щоб оприділити скільки пікселів прогортав користувач зверху
    // необхідна подія scroll яка навішується на обєкт window
    window.addEventListener('scroll', () => {
      // якщо користувач не клікнув ні на одну кнопку і догортав до кінця
      // вираховуємо чи користувач дійсно догортав сторінку до кінця
      if (!btnPressed && window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
        // відкриваєм модальне вікно коли умова виконалась
        document.querySelector(selector).click();
      }
    });
  }
  bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
  bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
  bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
  openByScroll('.fixed-gift');
  showModalByTime('.popup-consultation', 60000);
};
/* harmony default export */ __webpack_exports__["default"] = (modals);

/***/ }),

/***/ "./src/js/modules/pictureSize.js":
/*!***************************************!*\
  !*** ./src/js/modules/pictureSize.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const pictureSize = imgSelector => {
  const blocks = document.querySelectorAll(imgSelector);

  //  на кожного з блоків навішуємо подію
  // 1 подія - це коли наша курсор находиться над блоком (mouseover), показуємл потрібну картинку і приховуєм ті елементи що зараз знаходяться в верстці
  // 2 подія - це коли курсор виходить за межи блока (mouseout)

  // створюєм 2 ф-ції
  // перша буде показувати зображення, а друга - приховувати
  function showImg(block) {
    const img = block.querySelector('img');
    // замінюєм картинку
    img.src = img.src.slice(0, -4) + '-1.png';
    // приховуєм лишні параграфи
    // p:not(.sizes-hit) - вибираєм всі параграфи крім .sizes-hit
    block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
      p.style.display = 'none';
    });
  }

  // створ ф-цію яка буде приховувати зображення коли ф-ція буде виходити за межі блоку
  function hideImg(block) {
    const img = block.querySelector('img');
    // замінюєм картинку
    img.src = img.src.slice(0, -6) + '.png';
    // приховуєм лишні параграфи
    // p:not(.sizes-hit) - вибираєм всі параграфи крім .sizes-hit
    block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
      p.style.display = 'block';
    });
  }
  blocks.forEach(block => {
    block.addEventListener('mouseover', () => {
      showImg(block);
    });
    block.addEventListener('mouseout', () => {
      hideImg(block);
    });
  });
};
/* harmony default export */ __webpack_exports__["default"] = (pictureSize);

/***/ }),

/***/ "./src/js/modules/scrolling.js":
/*!*************************************!*\
  !*** ./src/js/modules/scrolling.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const scrolling = upSelector => {
  const upElem = document.querySelector(upSelector);
  window.addEventListener('scroll', () => {
    // scrollTop - це та відстань яку ми вже прогортали і ми його не бачимо
    if (document.documentElement.scrollTop > 1650) {
      upElem.classList.add('animated', 'fadeIn');
      upElem.classList.remove('fadeOut');
    } else {
      upElem.classList.add('fadeOut');
      upElem.classList.remove('fadeIn');
    }
  });

  // 1) Scrolling width requestAnimationFrame
  // шукаємо всі посилання (лінки) з #
  let links = document.querySelectorAll('[href^="#"]'),
    speed = 0.3;
  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      let widthTop = document.documentElement.scrollTop,
        hash = this.hash,
        toBlock = document.querySelector(hash).getBoundingClientRect().top,
        // toBlock - верхня межа того елемента до якого будемо скролити
        start = null;
      requestAnimationFrame(step);
      function step(time) {
        if (start === null) {
          start = time;
        }
        let progress = time - start,
          r = toBlock < 0 ? Math.max(widthTop - progress / speed, widthTop + toBlock) : Math.min(widthTop + progress / speed, widthTop + toBlock);
        // r - к-сть px які необхідне прогорнути протягом цієї анімації
        // ця операція що належить змінній r виконується для того щоб розуміти на скільки px потрібно просунути нашу анімацію та в яку сторону
        document.documentElement.scrollTo(0, r);
        if (r != widthTop + toBlock) {
          requestAnimationFrame(step);
        } else {
          location.hash = hash;
        }
      }
    });
  });

  // 2) Pure JS scrolling
  // робимо лавний сткорл
  // const elem = document.documentElement,
  //       body = document.body;

  // // створюєм ф-цю яка буде підраховувати скільки треба прогортати і як це зробити
  // const calcScroll = () => {
  //     upElem.addEventListener('click', function(e) {
  //         let scrollTop = Math.round(body.scrollTop || elem.scrollTop);

  //         if(this.hash !== "") {
  //             e.preventDefault();
  //             // получаєм той елемент до якого ми будемо скролити (гортати) нашу сторінку
  //             let hashElement = document.querySelector(this.hash),
  //             // створ змінну яка буде визначати скільки ще треба прогортати до батька цього hash елемента
  //                  hashElementTop = 0;

  //             while(hashElement.offsetParent) {
  //                 // offsetTop - оприділяє скільки px залишилось до верхньої межі батьківського елемента від hash елемента
  //                 hashElementTop += hashElement.offsetTop;
  //                 hashElement = hashElement.offsetParent;
  //             }

  //             hashElementTop = Math.round(hashElementTop);
  //             smoothScroll(scrollTop, hashElementTop, this.hash);
  //         }
  //     });
  // };

  // // from - звідки будемо починати 
  // // to - куда будемо йти
  // // hash - елемент до якого буде йти скролл
  // const smoothScroll = (from, to, hash) => {
  //     let timeInterval = 1,
  //         prevScrollTop,
  //         speed; // швидкість скролу

  //     if (to > from) {
  //         speed = 30;
  //     } else {
  //         speed = -30;
  //     }

  //     let move = setInterval(function() {
  //         let scrollTop = Math.round(body.scrollTop || elem.scrollTop);

  //         if(
  //             prevScrollTop === scrollTop || 
  //             (to > from && scrollTop >= to) ||
  //             (to < from && scrollTop <= to)
  //         ) {
  //             clearInterval(move);
  //             history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash);
  //         } else {
  //             body.scrollTop += speed;
  //             elem.scrollTop += speed;
  //             prevScrollTop = scrollTop;
  //         }
  //     }, timeInterval);
  // };

  // calcScroll();
};

/* harmony default export */ __webpack_exports__["default"] = (scrolling);

/***/ }),

/***/ "./src/js/modules/showMoreStyles.js":
/*!******************************************!*\
  !*** ./src/js/modules/showMoreStyles.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/requests */ "./src/js/services/requests.js");

// trigger - конопка
// styles - стилі які треба буле показати
const showMoreStyles = (trigger, wrapper) => {
  const btn = document.querySelector(trigger);

  // cards.forEach(card => {
  //     card.classList.add('animated', 'fadeInUp');
  // });

  // btn.addEventListener('click', () => {
  //     cards.forEach(card => {
  //         card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
  //         card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
  //     });
  //     btn.remove();
  // });

  // постимо дані на сторінку через сервер (коли користувач буде натискати на кнопку 
  // в нас буде відправлятись запит на сервер і звідти приходитимуть блоки)

  const message = {
    failure: 'Щось пішло не так...'
  };
  btn.addEventListener('click', function () {
    Object(_services_requests__WEBPACK_IMPORTED_MODULE_0__["getData"])('assets/db.json')
    // сервер повертає масив з обєктами і цей масив передаємо в ф-цію createCards
    .then(res => createCards(res.styles)).catch(error => {
      let card = document.createElement('div');
      card.classList.add('animated', 'fadeInUp', 'col-sm-4', 'col-sm-offset-4', 'col-xs-6', 'col-xs-offset-1');
      card.innerHTML = `
                    <div class="styles-block">
                        <h4>${message.failure}</h4>
                    </div>
                `;
      document.querySelector(wrapper).appendChild(card);
    }); //  вивести на сторінку повідомлення щощось пішло не так
    this.remove();
  });
  function createCards(response) {
    // беремо цей масив і перебираємо його
    response.forEach(_ref => {
      let {
        src,
        title,
        link
      } = _ref;
      let card = document.createElement('div');
      card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
      card.innerHTML = `
                <div class="styles-block">
                    <img src=${src} alt ="style">
                    <h4>${title}</h4>
                    <a href=${link}>Подробнее</a>
                </div>
            `;
      document.querySelector(wrapper).appendChild(card);
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (showMoreStyles);

/***/ }),

/***/ "./src/js/modules/sliders.js":
/*!***********************************!*\
  !*** ./src/js/modules/sliders.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// slidersSelector - слайди які ми будемо переключати
// dir - сорона по якій буде рухатись слайдер вертикально/горизонтально
// prev/next - кнопкиуть слайдер
const sliders = (slidesSelector, dir, prev, next) => {
  // переший слайдер не містить кнопок prev та next
  let slideIndex = 1,
    // буде відображати теперішній слайд який показується користувачу
    poused = false; // буде розуміти чи потрібно в поточний момент зупинити переключення слайдів

  const items = document.querySelectorAll(slidesSelector);

  // 2. Створ ф-цію яка буде відповідати за переміщення slideIndex і слайдера
  // n - slideIndex і як він буде змінюватись
  function showSlides(n) {
    // якщо n буде більше к-сті слайдів яка є на сторінці, то ми будемо повертатися на початок
    if (n > items.length) {
      slideIndex = 1;
    }

    // якщо n буде менше 1 то ми показуємо останній слайд який є
    if (n < 1) {
      slideIndex = items.length;
    }

    // зробити так щоб коли показується певний слайд ми приховуєм всі інші і показуєм саме той слайд який нам потрібен
    // приховує всі неактивні слайди
    items.forEach(item => {
      // для того щоб перегортування відбувалось плавно
      item.classList.add('animated');
      // приховуєм всі слайди
      item.style.display = 'none';
    });
    // показує перший слайд
    items[slideIndex - 1].style.display = 'block';
  }
  showSlides(slideIndex);

  // в цю функцію буде передаватись 1 або -1
  // ця функція буде викликатись коли користувач буде клікати на певні елементи (вперед або назад кнопки)
  function plusSlides(n) {
    // викликаєм функцію showSlides на 1 слайд більше або на 1 слайд менше
    showSlides(slideIndex += n);
  }

  // якщо селектори кнопок не були передані то цей блок коду не мпрацює і не зруйнує код
  try {
    const prevBtn = document.querySelector(prev),
      nextBtn = document.querySelector(next);

    // якщо кнопки є
    prevBtn.addEventListener('click', () => {
      plusSlides(-1);
      // добавляємо анімації при переключенні слайдів
      items[slideIndex - 1].classList.remove('slideInLeft');
      items[slideIndex - 1].classList.add('slideInRight');
    });
    nextBtn.addEventListener('click', () => {
      plusSlides(1);
      items[slideIndex - 1].classList.remove('slideInRight');
      items[slideIndex - 1].classList.add('slideInLeft');
    });
  } catch (e) {}

  // коли користувач наводить мишку на слайдер то ми відключаєм автоматичне прогортування слайдера
  function activateAnimation() {
    // якщо слайдер вертикальний та якщо горизонтальний
    if (dir === 'vertical') {
      poused = setInterval(function () {
        plusSlides(1);
        items[slideIndex - 1].classList.add('slideInDown');
      }, 3000);
    } else {
      poused = setInterval(function () {
        plusSlides(1);
        items[slideIndex - 1].classList.remove('slideInRight');
        items[slideIndex - 1].classList.add('slideInLeft');
      }, 3000);
    }
  }
  activateAnimation();
  items[0].parentNode.addEventListener('mouseenter', () => {
    clearInterval(poused);
  });
  items[0].parentNode.addEventListener('mouseleave', () => {
    activateAnimation();
  });
};
/* harmony default export */ __webpack_exports__["default"] = (sliders);

/***/ }),

/***/ "./src/js/services/requests.js":
/*!*************************************!*\
  !*** ./src/js/services/requests.js ***!
  \*************************************/
/*! exports provided: postData, getData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postData", function() { return postData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getData", function() { return getData; });
// відправка даних на сервер
const postData = async (url, data) => {
  let res = await fetch(url, {
    method: "POST",
    body: data
  });
  return await res.text();
};

// відправка даних на сервер
const getData = async url => {
  let res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }
  return await res.json();
};


/***/ })

/******/ });
//# sourceMappingURL=script.js.map