(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{273:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"toStorybook",(function(){return toStorybook}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_addon_links__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(277),_storybook_react_demo__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(86);__webpack_exports__.default={title:"Welcome"};var toStorybook=function toStorybook(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_storybook_react_demo__WEBPACK_IMPORTED_MODULE_2__.Welcome,{showApp:Object(_storybook_addon_links__WEBPACK_IMPORTED_MODULE_1__.linkTo)("Button")})};toStorybook.story={name:"to Storybook"},toStorybook.__docgenInfo={description:"",methods:[],displayName:"toStorybook"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/0-Welcome.stories.js"]={name:"toStorybook",docgenInfo:toStorybook.__docgenInfo,path:"src/stories/0-Welcome.stories.js"})},274:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"text",(function(){return text})),__webpack_require__.d(__webpack_exports__,"emoji",(function(){return emoji}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(65),_storybook_react_demo__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(86);__webpack_exports__.default={title:"Button"};var text=function text(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_storybook_react_demo__WEBPACK_IMPORTED_MODULE_2__.Button,{onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("clicked")},"Hello Button")},emoji=function emoji(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_storybook_react_demo__WEBPACK_IMPORTED_MODULE_2__.Button,{onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("clicked")},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{role:"img","aria-label":"so cool"},"😀 😎 👍 💯"))};text.__docgenInfo={description:"",methods:[],displayName:"text"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/1-Button.stories.js"]={name:"text",docgenInfo:text.__docgenInfo,path:"src/stories/1-Button.stories.js"}),emoji.__docgenInfo={description:"",methods:[],displayName:"emoji"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/1-Button.stories.js"]={name:"emoji",docgenInfo:emoji.__docgenInfo,path:"src/stories/1-Button.stories.js"})},278:function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_ai_Develop_React_test_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(281),_Users_ai_Develop_React_test_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(172),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(173);function _templateObject2(){var data=Object(_Users_ai_Develop_React_test_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.a)(["\n  font-size: 1.5rem;\n  padding: 1rem 3rem;\n  text-align: center;\n  color: ghostwhite;\n  background: teal;\n  border-radius: 3rem;\n"]);return _templateObject2=function _templateObject2(){return data},data}function _templateObject(){var data=Object(_Users_ai_Develop_React_test_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.a)(["\n  font-size: 1.5rem;\n  padding: 1rem;\n  text-align: center;\n  color: #FFC507;\n  background: #353B41;\n"]);return _templateObject=function _templateObject(){return data},data}var Header=styled_components__WEBPACK_IMPORTED_MODULE_3__.a.header(_templateObject()),Button=styled_components__WEBPACK_IMPORTED_MODULE_3__.a.button(_templateObject2());__webpack_exports__.a=function Example(props){var text=props.text,flag=props.flag,action=props.action,_useState=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),_useState2=Object(_Users_ai_Develop_React_test_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),count=_useState2[0],countChg=_useState2[1],countUp=Object(react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((function(){return countChg((function(prev){return prev+1}))}),[]),countDown=Object(react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((function(){return countChg((function(prev){return prev-1}))}),[]);return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Header,null,"Head"),flag&&react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p",null,text),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Button,{onClick:action},"ボタン"),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p",null,"count:",count),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button",{onClick:countUp},"+"),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button",{onClick:countDown},"-"))}},284:function(module,exports,__webpack_require__){__webpack_require__(285),__webpack_require__(397),module.exports=__webpack_require__(398)},306:function(module,exports){},398:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(118),_storybook_addon_console__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(276);Object(_storybook_addon_console__WEBPACK_IMPORTED_MODULE_1__.setConsoleOptions)({panelExclude:[]}),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)((function loadStories(){var req=__webpack_require__(590);req.keys().forEach((function(filename){return req(filename)})),(req=__webpack_require__(594)).keys().forEach((function(filename){return req(filename)}))}),module)}.call(this,__webpack_require__(213)(module))},590:function(module,exports,__webpack_require__){var map={"./0-Welcome.stories.js":273,"./1-Button.stories.js":274};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=590},594:function(module,exports,__webpack_require__){var map={"./component/Example/index.stories.tsx":595,"./stories/0-Welcome.stories.js":273,"./stories/1-Button.stories.js":274};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=594},595:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(118),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(119),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(65),_Example__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(278);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Components",module).addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.withKnobs).add("Example",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Example__WEBPACK_IMPORTED_MODULE_4__.a,{text:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text)("テキスト","ああああ"),flag:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("テキスト表示",!0),action:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action)("ぽちっとな")})}))}.call(this,__webpack_require__(213)(module))}},[[284,1,2]]]);
//# sourceMappingURL=main.a9fdf66dea64209019bb.bundle.js.map