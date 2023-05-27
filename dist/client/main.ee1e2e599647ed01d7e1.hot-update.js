"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatepomodoro_box"]("main",{

/***/ "./src/shared/Timer/Timer.tsx":
/*!************************************!*\
  !*** ./src/shared/Timer/Timer.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("var url__WEBPACK_IMPORTED_MODULE_11___namespace_cache;\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Timer: () => (/* binding */ Timer)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _timer_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timer.css */ \"./src/shared/Timer/timer.css\");\n/* harmony import */ var _timer_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_timer_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Icon */ \"./src/shared/Icon/index.ts\");\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Button */ \"./src/shared/Button/index.ts\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/actions */ \"./src/store/actions.ts\");\n/* harmony import */ var use_sound__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! use-sound */ \"./node_modules/use-sound/dist/use-sound.esm.js\");\n/* harmony import */ var _assets_beep_mp3__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/beep.mp3 */ \"./src/assets/beep.mp3\");\n/* harmony import */ var web_worker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! web-worker */ \"./node_modules/web-worker/cjs/browser.js\");\n/* harmony import */ var web_worker__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(web_worker__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! url */ \"./node_modules/url/url.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nif (typeof window !== 'undefined') {\r\n    cont;\r\n    url = new /*#__PURE__*/ (url__WEBPACK_IMPORTED_MODULE_11___namespace_cache || (url__WEBPACK_IMPORTED_MODULE_11___namespace_cache = __webpack_require__.t(url__WEBPACK_IMPORTED_MODULE_11__, 2)))('');\r\n    const myWorker = new (web_worker__WEBPACK_IMPORTED_MODULE_10___default())(\"../workers/masterWorker.js\");\r\n    myWorker.onmessage = (messageEvent) => { console.log(\"Returning event:\", messageEvent); };\r\n    myWorker.postMessage({ data: 123 });\r\n}\r\n// const WORK = 2\r\nconst WORK = 1500;\r\n// const TIMEOUT = 2\r\nconst TIMEOUT = 300;\r\nlet timerContainer = null;\r\nfunction Timer() {\r\n    const [play] = (0,use_sound__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_assets_beep_mp3__WEBPACK_IMPORTED_MODULE_9__[\"default\"]);\r\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\r\n    const task = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state) => state.tasks.find((task) => !task.done));\r\n    const [time, setTime] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(WORK);\r\n    const [part, setPart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('work');\r\n    const [mode, setMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('stop');\r\n    const addTime = () => {\r\n        setTime((time) => time + 60);\r\n    };\r\n    const startTimer = () => {\r\n        if (mode === 'stop' || mode === 'pause') {\r\n            setMode('start');\r\n            setTime((time) => time - 1);\r\n            timerContainer = setInterval(() => {\r\n                setTime((time) => (time - 1 ? time - 1 : 0));\r\n            }, 1000);\r\n        }\r\n    };\r\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\r\n        setTime(WORK);\r\n        setMode('stop');\r\n        setPart('work');\r\n    }, [task]);\r\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\r\n        checkTimer();\r\n    }, [time]);\r\n    const checkTimer = () => {\r\n        if (time < 0) {\r\n            endTimer();\r\n        }\r\n    };\r\n    const stopTimer = () => {\r\n        if (timerContainer !== null && mode === 'start') {\r\n            clearInterval(timerContainer);\r\n            setTime(WORK);\r\n            setMode('stop');\r\n        }\r\n    };\r\n    const pauseTimer = () => {\r\n        if (timerContainer !== null && mode == 'start') {\r\n            setMode('pause');\r\n            clearInterval(timerContainer);\r\n        }\r\n    };\r\n    const endTimer = () => {\r\n        console.log(mode);\r\n        if (timerContainer !== null && part == 'work') {\r\n            clearInterval(timerContainer);\r\n            setTime(TIMEOUT);\r\n            setPart('timeout');\r\n            setMode('stop');\r\n            play();\r\n        }\r\n        if (timerContainer !== null && part == 'timeout') {\r\n            clearInterval(timerContainer);\r\n            setTime(WORK);\r\n            setPart('work');\r\n            setMode('stop');\r\n            endTomato();\r\n            play();\r\n        }\r\n    };\r\n    const endTomato = () => {\r\n        if (task) {\r\n            dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_7__.decTomato)(task.id));\r\n        }\r\n    };\r\n    const skipWork = () => {\r\n        if (timerContainer !== null && part == 'work') {\r\n            clearInterval(timerContainer);\r\n            setTime(TIMEOUT);\r\n            setPart('timeout');\r\n            setMode('stop');\r\n        }\r\n    };\r\n    const skipTimeout = () => {\r\n        console.log('skipWork');\r\n        endTomato();\r\n    };\r\n    if (!task) {\r\n        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { children: \"123\" });\r\n    }\r\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", Object.assign({ className: classnames__WEBPACK_IMPORTED_MODULE_6___default()((_timer_css__WEBPACK_IMPORTED_MODULE_2___default().wrapper), part === 'work' ? (_timer_css__WEBPACK_IMPORTED_MODULE_2___default().work) : (_timer_css__WEBPACK_IMPORTED_MODULE_2___default().timeout), mode === 'start'\r\n            ? (_timer_css__WEBPACK_IMPORTED_MODULE_2___default().start)\r\n            : mode === 'pause'\r\n                ? (_timer_css__WEBPACK_IMPORTED_MODULE_2___default().pause)\r\n                : (_timer_css__WEBPACK_IMPORTED_MODULE_2___default().stop)) }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"header\", Object.assign({ className: (_timer_css__WEBPACK_IMPORTED_MODULE_2___default().header) }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", Object.assign({ className: (_timer_css__WEBPACK_IMPORTED_MODULE_2___default().title) }, { children: task.title })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", Object.assign({ className: (_timer_css__WEBPACK_IMPORTED_MODULE_2___default().tomato) }, { children: part === 'work' ? 'Помидор ' + (task.complete + 1) : 'Перерыв ' + (task.complete + 1) }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", Object.assign({ className: (_timer_css__WEBPACK_IMPORTED_MODULE_2___default().timeWrapper) }, { children: [formatTime(time), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", Object.assign({ onClick: addTime, className: (_timer_css__WEBPACK_IMPORTED_MODULE_2___default().addButton) }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_4__.Icon, { iconName: 'addButton' }) }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", Object.assign({ className: (_timer_css__WEBPACK_IMPORTED_MODULE_2___default().buttonsBlock) }, { children: [mode === 'stop' ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_5__.Button, { onClick: startTimer, text: 'Старт', type: 'default' })) : mode === 'pause' ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_5__.Button, { onClick: startTimer, text: 'Продолжить', type: 'default' })) : mode === 'start' ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_5__.Button, { onClick: pauseTimer, text: 'Пауза', type: 'default' })) : (''), part === 'work' ? (mode === 'pause' ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_5__.Button, { onClick: skipWork, text: 'Сделано', type: 'disabledR' })) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_5__.Button, { onClick: stopTimer, text: 'Стоп', type: 'disabledR' }))) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_5__.Button, { onClick: skipTimeout, text: 'Пропустить', type: 'disabledR' }))] }))] })));\r\n}\r\nfunction formatTime(seconds) {\r\n    if (seconds < 0)\r\n        return `00:00`;\r\n    const minutes = Math.floor(seconds / 60);\r\n    const remainingSeconds = seconds % 60;\r\n    const minutesString = String(minutes).padStart(2, '0');\r\n    const secondsString = String(remainingSeconds).padStart(2, '0');\r\n    return `${minutesString}:${secondsString}`;\r\n}\r\n\n\n//# sourceURL=webpack://pomodoro_box/./src/shared/Timer/Timer.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8836a0e52a476b1398d9")
/******/ })();
/******/ 
/******/ }
);