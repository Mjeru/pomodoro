webpackHotUpdate("main",{

/***/ "./src/shared/TaskList/TaskList.tsx":
/*!******************************************!*\
  !*** ./src/shared/TaskList/TaskList.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.TaskList = void 0;\r\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\r\nconst react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nconst tasklist_css_1 = __importDefault(__webpack_require__(/*! ./tasklist.css */ \"./src/shared/TaskList/tasklist.css\"));\r\nconst Button_1 = __webpack_require__(/*! ../Button */ \"./src/shared/Button/index.ts\");\r\nconst Break_1 = __webpack_require__(/*! ../Break */ \"./src/shared/Break/index.ts\");\r\nconst Task_1 = __webpack_require__(/*! ./Task */ \"./src/shared/TaskList/Task/index.ts\");\r\nconst store_1 = __webpack_require__(/*! ../../store */ \"./src/store.ts\");\r\nconst actions_1 = __webpack_require__(/*! ../../store/actions */ \"./src/store/actions.ts\");\r\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nconst core_1 = __webpack_require__(/*! @dnd-kit/core */ \"./node_modules/@dnd-kit/core/dist/core.esm.js\");\r\nconst sortable_1 = __webpack_require__(/*! @dnd-kit/sortable */ \"./node_modules/@dnd-kit/sortable/dist/sortable.esm.js\");\r\nfunction TaskList() {\r\n    const dispatch = (0, react_redux_1.useDispatch)();\r\n    const workTime = (0, react_redux_1.useSelector)(state => state.timerModel.options.workTime);\r\n    const list = (0, react_redux_1.useSelector)((state) => state.tasks);\r\n    const [activeItem, setActiveItem] = (0, react_1.useState)();\r\n    const sensors = (0, core_1.useSensors)((0, core_1.useSensor)(core_1.PointerSensor), (0, core_1.useSensor)(core_1.TouchSensor));\r\n    const handleDragStart = (event) => {\r\n        const { active } = event;\r\n        setActiveItem(list.find((item) => item.id === active.id));\r\n    };\r\n    const handleDragEnd = (event) => {\r\n        const { active, over } = event;\r\n        if (!over)\r\n            return;\r\n        const activeItem = list.find((item) => item.id === active.id);\r\n        const overItem = list.find((item) => item.id === over.id);\r\n        if (!activeItem || !overItem) {\r\n            return;\r\n        }\r\n        const activeIndex = list.findIndex((item) => item.id === active.id);\r\n        const overIndex = list.findIndex((item) => item.id === over.id);\r\n        if (activeIndex !== overIndex) {\r\n            dispatch((0, actions_1.setTasks)((0, sortable_1.arrayMove)(list, activeIndex, overIndex)));\r\n            // setItems((prev) => arrayMove<TItem>(prev, activeIndex, overIndex));\r\n        }\r\n        setActiveItem(undefined);\r\n    };\r\n    const handleDragCancel = () => {\r\n        setActiveItem(undefined);\r\n    };\r\n    const [value, setValue] = (0, react_1.useState)('');\r\n    const onChange = (ev) => {\r\n        setValue(ev.target.value);\r\n    };\r\n    const clickHandler = () => {\r\n        if (value.trim() !== '') {\r\n            store_1.store.dispatch((0, actions_1.addTask)(value));\r\n            setValue('');\r\n        }\r\n    };\r\n    return ((0, jsx_runtime_1.jsxs)(\"div\", { children: [(0, jsx_runtime_1.jsx)(\"input\", { value: value, onChange: onChange, className: tasklist_css_1.default.taskInput, type: 'text', placeholder: 'Название задачи' }), (0, jsx_runtime_1.jsx)(Break_1.Break, { top: true, size: 25 }), (0, jsx_runtime_1.jsx)(Button_1.Button, { onClick: clickHandler, text: 'Добавить' }), (0, jsx_runtime_1.jsx)(Break_1.Break, { top: true, size: 25 }), (0, jsx_runtime_1.jsxs)(core_1.DndContext, Object.assign({ id: 'list', sensors: sensors, collisionDetection: core_1.pointerWithin, modifiers: [restrictToVerticalAxis], onDragStart: handleDragStart, onDragEnd: handleDragEnd, onDragCancel: handleDragCancel }, { children: [(0, jsx_runtime_1.jsx)(sortable_1.SortableContext, Object.assign({ items: list, strategy: sortable_1.rectSortingStrategy }, { children: (0, jsx_runtime_1.jsx)(\"div\", { children: list.map((item) => ((0, jsx_runtime_1.jsx)(Task_1.Task, { text: item.title, tomato: item.tomato, id: item.id }, item.id))) }) })), (0, jsx_runtime_1.jsx)(core_1.DragOverlay, Object.assign({ style: { transformOrigin: '0 0 ' } }, { children: activeItem ? (0, jsx_runtime_1.jsx)(Task_1.Task, { id: activeItem.id, text: activeItem.title, isDragging: true, tomato: activeItem.tomato }) : null }))] })), (0, jsx_runtime_1.jsx)(\"div\", Object.assign({ className: tasklist_css_1.default.timeBlock }, { children: formatTime(list.reduce((acc, el) => {\r\n                    return acc + el.tomato;\r\n                }, 0) * Math.floor(workTime / 60)) }))] }));\r\n}\r\nexports.TaskList = TaskList;\r\nfunction formatTime(minutes) {\r\n    const hours = Math.floor(minutes / 60);\r\n    const remainderMinutes = minutes % 60;\r\n    let result = '';\r\n    if (hours > 0) {\r\n        result += hours + ' ' + getHoursSuffix(hours);\r\n    }\r\n    if (remainderMinutes > 0) {\r\n        result += ' ' + remainderMinutes + ' минут';\r\n    }\r\n    if (result === '') {\r\n        result = '0 минут';\r\n    }\r\n    return result.trim();\r\n}\r\nfunction getHoursSuffix(hours) {\r\n    const lastDigit = hours % 10;\r\n    if (hours >= 11 && hours <= 19) {\r\n        return 'часов';\r\n    }\r\n    else if (lastDigit === 1) {\r\n        return 'час';\r\n    }\r\n    else if (lastDigit >= 2 && lastDigit <= 4) {\r\n        return 'часа';\r\n    }\r\n    else {\r\n        return 'часов';\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/shared/TaskList/TaskList.tsx?");

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