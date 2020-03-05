(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Comment.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Comment.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Comment',
  props: ['body', 'author', 'date', 'replies'],
  data: function data() {
    return {
      replyText: 'No replies',
      showReplies: false
    };
  },
  mounted: function mounted() {
    this.replyText = this.replies.length > 0 ? this.replies.length == 1 ? 'one reply' : 'replies' : 'No replies';
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PostComment.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/PostComment.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Comment_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Comment.vue */ "./resources/js/components/Comment.vue");
/* harmony import */ var _saeris_vue_spinners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @saeris/vue-spinners */ "./node_modules/@saeris/vue-spinners/lib/@saeris/vue-spinners.common.js");
/* harmony import */ var _saeris_vue_spinners__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_saeris_vue_spinners__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'PostComment',
  props: ['url', 'postId'],
  components: {
    Comment: _Comment_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    BarLoader: _saeris_vue_spinners__WEBPACK_IMPORTED_MODULE_1__["BarLoader"]
  },
  data: function data() {
    return {
      nextPage: null,
      loading: false,
      body: ''
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])(['comments', 'errors'])),
  mounted: function mounted() {
    this.fetchComments(this.url);
  },
  created: function created() {
    this.loading = true;
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapActions"])(['fetchComments']), {
    loadMore: function loadMore() {
      var _this = this;

      axios.get(this.nextPage).then(function (resp) {
        console.log(resp);
        _this.comments = [].concat(_toConsumableArray(_this.comments), _toConsumableArray(resp.data.data));
        _this.nextPage = resp.data.next_page_url;
      })["catch"](function (err) {
        console.log(err);
      });
    },
    newComment: function newComment() {
      this.addComment({
        body: this.body,
        postId: this.postId
      });
    }
  }),
  watch: {
    comments: function comments() {
      this.loading = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Comment.vue?vue&type=template&id=54ded044&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Comment.vue?vue&type=template&id=54ded044& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "article",
    { staticClass: "bg-white py-3 px-4 rounded shadow-sm mb-6" },
    [
      _c("div", { staticClass: "flex items-end mb-2" }, [
        _c("div", { staticClass: "flex-1 text-gray-800 text-lg font-bold" }, [
          _c("span", { staticClass: "text-indigo-600 author" }, [
            _vm._v(_vm._s(_vm.author))
          ]),
          _vm._v(" says")
        ]),
        _vm._v(" "),
        _c("time", { staticClass: "ml-auto text-sm text-muted" }, [
          _vm._v(_vm._s(_vm.date))
        ])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "text-gray-700" }, [_vm._v(_vm._s(_vm.body))]),
      _vm._v(" "),
      _c("div", { staticClass: "flex mt-4" }, [
        _c(
          "a",
          {
            staticClass: "text-blue-600 hover:text-blue-800 ml-auto",
            attrs: { href: "#" },
            on: {
              click: function($event) {
                $event.preventDefault()
                _vm.showReplies = !_vm.showReplies
              }
            }
          },
          [
            this.replies.length > 0
              ? _c("span", [_vm._v(_vm._s(this.replies.length))])
              : _vm._e(),
            _vm._v("\n            " + _vm._s(_vm.replyText) + "\n    ")
          ]
        )
      ]),
      _vm._v(" "),
      _vm.showReplies
        ? _c(
            "div",
            { staticClass: "replies" },
            _vm._l(_vm.replies, function(reply) {
              return _c("div", [
                _vm._v(
                  "\n                " + _vm._s(reply.body) + "\n            "
                )
              ])
            }),
            0
          )
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PostComment.vue?vue&type=template&id=a82be5f8&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/PostComment.vue?vue&type=template&id=a82be5f8& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", [
    _c(
      "div",
      { staticClass: "loader-container flex justify-center" },
      [
        _c("bar-loader", {
          staticClass: "custom-class",
          attrs: {
            color: "#5a67d8",
            loading: _vm.loading,
            size: "150",
            sizeUnit: "px"
          }
        })
      ],
      1
    ),
    _vm._v(" "),
    !_vm.loading
      ? _c(
          "div",
          [
            _vm._l(_vm.comments, function(comment) {
              return _c("comment", {
                key: comment.id,
                attrs: {
                  author: comment.owner.name,
                  date: comment.created_at,
                  body: comment.body,
                  replies: comment.replies
                }
              })
            }),
            _vm._v(" "),
            _vm.nextPage
              ? _c(
                  "button",
                  { attrs: { type: "button" }, on: { click: _vm.loadMore } },
                  [_vm._v("Load more comments....")]
                )
              : _vm._e()
          ],
          2
        )
      : _vm._e(),
    _vm._v(" "),
    _c("hr", { staticClass: "py-2" }),
    _vm._v(" "),
    _c("section", [
      _c("h2", { staticClass: "font-bold text-lg mb-2" }, [
        _vm._v("New comment")
      ]),
      _vm._v(" "),
      _c("form", { attrs: { action: "post" } }, [
        _c("textarea", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.body,
              expression: "body"
            }
          ],
          staticClass: "w-full mb-1 p-4 outline-none",
          attrs: { cols: "60", rows: "4" },
          domProps: { value: _vm.body },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.body = $event.target.value
            }
          }
        }),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass:
              "block border rounded bg-indigo-600 text-indigo-100 py-3 px-4 outline-none font-bold trakcing-wide",
            attrs: { type: "button" },
            on: { click: _vm.newComment }
          },
          [_vm._v("Add comment")]
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Comment.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/Comment.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Comment_vue_vue_type_template_id_54ded044___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Comment.vue?vue&type=template&id=54ded044& */ "./resources/js/components/Comment.vue?vue&type=template&id=54ded044&");
/* harmony import */ var _Comment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Comment.vue?vue&type=script&lang=js& */ "./resources/js/components/Comment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Comment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Comment_vue_vue_type_template_id_54ded044___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Comment_vue_vue_type_template_id_54ded044___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Comment.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Comment.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/Comment.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Comment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Comment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Comment.vue?vue&type=template&id=54ded044&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Comment.vue?vue&type=template&id=54ded044& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_template_id_54ded044___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Comment.vue?vue&type=template&id=54ded044& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Comment.vue?vue&type=template&id=54ded044&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_template_id_54ded044___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_template_id_54ded044___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/PostComment.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/PostComment.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PostComment_vue_vue_type_template_id_a82be5f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PostComment.vue?vue&type=template&id=a82be5f8& */ "./resources/js/components/PostComment.vue?vue&type=template&id=a82be5f8&");
/* harmony import */ var _PostComment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PostComment.vue?vue&type=script&lang=js& */ "./resources/js/components/PostComment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PostComment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PostComment_vue_vue_type_template_id_a82be5f8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PostComment_vue_vue_type_template_id_a82be5f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/PostComment.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/PostComment.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/PostComment.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostComment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./PostComment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PostComment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostComment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/PostComment.vue?vue&type=template&id=a82be5f8&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/PostComment.vue?vue&type=template&id=a82be5f8& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostComment_vue_vue_type_template_id_a82be5f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./PostComment.vue?vue&type=template&id=a82be5f8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PostComment.vue?vue&type=template&id=a82be5f8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostComment_vue_vue_type_template_id_a82be5f8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostComment_vue_vue_type_template_id_a82be5f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);