webpackHotUpdate("main",{

/***/ "./src/shared/TaskList/TaskList.tsx":
/*!******************************************!*\
  !*** ./src/shared/TaskList/TaskList.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.TaskList = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar tasklist_css_1 = __importDefault(__webpack_require__(/*! ./tasklist.css */ \"./src/shared/TaskList/tasklist.css\"));\r\nvar Button_1 = __webpack_require__(/*! ../Button */ \"./src/shared/Button/index.ts\");\r\nvar Break_1 = __webpack_require__(/*! ../Break */ \"./src/shared/Break/index.ts\");\r\nvar Task_1 = __webpack_require__(/*! ./Task */ \"./src/shared/TaskList/Task/index.ts\");\r\nvar store_1 = __webpack_require__(/*! ../../store */ \"./src/store.ts\");\r\nvar actions_1 = __webpack_require__(/*! ../../store/actions */ \"./src/store/actions.ts\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nvar core_1 = __webpack_require__(/*! @dnd-kit/core */ \"./node_modules/@dnd-kit/core/dist/core.esm.js\");\r\nvar sortable_1 = __webpack_require__(/*! @dnd-kit/sortable */ \"./node_modules/@dnd-kit/sortable/dist/sortable.esm.js\");\r\nfunction TaskList() {\r\n    var _a = (0, react_1.useState)([1, 2, 3]), items = _a[0], setItems = _a[1];\r\n    var sensors = (0, core_1.useSensors)((0, core_1.useSensor)(core_1.PointerSensor), (0, core_1.useSensor)(core_1.KeyboardSensor, {\r\n        coordinateGetter: sortable_1.sortableKeyboardCoordinates,\r\n    }));\r\n    var _b = (0, react_1.useState)(\"\"), value = _b[0], setValue = _b[1];\r\n    var list = (0, react_redux_1.useSelector)(function (state) { return state.tasks; });\r\n    var onChange = function (ev) {\r\n        setValue(ev.target.value);\r\n    };\r\n    var clickHandler = function () {\r\n        if (value.trim() !== \"\") {\r\n            store_1.store.dispatch((0, actions_1.addTask)(value));\r\n            setValue(\"\");\r\n        }\r\n    };\r\n    return (react_1.default.createElement(\"div\", null,\r\n        react_1.default.createElement(core_1.DndContext, { sensors: sensors, collisionDetection: core_1.closestCenter, onDragEnd: handleDragEnd },\r\n            react_1.default.createElement(sortable_1.SortableContext, { items: items, strategy: sortable_1.verticalListSortingStrategy }, items.map(function (id) { return react_1.default.createElement(SortableItem, { key: id, id: \"\".concat(id) }, id); }))),\r\n        react_1.default.createElement(\"input\", { value: value, onChange: onChange, className: tasklist_css_1.default.taskInput, type: \"text\", placeholder: \"Название задачи\" }),\r\n        react_1.default.createElement(Break_1.Break, { top: true, size: 25 }),\r\n        react_1.default.createElement(Button_1.Button, { onClick: clickHandler, text: \"Добавить\" }),\r\n        react_1.default.createElement(Break_1.Break, { top: true, size: 25 }),\r\n        list.map(function (item) { return (react_1.default.createElement(Task_1.Task, { key: item.id, id: item.id, tomato: item.tomato, text: item.title })); }),\r\n        react_1.default.createElement(\"div\", { className: tasklist_css_1.default.timeBlock }, formatTime(list.reduce(function (acc, el) {\r\n            return acc + el.tomato;\r\n        }, 0) * 25))));\r\n    function handleDragEnd(event) {\r\n        var active = event.active, over = event.over;\r\n        if (active.id !== over.id) {\r\n            setItems(function (items) {\r\n                var oldIndex = items.indexOf(active.id);\r\n                var newIndex = items.indexOf(over.id);\r\n                return (0, sortable_1.arrayMove)(items, oldIndex, newIndex);\r\n            });\r\n        }\r\n    }\r\n}\r\nexports.TaskList = TaskList;\r\nfunction formatTime(minutes) {\r\n    var hours = Math.floor(minutes / 60);\r\n    var remainderMinutes = minutes % 60;\r\n    var result = \"\";\r\n    if (hours > 0) {\r\n        result += hours + \" \" + getHoursSuffix(hours);\r\n    }\r\n    if (remainderMinutes > 0) {\r\n        result += \" \" + remainderMinutes + \" минут\";\r\n    }\r\n    if (result === \"\") {\r\n        result = \"0 минут\";\r\n    }\r\n    return result.trim();\r\n}\r\nfunction getHoursSuffix(hours) {\r\n    var lastDigit = hours % 10;\r\n    if (hours >= 11 && hours <= 19) {\r\n        return \"часов\";\r\n    }\r\n    else if (lastDigit === 1) {\r\n        return \"час\";\r\n    }\r\n    else if (lastDigit >= 2 && lastDigit <= 4) {\r\n        return \"часа\";\r\n    }\r\n    else {\r\n        return \"часов\";\r\n    }\r\n}\r\nfunction SortableItem(props) {\r\n    var _a = (0, sortable_1.useSortable)({ id: props.id }), attributes = _a.attributes, listeners = _a.listeners, setNodeRef = _a.setNodeRef, transform = _a.transform, transition = _a.transition;\r\n    var style = {\r\n        transform: CSS.Transform.toString(transform),\r\n        transition: transition,\r\n    };\r\n    return (react_1.default.createElement(\"div\", __assign({ ref: setNodeRef, style: style }, attributes, listeners)));\r\n}\r\n\n\n//# sourceURL=webpack:///./src/shared/TaskList/TaskList.tsx?");

/***/ }),

/***/ "./src/shared/TaskList/index.ts":
/*!**************************************!*\
  !*** ./src/shared/TaskList/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./TaskList */ \"./src/shared/TaskList/TaskList.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/TaskList/index.ts?");

/***/ })

})