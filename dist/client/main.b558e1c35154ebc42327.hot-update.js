webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/shared/Stats/DiaStat/diastat.css":
/*!**********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./src/shared/Stats/DiaStat/diastat.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".diastat__container--14qD8 {\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    position: relative;\\r\\n}\\r\\n.diastat__daysWrapper--mHCGx {\\r\\n    position: absolute;\\r\\n    left: 56px;\\r\\n    top: 0;\\r\\n    bottom: 0;\\r\\n    display: flex;\\r\\n    gap: 32px;\\r\\n    z-index: 2;\\r\\n}\\r\\n.diastat__day--2FCL2 {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    height: 100%;\\r\\n}\\r\\n.diastat__dayBar--1ahU_ {\\r\\n    width: 77px;\\r\\n    height: 100px;\\r\\n    background-color: transparent;\\r\\n    flex-grow: 2;\\r\\n    position: relative;\\r\\n}\\r\\n.diastat__datBarInner--1h65Y {\\r\\n    width: 100%;\\r\\n    background-color: var(--red2);\\r\\n    height: 0;\\r\\n    position: absolute;\\r\\n    bottom: 0;\\r\\n}\\r\\n.diastat__dayText--1VTgw {\\r\\n    height: 51px;\\r\\n    padding: 11px;\\r\\n    text-align: center;\\r\\n    font-weight: 400;\\r\\n    font-size: 24px;\\r\\n    line-height: 29px;\\r\\n    color: var(--grey99);\\r\\n}\\r\\n.diastat__dioFooter--2q8NV {\\r\\n    position: absolute;\\r\\n    bottom: 0;\\r\\n    width: 100%;\\r\\n    height: 51px;\\r\\n    background-color: var(--greyEC);\\r\\n}\\r\\n.diastat__selected--2trww {\\r\\n    background-color: var(--red);\\r\\n    color: var(--red);\\r\\n}\\r\\n.diastat__selectedText--32L6s {\\r\\n    color: var(--red);\\r\\n}\\r\\n.diastat__disabled--DSb4X {\\r\\n    background-color: var(--greyC4);\\r\\n}\\r\\n.diastat__legendWrapper--HPAs3{\\r\\n    width: calc(100% - 109px);\\r\\n    height: calc(100% - 50px);\\r\\n}\\r\\n.diastat__legendWrapper--HPAs3 div {\\r\\n    height: 20%;\\r\\n    display: flex;\\r\\n    position: relative;\\r\\n}\\r\\n.diastat__legendWrapper--HPAs3 div > span:first-child {\\r\\n    display: block;\\r\\n    width: 100%;\\r\\n    height: 1px;\\r\\n    background-color: var(--grey33);\\r\\n    opacity: 0.2;\\r\\n}\\r\\n.diastat__legedText--CBjnQ {\\r\\n    color: var(--grey33);\\r\\n    white-space: nowrap;\\r\\n    display: flex;\\r\\n    font-weight: 400;\\r\\n    font-size: 12px;\\r\\n    line-height: 32px;\\r\\n    padding-left: 30px;\\r\\n    position: absolute;\\r\\n    left: 100%;\\r\\n    transform: translateY(-50%);\\r\\n}\\r\\n\", \"\"]);\n// Exports\nexports.locals = {\n\t\"container\": \"diastat__container--14qD8\",\n\t\"daysWrapper\": \"diastat__daysWrapper--mHCGx\",\n\t\"day\": \"diastat__day--2FCL2\",\n\t\"dayBar\": \"diastat__dayBar--1ahU_\",\n\t\"datBarInner\": \"diastat__datBarInner--1h65Y\",\n\t\"dayText\": \"diastat__dayText--1VTgw\",\n\t\"dioFooter\": \"diastat__dioFooter--2q8NV\",\n\t\"selected\": \"diastat__selected--2trww\",\n\t\"selectedText\": \"diastat__selectedText--32L6s\",\n\t\"disabled\": \"diastat__disabled--DSb4X\",\n\t\"legendWrapper\": \"diastat__legendWrapper--HPAs3\",\n\t\"legedText\": \"diastat__legedText--CBjnQ\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/shared/Stats/DiaStat/diastat.css?./node_modules/css-loader/dist/cjs.js??ref--6-1");

/***/ }),

/***/ "./src/shared/Stats/DiaStat/DiaStat.tsx":
/*!**********************************************!*\
  !*** ./src/shared/Stats/DiaStat/DiaStat.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.DiaStat = void 0;\r\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\r\nconst react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nconst diastat_css_1 = __importDefault(__webpack_require__(/*! ./diastat.css */ \"./src/shared/Stats/DiaStat/diastat.css\"));\r\nconst classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\"));\r\nconst noop = () => {\r\n    //do nothing.\r\n};\r\nfunction DiaStat({ stats, setTarget, target }) {\r\n    const [max, setMax] = (0, react_1.useState)(0);\r\n    (0, react_1.useEffect)(() => {\r\n        setMax(\r\n        // Math.ceil(Math.max(...stats.map((el) => (el.workTime ? el.workTime : 0)))/25)*25\r\n        Math.max(...stats.map((el) => (el.workTime ? el.workTime : 0)) > 25));\r\n    }, [stats]);\r\n    const clickHandler = (date) => () => {\r\n        setTarget(date);\r\n    };\r\n    return ((0, jsx_runtime_1.jsxs)(\"div\", Object.assign({ className: diastat_css_1.default.container }, { children: [(0, jsx_runtime_1.jsxs)(\"div\", Object.assign({ className: diastat_css_1.default.legendWrapper }, { children: [(0, jsx_runtime_1.jsx)(\"div\", {}), (0, jsx_runtime_1.jsxs)(\"div\", { children: [(0, jsx_runtime_1.jsx)(\"span\", {}), (0, jsx_runtime_1.jsx)(\"span\", Object.assign({ className: diastat_css_1.default.legedText }, { children: formatTime(max / 5 * 4) }))] }), (0, jsx_runtime_1.jsxs)(\"div\", { children: [(0, jsx_runtime_1.jsx)(\"span\", {}), (0, jsx_runtime_1.jsx)(\"span\", Object.assign({ className: diastat_css_1.default.legedText }, { children: formatTime(max / 5 * 3) }))] }), (0, jsx_runtime_1.jsxs)(\"div\", { children: [(0, jsx_runtime_1.jsx)(\"span\", {}), (0, jsx_runtime_1.jsx)(\"span\", Object.assign({ className: diastat_css_1.default.legedText }, { children: formatTime(max / 5 * 2) }))] }), (0, jsx_runtime_1.jsxs)(\"div\", { children: [(0, jsx_runtime_1.jsx)(\"span\", {}), (0, jsx_runtime_1.jsx)(\"span\", Object.assign({ className: diastat_css_1.default.legedText }, { children: formatTime(max / 5 * 1) }))] })] })), (0, jsx_runtime_1.jsxs)(\"div\", Object.assign({ className: diastat_css_1.default.daysWrapper }, { children: [(0, jsx_runtime_1.jsx)(Day, { stat: stats[0], clickHandler: clickHandler(stats[0]), target: target, max: max, day: 'Пн' }), (0, jsx_runtime_1.jsx)(Day, { stat: stats[1], clickHandler: clickHandler(stats[1]), target: target, max: max, day: 'Вт' }), (0, jsx_runtime_1.jsx)(Day, { stat: stats[2], clickHandler: clickHandler(stats[2]), target: target, max: max, day: 'Ср' }), (0, jsx_runtime_1.jsx)(Day, { stat: stats[3], clickHandler: clickHandler(stats[3]), target: target, max: max, day: 'Чт' }), (0, jsx_runtime_1.jsx)(Day, { stat: stats[4], clickHandler: clickHandler(stats[4]), target: target, max: max, day: 'Пт' }), (0, jsx_runtime_1.jsx)(Day, { stat: stats[5], clickHandler: clickHandler(stats[5]), target: target, max: max, day: 'Сб' }), (0, jsx_runtime_1.jsx)(Day, { stat: stats[6], clickHandler: clickHandler(stats[6]), target: target, max: max, day: 'Вс' })] })), (0, jsx_runtime_1.jsx)(\"div\", { className: diastat_css_1.default.dioFooter })] })));\r\n}\r\nexports.DiaStat = DiaStat;\r\nconst Day = ({ stat, clickHandler, target, max, day }) => {\r\n    if (stat)\r\n        return ((0, jsx_runtime_1.jsxs)(\"div\", Object.assign({ className: diastat_css_1.default.day, onClick: clickHandler }, { children: [(0, jsx_runtime_1.jsx)(\"div\", Object.assign({ className: diastat_css_1.default.dayBar }, { children: (0, jsx_runtime_1.jsx)(\"div\", { className: (0, classnames_1.default)(diastat_css_1.default.datBarInner, (target === null || target === void 0 ? void 0 : target.id) === stat.id ? diastat_css_1.default.selected : '', !stat.workTime ? diastat_css_1.default.disabled : ''), style: {\r\n                            height: stat.workTime\r\n                                ? `${(stat.workTime / max) * 100}%`\r\n                                : `5px`,\r\n                        } }) })), (0, jsx_runtime_1.jsx)(\"div\", Object.assign({ className: (0, classnames_1.default)(diastat_css_1.default.dayText, (target === null || target === void 0 ? void 0 : target.id) === stat.id ? diastat_css_1.default.selectedText : '') }, { children: day }))] })));\r\n    return ((0, jsx_runtime_1.jsxs)(\"div\", Object.assign({ className: diastat_css_1.default.day, onClick: clickHandler }, { children: [(0, jsx_runtime_1.jsx)(\"div\", Object.assign({ className: diastat_css_1.default.dayBar }, { children: (0, jsx_runtime_1.jsx)(\"div\", { className: (0, classnames_1.default)(diastat_css_1.default.datBarInner, diastat_css_1.default.disabled), style: { height: '5px' } }) })), (0, jsx_runtime_1.jsx)(\"div\", Object.assign({ className: (0, classnames_1.default)(diastat_css_1.default.dayText, '') }, { children: day }))] })));\r\n};\r\nfunction formatTime(seconds) {\r\n    const hours = Math.floor(seconds / 3600); // количество полных часов\r\n    const minutes = Math.floor((seconds % 3600) / 60); // количество полных минут\r\n    if (minutes === 0) {\r\n        return `${hours} ч`;\r\n    }\r\n    if (hours === 0) {\r\n        return `${minutes} мин`;\r\n    }\r\n    return `${hours} ч ${minutes} мин`;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/shared/Stats/DiaStat/DiaStat.tsx?");

/***/ }),

/***/ "./src/shared/Stats/DiaStat/diastat.css":
/*!**********************************************!*\
  !*** ./src/shared/Stats/DiaStat/diastat.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!./diastat.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/shared/Stats/DiaStat/diastat.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\nif (true) {\n  if (!content.locals) {\n    module.hot.accept(\n      /*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!./diastat.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/shared/Stats/DiaStat/diastat.css\",\n      function () {\n        var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!./diastat.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/shared/Stats/DiaStat/diastat.css\");\n\n              newContent = newContent.__esModule ? newContent.default : newContent;\n\n              if (typeof newContent === 'string') {\n                newContent = [[module.i, newContent, '']];\n              }\n\n              update(newContent);\n      }\n    )\n  }\n\n  module.hot.dispose(function() { \n    update();\n  });\n}\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/shared/Stats/DiaStat/diastat.css?");

/***/ }),

/***/ "./src/shared/Stats/DiaStat/index.ts":
/*!*******************************************!*\
  !*** ./src/shared/Stats/DiaStat/index.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./DiaStat */ \"./src/shared/Stats/DiaStat/DiaStat.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Stats/DiaStat/index.ts?");

/***/ })

})