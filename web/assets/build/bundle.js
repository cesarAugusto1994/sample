webpackJsonp([0,1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(46);
	__webpack_require__(47);
	__webpack_require__(48);
	__webpack_require__(49);
	module.exports = __webpack_require__(50);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by cesar on 10/12/16.
	 */
	
	var { Navbar, Icon, NavItem, Card, CardTitle, Col, Breadcrumb, MenuItem } = __webpack_require__(2);
	
	const Banner = React.createClass({
	    displayName: "Banner",
	
	
	    render: function () {
	        return React.createElement(
	            "div",
	            { id: "index-banner", className: "parallax-container" },
	            React.createElement(
	                "div",
	                { className: "section no-pad-bot" },
	                React.createElement(
	                    "div",
	                    { className: "container" },
	                    React.createElement("br", null),
	                    React.createElement("br", null),
	                    React.createElement(
	                        "h1",
	                        { className: "header center teal-text text-lighten-2" },
	                        "Temple"
	                    ),
	                    React.createElement(
	                        "div",
	                        { className: "row center" },
	                        React.createElement(
	                            "h5",
	                            { className: "header col s12 light" },
	                            "Bem vindo ao Temple!"
	                        )
	                    ),
	                    React.createElement(
	                        "div",
	                        { className: "row center" },
	                        React.createElement(
	                            "a",
	                            { href: "/categoria/",
	                                className: "btn-large waves-effect waves-light teal lighten-1" },
	                            "Registre-se"
	                        )
	                    ),
	                    React.createElement("br", null),
	                    React.createElement("br", null)
	                )
	            ),
	            React.createElement(
	                "div",
	                { className: "parallax" },
	                React.createElement("img", { src: "http://www.pptbackgroundstemplates.com/backgrounds/violin-instrument-ppt-backgrounds-powerpoint.jpg", alt: "Unsplashed background img 1" })
	            )
	        );
	    }
	});
	
	const Container = React.createClass({
	    displayName: "Container",
	
	
	    getInitialState: function () {
	        return { data: [] };
	    },
	
	    load: function () {
	
	        $.get('/api/colecoes', function (result) {
	            this.setState({ data: result });
	        }.bind(this));
	    },
	
	    componentDidMount: function () {
	        this.load();
	    },
	
	    render: function () {
	        return React.createElement(
	            "div",
	            { className: "container" },
	            React.createElement(
	                "div",
	                { className: "section" },
	                React.createElement(
	                    "div",
	                    { className: "row" },
	                    React.createElement(
	                        "div",
	                        { className: "col s12 m12" },
	                        React.createElement(
	                            "h2",
	                            { className: "center brown-text" },
	                            "Cole\xE7\xF5es"
	                        )
	                    ),
	                    this.state.data.map(function (colecao) {
	                        var href = '/colecao/' + colecao.nome.toLowerCase();
	                        return React.createElement(
	                            "a",
	                            { href: href, className: "black-text", key: colecao.id },
	                            React.createElement(
	                                "div",
	                                { className: "col s12 m4" },
	                                React.createElement(
	                                    "div",
	                                    { className: "icon-block" },
	                                    React.createElement(
	                                        "h2",
	                                        { className: "center brown-text" },
	                                        React.createElement(
	                                            "i",
	                                            { className: "material-icons" },
	                                            "play_circle_outline"
	                                        )
	                                    ),
	                                    React.createElement(
	                                        "h5",
	                                        { className: "center" },
	                                        colecao.nome
	                                    ),
	                                    React.createElement(
	                                        "p",
	                                        { className: "light" },
	                                        colecao.descricao
	                                    )
	                                )
	                            )
	                        );
	                    })
	                )
	            )
	        );
	    }
	
	});
	
	const Paralax = React.createClass({
	    displayName: "Paralax",
	
	
	    render: function () {
	        return React.createElement(
	            "div",
	            { className: "parallax-container valign-wrapper" },
	            React.createElement(
	                "div",
	                { className: "section no-pad-bot" },
	                React.createElement(
	                    "div",
	                    { className: "container" },
	                    React.createElement(
	                        "div",
	                        { className: "row center" },
	                        React.createElement(
	                            "h5",
	                            { className: "header col s12 light" },
	                            "A modern responsive front-end framework based on Material Design"
	                        )
	                    )
	                )
	            ),
	            React.createElement(
	                "div",
	                { className: "parallax" },
	                React.createElement("img", { src: "http://materializecss.com/templates/parallax-template/background2.jpg", alt: "Unsplashed background img 2" })
	            )
	        );
	    }
	
	});
	
	const Container2 = React.createClass({
	    displayName: "Container2",
	
	
	    render: function () {
	        return React.createElement(
	            "div",
	            { className: "container" },
	            React.createElement(
	                "div",
	                { className: "section" },
	                React.createElement(
	                    "div",
	                    { className: "row" },
	                    React.createElement(
	                        "div",
	                        { className: "col s12 center" },
	                        React.createElement(
	                            "h3",
	                            null,
	                            React.createElement("i", { className: "mdi-content-send brown-text" })
	                        ),
	                        React.createElement(
	                            "h4",
	                            null,
	                            "Contact Us"
	                        ),
	                        React.createElement(
	                            "p",
	                            { className: "left-align light" },
	                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas eros justo, ullamcorper a sapien id, viverra ultrices eros. Morbi sem neque, posuere et pretium eget, bibendum sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu mattis nisl maximus sed. Nulla imperdiet semper molestie. Morbi massa odio, condimentum sed ipsum ac, gravida ultrices erat. Nullam eget dignissim mauris, non tristique erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;"
	                        )
	                    )
	                )
	            )
	        );
	    }
	
	});
	
	const Paralax2 = React.createClass({
	    displayName: "Paralax2",
	
	
	    render: function () {
	        return React.createElement(
	            "div",
	            { className: "parallax-container valign-wrapper" },
	            React.createElement(
	                "div",
	                { className: "section no-pad-bot" },
	                React.createElement(
	                    "div",
	                    { className: "container" },
	                    React.createElement(
	                        "div",
	                        { className: "row center" },
	                        React.createElement(
	                            "h5",
	                            { className: "header col s12 light" },
	                            "A modern responsive front-end framework based on Material Design"
	                        )
	                    )
	                )
	            ),
	            React.createElement(
	                "div",
	                { className: "parallax" },
	                React.createElement("img", { src: "http://materializecss.com/templates/parallax-template/background3.jpg", alt: "Unsplashed background img 3" })
	            )
	        );
	    }
	
	});
	
	const Render = React.createClass({
	    displayName: "Render",
	
	
	    render: function () {
	        return React.createElement(
	            "div",
	            null,
	            React.createElement(Banner, null),
	            React.createElement(Container, null),
	            React.createElement(Paralax, null),
	            React.createElement(Container2, null),
	            React.createElement(Paralax2, null)
	        );
	    }
	
	});
	
	if (document.getElementById('app')) {
	    ReactDOM.render(React.createElement(Render, null), document.getElementById('app'));
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Toast = exports.Tag = exports.Table = exports.Tabs = exports.Tab = exports.Slider = exports.Slide = exports.SideNav = exports.SearchForm = exports.Row = exports.ProgressBar = exports.Preloader = exports.PaginationButton = exports.Pagination = exports.OverlayTrigger = exports.Overlay = exports.NavItem = exports.Navbar = exports.Modal = exports.MenuItem = exports.MediaBox = exports.Input = exports.Icon = exports.Footer = exports.Dropdown = exports.CollectionItem = exports.Collection = exports.CollapsibleItem = exports.Collapsible = exports.Col = exports.Chip = exports.CardTitle = exports.CardPanel = exports.Card = exports.Button = exports.Breadcrumb = exports.Badge = undefined;
	
	var _Badge = __webpack_require__(3);
	
	var _Badge2 = _interopRequireDefault(_Badge);
	
	var _Breadcrumb = __webpack_require__(6);
	
	var _Breadcrumb2 = _interopRequireDefault(_Breadcrumb);
	
	var _Button = __webpack_require__(9);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Card = __webpack_require__(12);
	
	var _Card2 = _interopRequireDefault(_Card);
	
	var _CardPanel = __webpack_require__(13);
	
	var _CardPanel2 = _interopRequireDefault(_CardPanel);
	
	var _CardTitle = __webpack_require__(14);
	
	var _CardTitle2 = _interopRequireDefault(_CardTitle);
	
	var _Chip = __webpack_require__(15);
	
	var _Chip2 = _interopRequireDefault(_Chip);
	
	var _Col = __webpack_require__(7);
	
	var _Col2 = _interopRequireDefault(_Col);
	
	var _Collapsible = __webpack_require__(16);
	
	var _Collapsible2 = _interopRequireDefault(_Collapsible);
	
	var _CollapsibleItem = __webpack_require__(17);
	
	var _CollapsibleItem2 = _interopRequireDefault(_CollapsibleItem);
	
	var _Collection = __webpack_require__(18);
	
	var _Collection2 = _interopRequireDefault(_Collection);
	
	var _CollectionItem = __webpack_require__(19);
	
	var _CollectionItem2 = _interopRequireDefault(_CollectionItem);
	
	var _Dropdown = __webpack_require__(20);
	
	var _Dropdown2 = _interopRequireDefault(_Dropdown);
	
	var _Footer = __webpack_require__(21);
	
	var _Footer2 = _interopRequireDefault(_Footer);
	
	var _Icon = __webpack_require__(10);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _Input = __webpack_require__(23);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _MediaBox = __webpack_require__(24);
	
	var _MediaBox2 = _interopRequireDefault(_MediaBox);
	
	var _MenuItem = __webpack_require__(25);
	
	var _MenuItem2 = _interopRequireDefault(_MenuItem);
	
	var _Modal = __webpack_require__(26);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _Navbar = __webpack_require__(30);
	
	var _Navbar2 = _interopRequireDefault(_Navbar);
	
	var _NavItem = __webpack_require__(31);
	
	var _NavItem2 = _interopRequireDefault(_NavItem);
	
	var _Overlay = __webpack_require__(28);
	
	var _Overlay2 = _interopRequireDefault(_Overlay);
	
	var _OverlayTrigger = __webpack_require__(27);
	
	var _OverlayTrigger2 = _interopRequireDefault(_OverlayTrigger);
	
	var _Pagination = __webpack_require__(32);
	
	var _Pagination2 = _interopRequireDefault(_Pagination);
	
	var _PaginationButton = __webpack_require__(33);
	
	var _PaginationButton2 = _interopRequireDefault(_PaginationButton);
	
	var _Preloader = __webpack_require__(34);
	
	var _Preloader2 = _interopRequireDefault(_Preloader);
	
	var _ProgressBar = __webpack_require__(36);
	
	var _ProgressBar2 = _interopRequireDefault(_ProgressBar);
	
	var _Row = __webpack_require__(22);
	
	var _Row2 = _interopRequireDefault(_Row);
	
	var _SearchForm = __webpack_require__(37);
	
	var _SearchForm2 = _interopRequireDefault(_SearchForm);
	
	var _SideNav = __webpack_require__(38);
	
	var _SideNav2 = _interopRequireDefault(_SideNav);
	
	var _Slide = __webpack_require__(39);
	
	var _Slide2 = _interopRequireDefault(_Slide);
	
	var _Slider = __webpack_require__(40);
	
	var _Slider2 = _interopRequireDefault(_Slider);
	
	var _Tab = __webpack_require__(41);
	
	var _Tab2 = _interopRequireDefault(_Tab);
	
	var _Tabs = __webpack_require__(42);
	
	var _Tabs2 = _interopRequireDefault(_Tabs);
	
	var _Table = __webpack_require__(43);
	
	var _Table2 = _interopRequireDefault(_Table);
	
	var _Tag = __webpack_require__(44);
	
	var _Tag2 = _interopRequireDefault(_Tag);
	
	var _Toast = __webpack_require__(45);
	
	var _Toast2 = _interopRequireDefault(_Toast);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Badge = _Badge2.default;
	exports.Breadcrumb = _Breadcrumb2.default;
	exports.Button = _Button2.default;
	exports.Card = _Card2.default;
	exports.CardPanel = _CardPanel2.default;
	exports.CardTitle = _CardTitle2.default;
	exports.Chip = _Chip2.default;
	exports.Col = _Col2.default;
	exports.Collapsible = _Collapsible2.default;
	exports.CollapsibleItem = _CollapsibleItem2.default;
	exports.Collection = _Collection2.default;
	exports.CollectionItem = _CollectionItem2.default;
	exports.Dropdown = _Dropdown2.default;
	exports.Footer = _Footer2.default;
	exports.Icon = _Icon2.default;
	exports.Input = _Input2.default;
	exports.MediaBox = _MediaBox2.default;
	exports.MenuItem = _MenuItem2.default;
	exports.Modal = _Modal2.default;
	exports.Navbar = _Navbar2.default;
	exports.NavItem = _NavItem2.default;
	exports.Overlay = _Overlay2.default;
	exports.OverlayTrigger = _OverlayTrigger2.default;
	exports.Pagination = _Pagination2.default;
	exports.PaginationButton = _PaginationButton2.default;
	exports.Preloader = _Preloader2.default;
	exports.ProgressBar = _ProgressBar2.default;
	exports.Row = _Row2.default;
	exports.SearchForm = _SearchForm2.default;
	exports.SideNav = _SideNav2.default;
	exports.Slide = _Slide2.default;
	exports.Slider = _Slider2.default;
	exports.Tab = _Tab2.default;
	exports.Tabs = _Tabs2.default;
	exports.Table = _Table2.default;
	exports.Tag = _Tag2.default;
	exports.Toast = _Toast2.default;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var Badge = function Badge(_ref) {
	  var className = _ref.className,
	      newIcon = _ref.newIcon,
	      children = _ref.children,
	      props = _objectWithoutProperties(_ref, ['className', 'newIcon', 'children']);
	
	  var classes = {
	    badge: true,
	    'new': newIcon
	  };
	  return _react2.default.createElement(
	    'span',
	    _extends({}, props, { className: (0, _classnames2.default)(classes, className) }),
	    children
	  );
	};
	
	Badge.propTypes = {
	  children: _react.PropTypes.node,
	  className: _react.PropTypes.string,
	  /**
	   * Add the <b>new</b> class name
	   */
	  newIcon: _react.PropTypes.bool
	};
	
	exports.default = Badge;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Col = __webpack_require__(7);
	
	var _Col2 = _interopRequireDefault(_Col);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Breadcrumb = function Breadcrumb(_ref) {
	  var children = _ref.children;
	  return _react2.default.createElement(
	    'nav',
	    { className: 'row' },
	    _react2.default.createElement(
	      'div',
	      { className: 'nav-wrapper' },
	      _react2.default.createElement(
	        _Col2.default,
	        { s: 12 },
	        renderChildren(children)
	      )
	    )
	  );
	};
	
	var renderChildren = function renderChildren(children) {
	  return _react2.default.Children.map(children, function (item) {
	    return _react2.default.cloneElement(item, { className: 'breadcrumb' });
	  });
	};
	
	Breadcrumb.propTypes = {
	  children: _react2.default.PropTypes.node,
	  cols: _react2.default.PropTypes.number
	};
	
	exports.default = Breadcrumb;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _constants = __webpack_require__(8);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var Col = function Col(_ref) {
	  var children = _ref.children,
	      className = _ref.className,
	      _ref$node = _ref.node,
	      C = _ref$node === undefined ? 'div' : _ref$node,
	      s = _ref.s,
	      m = _ref.m,
	      l = _ref.l,
	      offset = _ref.offset,
	      other = _objectWithoutProperties(_ref, ['children', 'className', 'node', 's', 'm', 'l', 'offset']);
	
	  var sizes = { s: s, m: m, l: l };
	  var classes = { col: true };
	  _constants2.default.SIZES.forEach(function (size) {
	    classes[size + sizes[size]] = sizes[size];
	  });
	
	  if (offset) {
	    offset.split(' ').forEach(function (off) {
	      classes['offset-' + off] = true;
	    });
	  }
	
	  return _react2.default.createElement(
	    C,
	    _extends({}, other, { className: (0, _classnames2.default)(classes, className) }),
	    children
	  );
	};
	
	Col.propTypes = {
	  children: _react2.default.PropTypes.node,
	  className: _react2.default.PropTypes.string,
	  /**
	   * Columns for large size screens
	   */
	  l: _react2.default.PropTypes.number,
	  /**
	   * Columns for middle size screens
	   */
	  m: _react2.default.PropTypes.number,
	  /**
	   * The node to be used for the column
	   * @default div
	   */
	  node: _react2.default.PropTypes.node,
	  /**
	   * To offset, simply add s2 to the class where s signifies the screen
	   * class-prefix (s = small, m = medium, l = large) and the number after
	   * is the number of columns you want to offset by.
	   */
	  offset: _react2.default.PropTypes.string,
	  /**
	   * Columns for small size screens
	   */
	  s: _react2.default.PropTypes.number
	};
	
	exports.default = Col;

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  STYLES: ['large', 'floating', 'flat'],
	  WAVES: ['light', 'red', 'yellow', 'orange', 'purple', 'green', 'teal'],
	  SIZES: ['s', 'm', 'l'],
	  PLACEMENTS: ['left', 'center', 'right'],
	  SCALES: ['big', 'small'],
	  ICON_SIZES: ['tiny', 'small', 'medium', 'large']
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _constants = __webpack_require__(8);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Icon = __webpack_require__(10);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _idgen = __webpack_require__(11);
	
	var _idgen2 = _interopRequireDefault(_idgen);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Button = function (_Component) {
	  _inherits(Button, _Component);
	
	  function Button(props) {
	    _classCallCheck(this, Button);
	
	    var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));
	
	    _this.renderIcon = _this.renderIcon.bind(_this);
	    _this.renderFab = _this.renderFab.bind(_this);
	    return _this;
	  }
	
	  _createClass(Button, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          className = _props.className,
	          node = _props.node,
	          fab = _props.fab,
	          modal = _props.modal,
	          flat = _props.flat,
	          floating = _props.floating,
	          large = _props.large,
	          disabled = _props.disabled,
	          waves = _props.waves,
	          other = _objectWithoutProperties(_props, ['className', 'node', 'fab', 'modal', 'flat', 'floating', 'large', 'disabled', 'waves']);
	
	      var C = node;
	      var classes = {
	        btn: true,
	        disabled: disabled,
	        'waves-effect': waves
	      };
	
	      if (_constants2.default.WAVES.indexOf(waves) > -1) {
	        classes['waves-' + waves] = true;
	      }
	
	      var styles = { flat: flat, floating: floating, large: large };
	      _constants2.default.STYLES.forEach(function (style) {
	        classes['btn-' + style] = styles[style];
	      });
	
	      if (modal) {
	        classes['modal-action'] = true;
	        classes['modal-' + modal] = true;
	      }
	      if (fab) {
	        return this.renderFab((0, _classnames2.default)(classes, className));
	      } else {
	        return _react2.default.createElement(
	          C,
	          _extends({}, other, { onClick: this.props.onClick, className: (0, _classnames2.default)(classes, className) }),
	          this.renderIcon(),
	          this.props.children
	        );
	      }
	    }
	  }, {
	    key: 'renderFab',
	    value: function renderFab(className) {
	      return _react2.default.createElement(
	        'div',
	        { className: 'fixed-action-btn' },
	        _react2.default.createElement(
	          'a',
	          { className: className },
	          this.renderIcon()
	        ),
	        _react2.default.createElement(
	          'ul',
	          null,
	          _react2.default.Children.map(this.props.children, function (child) {
	            return _react2.default.createElement(
	              'li',
	              { key: (0, _idgen2.default)() },
	              child
	            );
	          })
	        )
	      );
	    }
	  }, {
	    key: 'renderIcon',
	    value: function renderIcon() {
	      var icon = this.props.icon;
	
	      if (!icon) return;
	
	      return _react2.default.createElement(
	        _Icon2.default,
	        null,
	        icon
	      );
	    }
	  }]);
	
	  return Button;
	}(_react.Component);
	
	Button.propTypes = {
	  children: _react.PropTypes.node,
	  className: _react.PropTypes.string,
	  disabled: _react.PropTypes.bool,
	  /**
	   * Enable other styles
	   */
	  flat: _react.PropTypes.bool,
	  large: _react.PropTypes.bool,
	  floating: _react.PropTypes.bool,
	  /**
	   * Fixed action button
	   * If enabled, any children button will be rendered as actions, remember to provide an icon.
	   * @default vertical
	   */
	  fab: _react.PropTypes.oneOf(['vertical', 'horizontal']),
	  /**
	   * The icon to display, if specified it will create a button with the material icon
	   */
	  icon: _react.PropTypes.string,
	  modal: _react.PropTypes.oneOf(['close', 'confirm']),
	  node: _react.PropTypes.node,
	  /**
	   * Tooltip to show when mouse hovered
	   */
	  onClick: _react.PropTypes.func,
	  tooltip: _react.PropTypes.string,
	  waves: _react.PropTypes.oneOf(_constants2.default.WAVES)
	};
	
	Button.defaultProps = {
	  node: 'button'
	};
	
	exports.default = Button;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _constants = __webpack_require__(8);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Icon = function (_Component) {
	  _inherits(Icon, _Component);
	
	  function Icon() {
	    _classCallCheck(this, Icon);
	
	    return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
	  }
	
	  _createClass(Icon, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var classes = {
	        'material-icons': true
	      };
	      _constants2.default.PLACEMENTS.forEach(function (p) {
	        classes[p] = _this2.props[p];
	      });
	
	      _constants2.default.ICON_SIZES.forEach(function (s) {
	        classes[s] = _this2.props[s];
	      });
	
	      return _react2.default.createElement(
	        'i',
	        { className: (0, _classnames2.default)(classes, this.props.className) },
	        this.props.children
	      );
	    }
	  }]);
	
	  return Icon;
	}(_react.Component);
	
	Icon.propTypes = {
	  className: _react.PropTypes.string,
	  children: _react.PropTypes.node,
	  tiny: _react.PropTypes.bool,
	  small: _react.PropTypes.bool,
	  medium: _react.PropTypes.bool,
	  large: _react.PropTypes.bool
	};
	
	exports.default = Icon;

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.resetID = resetID;
	exports.default = idgen;
	var id = 0;
	
	function resetID() {
	  id = 0;
	}
	
	function idgen() {
	  var oldId = id;
	  id += 1;
	  return oldId;
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Icon = __webpack_require__(10);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Card = function (_Component) {
	  _inherits(Card, _Component);
	
	  function Card(props) {
	    _classCallCheck(this, Card);
	
	    var _this = _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).call(this, props));
	
	    _this.renderTitle = _this.renderTitle.bind(_this);
	    return _this;
	  }
	
	  _createClass(Card, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          title = _props.title,
	          header = _props.header,
	          className = _props.className,
	          textClassName = _props.textClassName,
	          actions = _props.actions,
	          reveal = _props.reveal,
	          children = _props.children,
	          props = _objectWithoutProperties(_props, ['title', 'header', 'className', 'textClassName', 'actions', 'reveal', 'children']);
	
	      var classes = { card: true };
	      return _react2.default.createElement(
	        'div',
	        _extends({}, props, {
	          className: (0, _classnames2.default)(className, classes) }),
	        header,
	        _react2.default.createElement(
	          'div',
	          { className: (0, _classnames2.default)('card-content', textClassName) },
	          title ? this.renderTitle(title, reveal) : null,
	          _react2.default.createElement(
	            'div',
	            null,
	            children
	          )
	        ),
	        this.renderReveal(title, reveal),
	        actions ? this.renderAction(actions) : null
	      );
	    }
	  }, {
	    key: 'renderTitle',
	    value: function renderTitle(title, reveal) {
	      var revealIcon = null;
	      if (reveal) {
	        revealIcon = _react2.default.createElement(
	          _Icon2.default,
	          { right: true },
	          'more_vert'
	        );
	      }
	      var classes = {
	        'card-title': true,
	        'grey-text': true,
	        'text-darken-4': true,
	        'activator': reveal
	      };
	      return _react2.default.createElement(
	        'span',
	        { className: (0, _classnames2.default)(classes) },
	        title,
	        revealIcon
	      );
	    }
	  }, {
	    key: 'renderReveal',
	    value: function renderReveal(title, reveal) {
	      return _react2.default.createElement(
	        'div',
	        { className: 'card-reveal' },
	        _react2.default.createElement(
	          'span',
	          { className: 'card-title grey-text text-darken-4' },
	          title,
	          _react2.default.createElement(
	            _Icon2.default,
	            { right: true },
	            'close'
	          )
	        ),
	        reveal
	      );
	    }
	  }, {
	    key: 'renderAction',
	    value: function renderAction(actions) {
	      return _react2.default.createElement(
	        'div',
	        { className: 'card-action' },
	        actions
	      );
	    }
	  }]);
	
	  return Card;
	}(_react.Component);
	
	Card.propTypes = {
	  children: _react.PropTypes.node,
	  className: _react.PropTypes.string,
	  title: _react.PropTypes.string,
	  textClassName: _react.PropTypes.string,
	  reveal: _react.PropTypes.element,
	  header: _react.PropTypes.element,
	  // The buttons to be displayed at the action area
	  actions: _react.PropTypes.arrayOf(_react2.default.PropTypes.element)
	};
	
	exports.default = Card;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var CardPanel = function CardPanel(_ref) {
	  var className = _ref.className,
	      children = _ref.children,
	      props = _objectWithoutProperties(_ref, ['className', 'children']);
	
	  var classes = {
	    'card-panel': true
	  };
	
	  return _react2.default.createElement(
	    'div',
	    _extends({ className: (0, _classnames2.default)(classes, className) }, props),
	    children
	  );
	};
	
	CardPanel.propTypes = {
	  className: _react.PropTypes.string,
	  children: _react.PropTypes.node
	};
	
	exports.default = CardPanel;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _constants = __webpack_require__(8);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CardTitle = function (_Component) {
	  _inherits(CardTitle, _Component);
	
	  function CardTitle() {
	    _classCallCheck(this, CardTitle);
	
	    return _possibleConstructorReturn(this, (CardTitle.__proto__ || Object.getPrototypeOf(CardTitle)).apply(this, arguments));
	  }
	
	  _createClass(CardTitle, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          image = _props.image,
	          reveal = _props.reveal,
	          waves = _props.waves,
	          children = _props.children,
	          props = _objectWithoutProperties(_props, ['image', 'reveal', 'waves', 'children']);
	
	      var classes = {
	        'card-image': true
	      };
	      if (waves) {
	        classes['waves-effect'] = true;
	        classes['waves-' + waves] = true;
	        classes['waves-block'] = true;
	      }
	      var imgClasses = { 'activator': reveal };
	      var titleClasses = {
	        'card-title': true
	      };
	      return _react2.default.createElement(
	        'div',
	        _extends({ className: (0, _classnames2.default)(classes) }, props),
	        _react2.default.createElement('img', { className: (0, _classnames2.default)(imgClasses), src: image }),
	        _react2.default.createElement(
	          'span',
	          { className: (0, _classnames2.default)(titleClasses) },
	          children
	        )
	      );
	    }
	  }]);
	
	  return CardTitle;
	}(_react.Component);
	
	CardTitle.propTypes = {
	  children: _react.PropTypes.node,
	  // Whether the image serves as activator for the reveal
	  reveal: _react.PropTypes.bool,
	  // the waves effect
	  waves: _react.PropTypes.oneOf(_constants2.default.WAVES),
	  // The path to the image
	  image: _react.PropTypes.string.isRequired
	};
	
	exports.default = CardTitle;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Chip = function Chip(_ref) {
	  var children = _ref.children,
	      close = _ref.close;
	
	  return _react2.default.createElement(
	    'div',
	    { className: 'chip' },
	    children,
	    close ? _react2.default.createElement(
	      'i',
	      { className: 'material-icons' },
	      'close'
	    ) : null
	  );
	};
	
	Chip.propTypes = {
	  children: _react.PropTypes.node,
	  /**
	   * If show a close icon
	   * @default false
	   */
	  close: _react.PropTypes.bool
	};
	
	exports.default = Chip;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Collapsible = function (_Component) {
	  _inherits(Collapsible, _Component);
	
	  function Collapsible(props) {
	    _classCallCheck(this, Collapsible);
	
	    var _this = _possibleConstructorReturn(this, (Collapsible.__proto__ || Object.getPrototypeOf(Collapsible)).call(this, props));
	
	    _this.renderItem = _this.renderItem.bind(_this);
	    _this.handleSelect = _this.handleSelect.bind(_this);
	    _this.state = {
	      activeKey: _this.props.defaultActiveKey
	    };
	    return _this;
	  }
	
	  _createClass(Collapsible, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          accordion = _props.accordion,
	          popout = _props.popout,
	          className = _props.className,
	          children = _props.children,
	          props = _objectWithoutProperties(_props, ['accordion', 'popout', 'className', 'children']);
	
	      delete props.defaultActiveKey;
	
	      var classes = {
	        collapsible: true,
	        popout: popout
	      };
	      var collapsible = accordion ? 'accordion' : 'expandable';
	
	      return _react2.default.createElement(
	        'ul',
	        _extends({ className: (0, _classnames2.default)(className, classes) }, props, { 'data-collapsible': collapsible }),
	        _react2.default.Children.map(children, this.renderItem)
	      );
	    }
	  }, {
	    key: 'renderItem',
	    value: function renderItem(child, index) {
	      var props = {
	        key: child.key ? child.key : index,
	        ref: child.ref
	      };
	      if (this.props.accordion) {
	        props.expanded = child.props.eventKey === this.state.activeKey;
	        props.onSelect = this.handleSelect;
	      }
	
	      return _react2.default.cloneElement(child, props);
	    }
	  }, {
	    key: 'handleSelect',
	    value: function handleSelect(key) {
	      var onSelect = this.props.onSelect;
	
	
	      if (onSelect) {
	        onSelect(key);
	      }
	      if (this.state.activeKey === key) {
	        key = null;
	      }
	
	      this.setState({ activeKey: key });
	    }
	  }]);
	
	  return Collapsible;
	}(_react.Component);
	
	Collapsible.propTypes = {
	  /**
	   * There are two ways a collapsible can behave. It can either allow multiple sections to stay open,
	   * or it can only allow one section to stay open at a time, which is called an accordion.
	   * @default false
	   */
	  accordion: _react.PropTypes.bool,
	  className: _react.PropTypes.string,
	  children: _react.PropTypes.node,
	  /**
	   * Enable popout style
	   */
	  popout: _react.PropTypes.bool,
	  /**
	   * The default CollapsibleItem that should be expanded. This value should match the specified
	   * item's eventKey value. Ignored if accordion is false.
	   */
	  defaultActiveKey: _react.PropTypes.any,
	  onSelect: _react.PropTypes.func
	};
	
	Collapsible.defaultProps = {
	  accordion: false
	};
	
	exports.default = Collapsible;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Icon = __webpack_require__(10);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CollapsibleItem = function (_Component) {
	  _inherits(CollapsibleItem, _Component);
	
	  function CollapsibleItem(props) {
	    _classCallCheck(this, CollapsibleItem);
	
	    var _this = _possibleConstructorReturn(this, (CollapsibleItem.__proto__ || Object.getPrototypeOf(CollapsibleItem)).call(this, props));
	
	    _this.state = {
	      expanded: props.expanded
	    };
	
	    _this.handleClick = _this.handleClick.bind(_this);
	    _this.renderBody = _this.renderBody.bind(_this);
	    _this.renderIcon = _this.renderIcon.bind(_this);
	    return _this;
	  }
	
	  _createClass(CollapsibleItem, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          node = _props.node,
	          header = _props.header,
	          icon = _props.icon,
	          iconClassName = _props.iconClassName,
	          className = _props.className,
	          props = _objectWithoutProperties(_props, ['node', 'header', 'icon', 'iconClassName', 'className']);
	
	      delete props.expanded;
	      delete props.eventKey;
	
	      var C = node;
	      var liClasses = {
	        active: this.state.expanded
	      };
	      var headerClasses = {
	        'collapsible-header': true,
	        active: this.state.expanded
	      };
	
	      return _react2.default.createElement(
	        'li',
	        _extends({ className: (0, _classnames2.default)(liClasses, className) }, props),
	        _react2.default.createElement(
	          C,
	          { className: (0, _classnames2.default)(headerClasses), onClick: this.handleClick },
	          icon ? this.renderIcon(icon, iconClassName) : null,
	          header
	        ),
	        this.renderBody()
	      );
	    }
	  }, {
	    key: 'handleClick',
	    value: function handleClick() {
	      var _props2 = this.props,
	          onSelect = _props2.onSelect,
	          eventKey = _props2.eventKey;
	
	
	      if (onSelect) {
	        onSelect(eventKey);
	      } else {
	        this.setState({ expanded: !this.state.expanded });
	      }
	    }
	  }, {
	    key: 'renderBody',
	    value: function renderBody() {
	      var style = this.state.expanded ? { display: 'block' } : {};
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'collapsible-body', style: style },
	        this.props.children
	      );
	    }
	  }, {
	    key: 'renderIcon',
	    value: function renderIcon(icon, iconClassName) {
	      return _react2.default.createElement(
	        _Icon2.default,
	        { className: iconClassName },
	        icon
	      );
	    }
	  }]);
	
	  return CollapsibleItem;
	}(_react.Component);
	
	CollapsibleItem.propTypes = {
	  header: _react.PropTypes.string.isRequired,
	  icon: _react.PropTypes.string,
	  iconClassName: _react.PropTypes.string,
	  children: _react.PropTypes.node,
	  onSelect: _react.PropTypes.func,
	  /**
	   * If the item is expanded by default. Overridden if the parent Collapsible is an accordion.
	   * @default false
	   */
	  expanded: _react.PropTypes.bool,
	  /**
	   * The value to pass to the onSelect callback.
	   */
	  eventKey: _react.PropTypes.any,
	  className: _react.PropTypes.string,
	  /**
	   * The node type of the header
	   * @default a
	   */
	  node: _react.PropTypes.node
	};
	
	CollapsibleItem.defaultProps = {
	  expanded: false,
	  node: 'a'
	};
	
	exports.default = CollapsibleItem;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Collection = function (_Component) {
	  _inherits(Collection, _Component);
	
	  function Collection(props) {
	    _classCallCheck(this, Collection);
	
	    var _this = _possibleConstructorReturn(this, (Collection.__proto__ || Object.getPrototypeOf(Collection)).call(this, props));
	
	    _this.renderHeader = _this.renderHeader.bind(_this);
	    return _this;
	  }
	
	  _createClass(Collection, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          children = _props.children,
	          header = _props.header;
	
	
	      var classes = {
	        collection: true,
	        'with-header': !!header
	      };
	      var C = 'ul';
	      _react2.default.Children.forEach(children, function (child) {
	        if (child.props.href) {
	          C = 'div';
	        }
	      });
	      return _react2.default.createElement(
	        C,
	        { className: (0, _classnames2.default)(classes) },
	        header ? this.renderHeader() : null,
	        children
	      );
	    }
	  }, {
	    key: 'renderHeader',
	    value: function renderHeader() {
	      var header = void 0;
	      if (this.props.header) {
	        if (_react2.default.isValidElement(this.props.header)) {
	          header = this.props.header;
	        } else {
	          header = _react2.default.createElement(
	            'h4',
	            null,
	            this.props.header
	          );
	        }
	        return _react2.default.createElement(
	          'li',
	          { className: 'collection-header' },
	          header
	        );
	      }
	    }
	  }]);
	
	  return Collection;
	}(_react.Component);
	
	Collection.propTypes = {
	  children: _react.PropTypes.node,
	  header: _react.PropTypes.node
	};
	
	exports.default = Collection;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CollectionItem = function (_Component) {
	  _inherits(CollectionItem, _Component);
	
	  function CollectionItem() {
	    _classCallCheck(this, CollectionItem);
	
	    return _possibleConstructorReturn(this, (CollectionItem.__proto__ || Object.getPrototypeOf(CollectionItem)).apply(this, arguments));
	  }
	
	  _createClass(CollectionItem, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          active = _props.active,
	          children = _props.children,
	          className = _props.className,
	          other = _objectWithoutProperties(_props, ['active', 'children', 'className']);
	
	      var classes = {
	        'collection-item': true,
	        active: active
	      };
	
	      var C = this.props.href ? 'a' : 'li';
	
	      return _react2.default.createElement(
	        C,
	        _extends({}, other, { className: (0, _classnames2.default)(className, classes) }),
	        children
	      );
	    }
	  }]);
	
	  return CollectionItem;
	}(_react.Component);
	
	CollectionItem.propTypes = {
	  active: _react.PropTypes.bool,
	  children: _react.PropTypes.node,
	  className: _react.PropTypes.string,
	  href: _react.PropTypes.string
	};
	
	exports.default = CollectionItem;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _idgen = __webpack_require__(11);
	
	var _idgen2 = _interopRequireDefault(_idgen);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var classes = {
	  'dropdown-content': true
	};
	
	var Dropdown = function (_Component) {
	  _inherits(Dropdown, _Component);
	
	  function Dropdown(props) {
	    _classCallCheck(this, Dropdown);
	
	    var _this = _possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, props));
	
	    _this.renderTrigger = _this.renderTrigger.bind(_this);
	    return _this;
	  }
	
	  _createClass(Dropdown, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var options = this.props.options || {};
	
	      $(this._trigger).dropdown(options);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      $(this._trigger).off();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          children = _props.children,
	          className = _props.className,
	          props = _objectWithoutProperties(_props, ['children', 'className']);
	
	      this.idx = 'dropdown_' + (0, _idgen2.default)();
	      delete props.trigger;
	      delete props.options;
	
	      return _react2.default.createElement(
	        'span',
	        null,
	        this.renderTrigger(),
	        _react2.default.createElement(
	          'ul',
	          _extends({}, props, { className: (0, _classnames2.default)(classes, className), id: this.idx }),
	          children
	        )
	      );
	    }
	  }, {
	    key: 'renderTrigger',
	    value: function renderTrigger() {
	      var _this2 = this;
	
	      var trigger = this.props.trigger;
	
	
	      return _react2.default.cloneElement(trigger, {
	        ref: function ref(t) {
	          return _this2._trigger = '[data-activates=' + _this2.idx + ']';
	        },
	        className: 'dropdown-button',
	        'data-activates': this.idx
	      });
	    }
	  }]);
	
	  return Dropdown;
	}(_react.Component);
	
	Dropdown.propTypes = {
	  /**
	   * The node to trigger the dropdown
	   */
	  trigger: _react.PropTypes.node.isRequired,
	  children: _react.PropTypes.node,
	  className: _react.PropTypes.string,
	  /**
	   * Options hash for the dropdown
	   * more info: http://materializecss.com/dropdown.html#options
	   */
	  options: _react.PropTypes.shape({
	    inDuration: _react.PropTypes.number,
	    outDuration: _react.PropTypes.number,
	    constrain_width: _react.PropTypes.bool,
	    hover: _react.PropTypes.bool,
	    gutter: _react.PropTypes.number,
	    belowOrigin: _react.PropTypes.bool,
	    alignment: _react.PropTypes.oneOf(['left', 'right'])
	  })
	};
	
	exports.default = Dropdown;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Row = __webpack_require__(22);
	
	var _Row2 = _interopRequireDefault(_Row);
	
	var _Col = __webpack_require__(7);
	
	var _Col2 = _interopRequireDefault(_Col);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Footer = function (_Component) {
	  _inherits(Footer, _Component);
	
	  function Footer() {
	    _classCallCheck(this, Footer);
	
	    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
	  }
	
	  _createClass(Footer, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          children = _props.children,
	          className = _props.className,
	          copyrights = _props.copyrights,
	          links = _props.links,
	          moreLinks = _props.moreLinks,
	          props = _objectWithoutProperties(_props, ['children', 'className', 'copyrights', 'links', 'moreLinks']);
	
	      var classes = {
	        'page-footer': true
	      };
	
	      return _react2.default.createElement(
	        'footer',
	        _extends({ className: (0, _classnames2.default)(classes, className) }, props),
	        _react2.default.createElement(
	          'div',
	          { className: 'container' },
	          _react2.default.createElement(
	            _Row2.default,
	            null,
	            _react2.default.createElement(
	              _Col2.default,
	              { l: 6, s: 12 },
	              children
	            ),
	            _react2.default.createElement(
	              _Col2.default,
	              { l: 4, s: 12, offset: 'l2' },
	              links
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'footer-copyright' },
	          _react2.default.createElement(
	            'div',
	            { className: 'container' },
	            copyrights,
	            moreLinks
	          )
	        )
	      );
	    }
	  }]);
	
	  return Footer;
	}(_react.Component);
	
	Footer.propTypes = {
	  children: _react.PropTypes.node,
	  className: _react.PropTypes.string,
	  copyrights: _react.PropTypes.string,
	  links: _react.PropTypes.node,
	  moreLinks: _react.PropTypes.node
	};
	
	exports.default = Footer;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Row = function Row(_ref) {
	  var children = _ref.children,
	      className = _ref.className,
	      _ref$node = _ref.node,
	      Node = _ref$node === undefined ? 'div' : _ref$node;
	  return _react2.default.createElement(
	    Node,
	    { className: (0, _classnames2.default)('row', className) },
	    children
	  );
	};
	
	Row.propTypes = {
	  children: _react.PropTypes.node,
	  className: _react.PropTypes.string,
	  node: _react.PropTypes.node
	};
	
	exports.default = Row;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _idgen = __webpack_require__(11);
	
	var _idgen2 = _interopRequireDefault(_idgen);
	
	var _constants = __webpack_require__(8);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	var _Icon = __webpack_require__(10);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Input = function (_Component) {
	  _inherits(Input, _Component);
	
	  function Input(props) {
	    _classCallCheck(this, Input);
	
	    var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));
	
	    _this.state = {
	      value: props.defaultValue
	    };
	
	    _this._onChange = _this._onChange.bind(_this);
	    _this.getMultipleValues = _this.getMultipleValues.bind(_this);
	    _this.isSelect = _this.isSelect.bind(_this);
	    return _this;
	  }
	
	  _createClass(Input, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (this.isMaterialSelect()) {
	        $(this.selectInput).material_select();
	        $(this.selectInput).on('change', this._onChange);
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      if (this.isMaterialSelect() && !this.props.multiple) {
	        $(this.selectInput).material_select();
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var _this2 = this;
	
	      if (this.isMaterialSelect()) {
	        this.setState({
	          value: nextProps.defaultValue
	        }, function () {
	          return $(_this2.selectInput).material_select();
	        });
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (this.isMaterialSelect()) {
	        $(this.selectInput).off('change', this._onChange);
	      }
	    }
	  }, {
	    key: 'getMultipleValues',
	    value: function getMultipleValues(_ref) {
	      var options = _ref.options;
	
	      if (!options) {
	        return;
	      }
	
	      return Array.from(options).filter(function (opt) {
	        return opt.selected;
	      }).map(function (opt) {
	        return opt.value;
	      });
	    }
	  }, {
	    key: '_onChange',
	    value: function _onChange(e) {
	      var onChange = this.props.onChange;
	
	      var types = {
	        'checkbox': e.target.checked,
	        'select-multiple': this.getMultipleValues(e.target),
	        'default': e.target.value
	      };
	      var value = types[e.target.type] || types['default'];
	      if (onChange) {
	        onChange(e);
	      }
	
	      this.setState({ value: value });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;
	
	      var _props = this.props,
	          browserDefault = _props.browserDefault,
	          children = _props.children,
	          className = _props.className,
	          defaultValue = _props.defaultValue,
	          error = _props.error,
	          label = _props.label,
	          multiple = _props.multiple,
	          placeholder = _props.placeholder,
	          success = _props.success,
	          s = _props.s,
	          m = _props.m,
	          l = _props.l,
	          type = _props.type,
	          validate = _props.validate,
	          onLabel = _props.onLabel,
	          offLabel = _props.offLabel,
	          other = _objectWithoutProperties(_props, ['browserDefault', 'children', 'className', 'defaultValue', 'error', 'label', 'multiple', 'placeholder', 'success', 's', 'm', 'l', 'type', 'validate', 'onLabel', 'offLabel']);
	
	      var sizes = { s: s, m: m, l: l };
	      this._id = this._id || this.props.id || 'input_' + (0, _idgen2.default)();
	      var classes = {
	        col: true,
	        'input-field': type !== 'checkbox' && type !== 'radio'
	      };
	      _constants2.default.SIZES.forEach(function (size) {
	        classes[size + sizes[size]] = sizes[size];
	      });
	      var inputClasses = {
	        validate: validate,
	        invalid: error,
	        valid: success,
	        'browser-default': browserDefault && this.isSelect()
	      };
	      var C = void 0,
	          inputType = void 0;
	      switch (type) {
	        case 'textarea':
	          C = 'textarea';
	          inputClasses['materialize-textarea'] = true;
	          break;
	        case 'switch':
	          C = 'input';
	          inputType = 'checkbox';
	          break;
	        default:
	          C = 'input';
	          inputType = type || 'text';
	      }
	      var labelClasses = {
	        active: this.state.value || this.isSelect()
	      };
	
	      var htmlLabel = label || inputType === 'radio' ? _react2.default.createElement(
	        'label',
	        {
	          className: (0, _classnames2.default)(labelClasses),
	          'data-success': success,
	          'data-error': error,
	          htmlFor: this._id
	        },
	        label
	      ) : null;
	
	      if (this.isSelect()) {
	        var options = placeholder && !defaultValue ? [_react2.default.createElement(
	          'option',
	          { disabled: true, key: (0, _idgen2.default)() },
	          placeholder
	        )] : [];
	        options = options.concat(_react2.default.Children.map(children, function (child) {
	          return _react2.default.cloneElement(child, { 'key': child.props.value });
	        }));
	
	        return _react2.default.createElement(
	          'div',
	          { className: (0, _classnames2.default)(classes) },
	          htmlLabel,
	          _react2.default.createElement(
	            'select',
	            _extends({}, other, {
	              multiple: multiple,
	              id: this._id,
	              className: (0, _classnames2.default)(className, inputClasses),
	              ref: function ref(_ref2) {
	                return _this3.selectInput = _ref2;
	              },
	              defaultValue: defaultValue
	            }),
	            options
	          )
	        );
	      } else if (type === 'switch') {
	        return _react2.default.createElement(
	          'div',
	          { className: 'switch' },
	          _react2.default.createElement(
	            'label',
	            null,
	            offLabel || 'Off',
	            _react2.default.createElement('input', _extends({}, other, {
	              onChange: this._onChange,
	              type: 'checkbox'
	            })),
	            _react2.default.createElement('span', { className: 'lever' }),
	            onLabel || 'On'
	          )
	        );
	      } else {
	        var _defaultValue = inputType !== 'checkbox' && inputType !== 'radio' ? this.state.value : _defaultValue;
	
	        return _react2.default.createElement(
	          'div',
	          { className: (0, _classnames2.default)(classes) },
	          this.renderIcon(),
	          _react2.default.createElement(C, _extends({}, other, {
	            className: (0, _classnames2.default)(className, inputClasses),
	            defaultValue: _defaultValue,
	            id: this._id,
	            onChange: this._onChange,
	            placeholder: placeholder,
	            type: inputType
	          })),
	          htmlLabel
	        );
	      }
	    }
	  }, {
	    key: 'renderIcon',
	    value: function renderIcon() {
	      var _props2 = this.props,
	          icon = _props2.icon,
	          children = _props2.children;
	
	      if (icon) {
	        return _react2.default.createElement(
	          _Icon2.default,
	          { className: 'prefix' },
	          icon
	        );
	      } else {
	        var _icon = null;
	        if (_react2.default.Children.count(children) === 1) {
	          _icon = _react2.default.Children.only(children);
	        }
	        return _icon === null ? null : _react2.default.cloneElement(_icon, { className: 'prefix' });
	      }
	    }
	  }, {
	    key: 'isSelect',
	    value: function isSelect() {
	      return this.props.type === 'select';
	    }
	  }, {
	    key: 'isMaterialSelect',
	    value: function isMaterialSelect() {
	      return this.props.type === 'select' && !this.props.browserDefault && typeof $ !== 'undefined';
	    }
	  }]);
	
	  return Input;
	}(_react.Component);
	
	Input.propTypes = {
	  s: _react.PropTypes.number,
	  m: _react.PropTypes.number,
	  l: _react.PropTypes.number,
	  children: _react.PropTypes.node,
	  className: _react.PropTypes.string,
	  label: _react.PropTypes.node,
	  error: _react.PropTypes.string,
	  success: _react.PropTypes.string,
	  /**
	   * Input field type, e.g. select, checkbox, radio, text, tel, email
	   * @default 'text'
	   */
	  type: _react.PropTypes.string,
	  defaultValue: _react.PropTypes.any,
	  placeholder: _react.PropTypes.string,
	  id: _react.PropTypes.string,
	  icon: _react.PropTypes.string,
	  name: _react.PropTypes.string,
	  validate: _react.PropTypes.bool,
	  multiple: _react.PropTypes.bool,
	  browserDefault: _react.PropTypes.bool,
	  onLabel: _react.PropTypes.string,
	  offLabel: _react.PropTypes.string,
	  onChange: _react.PropTypes.func
	};
	
	Input.defaultProps = { type: 'text' };
	
	exports.default = Input;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var MediaBox = function MediaBox(_ref) {
	  var src = _ref.src,
	      className = _ref.className,
	      caption = _ref.caption,
	      props = _objectWithoutProperties(_ref, ['src', 'className', 'caption']);
	
	  return _react2.default.createElement('img', _extends({ className: (0, _classnames2.default)('materialboxed', className), 'data-caption': caption, src: src }, props));
	};
	
	MediaBox.propTypes = {
	  className: _react.PropTypes.string,
	  /**
	   * The caption shown below the image when opened
	   */
	  caption: _react.PropTypes.string,
	  /**
	   * The path to the image
	   */
	  src: _react.PropTypes.string.isRequired
	};
	
	exports.default = MediaBox;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// This should be used within any component that has a menu like interface
	var MenuItem = function (_Component) {
	  _inherits(MenuItem, _Component);
	
	  function MenuItem() {
	    _classCallCheck(this, MenuItem);
	
	    return _possibleConstructorReturn(this, (MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).apply(this, arguments));
	  }
	
	  _createClass(MenuItem, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          href = _props.href,
	          breadcrumbItem = _props.breadcrumbItem,
	          children = _props.children,
	          className = _props.className,
	          props = _objectWithoutProperties(_props, ['href', 'breadcrumbItem', 'children', 'className']);
	
	      var classes = {
	        breadcrumb: breadcrumbItem
	      };
	      return _react2.default.createElement(
	        'a',
	        _extends({ href: href }, props, { className: (0, _classnames2.default)(classes, className) }),
	        children
	      );
	    }
	  }]);
	
	  return MenuItem;
	}(_react.Component);
	
	MenuItem.propTypes = {
	  className: _react.PropTypes.string,
	  children: _react.PropTypes.node,
	  // internal
	  breadcrumbItem: _react.PropTypes.bool,
	  /**
	   * The link for the anchor
	   */
	  href: _react.PropTypes.string
	};
	
	exports.default = MenuItem;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Button = __webpack_require__(9);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _OverlayTrigger = __webpack_require__(27);
	
	var _OverlayTrigger2 = _interopRequireDefault(_OverlayTrigger);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Modal = function (_Component) {
	  _inherits(Modal, _Component);
	
	  function Modal() {
	    _classCallCheck(this, Modal);
	
	    return _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).apply(this, arguments));
	  }
	
	  _createClass(Modal, [{
	    key: 'renderOverlay',
	    value: function renderOverlay() {
	      var _props = this.props,
	          actions = _props.actions,
	          bottomSheet = _props.bottomSheet,
	          children = _props.children,
	          fixedFooter = _props.fixedFooter,
	          header = _props.header,
	          other = _objectWithoutProperties(_props, ['actions', 'bottomSheet', 'children', 'fixedFooter', 'header']);
	
	      delete other.modalOptions;
	      delete other.trigger;
	
	      var classes = (0, _classnames2.default)({
	        'modal': true,
	        'modal-fixed-footer': fixedFooter,
	        'bottom-sheet': bottomSheet
	      });
	
	      return _react2.default.createElement(
	        'div',
	        _extends({}, other, { className: classes }),
	        _react2.default.createElement(
	          'div',
	          { className: 'modal-content' },
	          _react2.default.createElement(
	            'h4',
	            null,
	            header
	          ),
	          children
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'modal-footer' },
	          _react2.default.Children.toArray(actions)
	        )
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props,
	          modalOptions = _props2.modalOptions,
	          trigger = _props2.trigger;
	
	
	      return _react2.default.createElement(
	        _OverlayTrigger2.default,
	        {
	          modalOptions: modalOptions,
	          overlay: this.renderOverlay()
	        },
	        trigger
	      );
	    }
	  }]);
	
	  return Modal;
	}(_react.Component);
	
	Modal.propTypes = {
	  modalOptions: _react.PropTypes.object,
	  /**
	  * BottomSheet styled modal
	  * @default false
	  */
	  bottomSheet: _react.PropTypes.bool,
	  /**
	   * Component children
	   */
	  children: _react.PropTypes.node,
	  /**
	  * FixedFooter styled modal
	  * @default false
	  */
	  fixedFooter: _react.PropTypes.bool,
	  /**
	   * Text to shown in the header of the modal
	   */
	  header: _react.PropTypes.string,
	  /**
	   * The button to trigger the display of the modal
	   */
	  trigger: _react.PropTypes.node.isRequired,
	  /**
	   * The buttons to show in the footer of the modal
	   */
	  actions: _react.PropTypes.node
	};
	
	Modal.defaultProps = {
	  fixedFooter: false,
	  bottomSheet: false,
	  actions: [_react2.default.createElement(
	    _Button2.default,
	    { waves: 'light', modal: 'close', flat: true },
	    'Close'
	  )]
	};
	
	exports.default = Modal;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Overlay2 = __webpack_require__(28);
	
	var _Overlay3 = _interopRequireDefault(_Overlay2);
	
	var _idgen = __webpack_require__(11);
	
	var _idgen2 = _interopRequireDefault(_idgen);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var OverlayTrigger = function (_Overlay) {
	  _inherits(OverlayTrigger, _Overlay);
	
	  function OverlayTrigger(props) {
	    _classCallCheck(this, OverlayTrigger);
	
	    var _this = _possibleConstructorReturn(this, (OverlayTrigger.__proto__ || Object.getPrototypeOf(OverlayTrigger)).call(this, props));
	
	    _this.showOverlay = _this.showOverlay.bind(_this);
	    _this.renderOverlay = _this.renderOverlay.bind(_this);
	    _this.overlayID = _this.props.overlay.props.id || 'overlay_' + (0, _idgen2.default)();
	    return _this;
	  }
	
	  _createClass(OverlayTrigger, [{
	    key: 'render',
	    value: function render() {
	      var child = _react2.default.Children.only(this.props.children);
	
	      return _react2.default.cloneElement(child, {
	        onClick: this.showOverlay
	      });
	    }
	  }, {
	    key: 'renderOverlay',
	    value: function renderOverlay() {
	      return _react2.default.cloneElement(this.props.overlay, {
	        id: this.overlayID
	      });
	    }
	  }, {
	    key: 'showOverlay',
	    value: function showOverlay() {
	      $('#' + this.overlayID).modal(this.props.modalOptions).modal('open');
	    }
	  }]);
	
	  return OverlayTrigger;
	}(_Overlay3.default);
	
	OverlayTrigger.propTypes = {
	  modalOptions: _react.PropTypes.object,
	  overlay: _react.PropTypes.node
	};
	
	exports.default = OverlayTrigger;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(29);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Overlay = function (_Component) {
	  _inherits(Overlay, _Component);
	
	  function Overlay() {
	    _classCallCheck(this, Overlay);
	
	    return _possibleConstructorReturn(this, (Overlay.__proto__ || Object.getPrototypeOf(Overlay)).apply(this, arguments));
	  }
	
	  _createClass(Overlay, [{
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      try {
	        this._unrenderOverlay();
	      } catch (e) {
	        this._overlayInstance = null;
	      }
	      if (this._overlayTarget) {
	        this.getContainerDOMNode().removeChild(this._overlayTarget);
	        this._overlayTarget = null;
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this._renderOverlay();
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this._renderOverlay();
	    }
	  }, {
	    key: '_mountOverlayTarget',
	    value: function _mountOverlayTarget() {
	      this._overlayTarget = document.createElement('div');
	      this.getContainerDOMNode().appendChild(this._overlayTarget);
	    }
	  }, {
	    key: '_renderOverlay',
	    value: function _renderOverlay() {
	      if (!this._overlayTarget) {
	        this._mountOverlayTarget();
	      }
	
	      // Save reference to help testing
	      this._overlayInstance = _reactDom2.default.unstable_renderSubtreeIntoContainer(this, this.renderOverlay(), this._overlayTarget);
	    }
	  }, {
	    key: '_unrenderOverlay',
	    value: function _unrenderOverlay() {
	      _react2.default.unmountComponentAtNode(this._overlayTarget);
	      this._overlayInstance = null;
	    }
	  }, {
	    key: 'getOverlayDOMNode',
	    value: function getOverlayDOMNode() {
	      if (!this.isMounted()) {
	        throw new Error('getOverlayDOMNode(): A component must be mounted to have a DOM node.');
	      }
	
	      return this._overlayInstance.getDOMNode();
	    }
	  }, {
	    key: 'getContainerDOMNode',
	    value: function getContainerDOMNode() {
	      return this.props.container.getDOMNode ? this.props.container.getDOMNode() : this.props.container;
	    }
	  }]);
	
	  return Overlay;
	}(_react.Component);
	
	Overlay.propTypes = {
	  container: _react.PropTypes.any.isRequired
	};
	
	Overlay.defaultProps = {
	  container: {
	    // Provide `getDOMNode` fn mocking a React component API. The `document.body`
	    // reference needs to be contained within this function so that it is not accessed
	    // in environments where it would not be defined, e.g. nodejs. Equally this is needed
	    // before the body is defined where `document.body === null`, this ensures
	    // `document.body` is only accessed after componentDidMount.
	    getDOMNode: function getDOMNode() {
	      return document.body;
	    }
	  }
	};
	
	exports.default = Overlay;

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Col = __webpack_require__(7);
	
	var _Col2 = _interopRequireDefault(_Col);
	
	var _Icon = __webpack_require__(10);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Navbar = function (_Component) {
	  _inherits(Navbar, _Component);
	
	  function Navbar(props) {
	    _classCallCheck(this, Navbar);
	
	    var _this = _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call(this, props));
	
	    _this.renderSideNav = _this.renderSideNav.bind(_this);
	    return _this;
	  }
	
	  _createClass(Navbar, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if ($ !== undefined) {
	        $('.button-collapse').sideNav();
	      }
	    }
	  }, {
	    key: 'renderSideNav',
	    value: function renderSideNav() {
	      return _react2.default.createElement(
	        'ul',
	        { id: 'nav-mobile', className: 'side-nav' },
	        this.props.children
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          brand = _props.brand,
	          className = _props.className,
	          left = _props.left,
	          right = _props.right,
	          other = _objectWithoutProperties(_props, ['brand', 'className', 'left', 'right']);
	
	      var classes = {
	        right: right,
	        'hide-on-med-and-down': true
	      };
	
	      var brandClasses = {
	        'brand-logo': true,
	        right: left
	      };
	
	      return _react2.default.createElement(
	        'nav',
	        _extends({}, other, { className: className }),
	        _react2.default.createElement(
	          'div',
	          { className: 'nav-wrapper' },
	          _react2.default.createElement(
	            _Col2.default,
	            { s: 12 },
	            _react2.default.createElement(
	              'a',
	              { href: '/', className: (0, _classnames2.default)(brandClasses) },
	              brand
	            ),
	            _react2.default.createElement(
	              'ul',
	              { className: (0, _classnames2.default)(className, classes) },
	              this.props.children
	            ),
	            this.renderSideNav(),
	            _react2.default.createElement(
	              'a',
	              { className: 'button-collapse', href: '#', 'data-activates': 'nav-mobile' },
	              _react2.default.createElement(
	                _Icon2.default,
	                null,
	                'view_headline'
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return Navbar;
	}(_react.Component);
	
	Navbar.propTypes = {
	  brand: _react.PropTypes.node,
	  children: _react.PropTypes.node,
	  className: _react.PropTypes.string,
	  left: _react.PropTypes.bool,
	  right: _react.PropTypes.bool
	};
	
	exports.default = Navbar;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var NavItem = function (_Component) {
	  _inherits(NavItem, _Component);
	
	  function NavItem() {
	    _classCallCheck(this, NavItem);
	
	    return _possibleConstructorReturn(this, (NavItem.__proto__ || Object.getPrototypeOf(NavItem)).apply(this, arguments));
	  }
	
	  _createClass(NavItem, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          divider = _props.divider,
	          href = _props.href,
	          children = _props.children,
	          props = _objectWithoutProperties(_props, ['divider', 'href', 'children']);
	
	      if (divider) {
	        return _react2.default.createElement('li', { className: 'divider' });
	      } else {
	        return _react2.default.createElement(
	          'li',
	          props,
	          _react2.default.createElement(
	            'a',
	            { href: href },
	            children
	          )
	        );
	      }
	    }
	  }]);
	
	  return NavItem;
	}(_react.Component);
	
	NavItem.propTypes = {
	  children: _react.PropTypes.node,
	  divider: _react.PropTypes.bool,
	  href: _react.PropTypes.string
	};
	
	exports.default = NavItem;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Icon = __webpack_require__(10);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _PaginationButton = __webpack_require__(33);
	
	var _PaginationButton2 = _interopRequireDefault(_PaginationButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Pagination = function (_Component) {
	  _inherits(Pagination, _Component);
	
	  function Pagination(props) {
	    _classCallCheck(this, Pagination);
	
	    var _this = _possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call(this, props));
	
	    _this.state = {
	      activePage: _this.props.activePage
	    };
	
	    _this.renderButtons = _this.renderButtons.bind(_this);
	    _this._onClick = _this._onClick.bind(_this);
	    return _this;
	  }
	
	  _createClass(Pagination, [{
	    key: '_onClick',
	    value: function _onClick(i) {
	      var _this2 = this;
	
	      var _props = this.props,
	          items = _props.items,
	          onSelect = _props.onSelect;
	
	
	      return function () {
	        if (i > 0 && i <= items) {
	          _this2.setState({ activePage: i });
	          if (typeof onSelect === 'function') {
	            _this2.props.onSelect(i);
	          }
	        }
	      };
	    }
	  }, {
	    key: 'renderButtons',
	    value: function renderButtons() {
	      var _props2 = this.props,
	          items = _props2.items,
	          children = _props2.children,
	          _props2$maxButtons = _props2.maxButtons,
	          maxButtons = _props2$maxButtons === undefined ? items : _props2$maxButtons;
	      var activePage = this.state.activePage;
	
	
	      if (children) return children;
	
	      var buttonsCount = Math.min(maxButtons, items);
	
	      var maxPos = items - buttonsCount;
	      var halfButtons = parseInt(buttonsCount / 2, 10);
	
	      var hiddenPagesBefore = activePage - halfButtons;
	      if (hiddenPagesBefore > maxPos) {
	        hiddenPagesBefore = maxPos + 1;
	      }
	
	      var from = Math.max(hiddenPagesBefore, 1);
	      var to = Math.min(items, from + maxButtons - 1);
	
	      var buttons = [_react2.default.createElement(
	        _PaginationButton2.default,
	        {
	          disabled: activePage === 1,
	          key: 'pagination-0',
	          onSelect: this._onClick(activePage - 1)
	        },
	        _react2.default.createElement(
	          _Icon2.default,
	          null,
	          'chevron_left'
	        )
	      )];
	
	      for (var i = from; i <= to; i++) {
	        buttons.push(_react2.default.createElement(
	          _PaginationButton2.default,
	          {
	            active: i === activePage,
	            key: 'pagination-' + i,
	            onSelect: this._onClick(i)
	          },
	          i
	        ));
	      }
	
	      buttons.push(_react2.default.createElement(
	        _PaginationButton2.default,
	        {
	          key: 'pagination-' + (items + 1),
	          disabled: activePage === items,
	          onSelect: this._onClick(activePage + 1)
	        },
	        _react2.default.createElement(
	          _Icon2.default,
	          null,
	          'chevron_right'
	        )
	      ));
	
	      return buttons;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'ul',
	        { className: (0, _classnames2.default)('pagination', this.props.className) },
	        this.renderButtons()
	      );
	    }
	  }]);
	
	  return Pagination;
	}(_react.Component);
	
	Pagination.propTypes = {
	  items: _react.PropTypes.any.isRequired,
	  activePage: _react.PropTypes.number,
	  children: _react.PropTypes.node,
	  className: _react.PropTypes.string,
	  maxButtons: _react.PropTypes.number,
	  onSelect: _react.PropTypes.func
	};
	
	Pagination.defaultProps = {
	  activePage: 1,
	  items: 10
	};
	
	exports.default = Pagination;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var PaginationButton = function PaginationButton(_ref) {
	  var _ref$active = _ref.active,
	      active = _ref$active === undefined ? false : _ref$active,
	      children = _ref.children,
	      className = _ref.className,
	      _ref$disabled = _ref.disabled,
	      disabled = _ref$disabled === undefined ? false : _ref$disabled,
	      _ref$href = _ref.href,
	      href = _ref$href === undefined ? '#' : _ref$href,
	      onSelect = _ref.onSelect;
	
	  var classes = {
	    'waves-effect': true,
	    disabled: disabled,
	    active: active
	  };
	
	  return _react2.default.createElement(
	    'li',
	    { className: (0, _classnames2.default)(classes, className), onClick: onSelect },
	    _react2.default.createElement(
	      'a',
	      { href: href },
	      children
	    )
	  );
	};
	
	PaginationButton.propTypes = {
	  active: _react.PropTypes.bool,
	  children: _react.PropTypes.node,
	  className: _react.PropTypes.string,
	  disabled: _react.PropTypes.bool,
	  href: _react.PropTypes.string,
	  onSelect: _react.PropTypes.func
	};
	
	exports.default = PaginationButton;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Spinner = __webpack_require__(35);
	
	var _Spinner2 = _interopRequireDefault(_Spinner);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var colors = ['blue', 'red', 'yellow', 'green'];
	
	var Preloader = function (_Component) {
	  _inherits(Preloader, _Component);
	
	  function Preloader() {
	    _classCallCheck(this, Preloader);
	
	    return _possibleConstructorReturn(this, (Preloader.__proto__ || Object.getPrototypeOf(Preloader)).apply(this, arguments));
	  }
	
	  _createClass(Preloader, [{
	    key: 'render',
	    value: function render() {
	      var classes = {
	        'preloader-wrapper': true,
	        active: this.props.active
	      };
	
	      if (this.props.size) {
	        classes[this.props.size] = true;
	      }
	
	      var spinners = void 0;
	      if (this.props.flashing) {
	        spinners = [];
	        colors.map(function (color) {
	          spinners.push(_react2.default.createElement(_Spinner2.default, { color: color, only: false, key: color }));
	        });
	      } else {
	        spinners = _react2.default.createElement(_Spinner2.default, { color: this.props.color });
	      }
	      return _react2.default.createElement(
	        'div',
	        { className: (0, _classnames2.default)(this.props.className, classes) },
	        spinners
	      );
	    }
	  }]);
	
	  return Preloader;
	}(_react.Component);
	
	Preloader.propTypes = {
	  className: _react.PropTypes.string,
	  /**
	   * The scale of the circle
	   * @default 'medium'
	   */
	  size: _react.PropTypes.oneOf(['big', 'small', 'medium']),
	  /**
	   * Whether to spin
	   * @default true
	   */
	  active: _react.PropTypes.bool,
	  /**
	   * The color of the circle, if not flashing
	   * @default 'blue'
	   */
	  color: _react.PropTypes.oneOf(['blue', 'red', 'yellow', 'green']),
	  /**
	   * Wheter to circle four different colors
	   * @default false
	   */
	  flashing: _react.PropTypes.bool
	};
	
	Preloader.defaultProps = {
	  active: true,
	  flashing: false,
	  color: 'blue'
	};
	
	exports.default = Preloader;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Spinner = function Spinner(_ref) {
	  var color = _ref.color,
	      only = _ref.only;
	
	  var spinnerClasses = {
	    'spinner-layer': true
	  };
	  if (only) {
	    spinnerClasses['spinner-' + color + '-only'] = true;
	  } else {
	    spinnerClasses['spinner-' + color] = true;
	  }
	  return _react2.default.createElement(
	    'div',
	    { className: (0, _classnames2.default)(spinnerClasses) },
	    _react2.default.createElement(
	      'div',
	      { className: 'circle-clipper left' },
	      _react2.default.createElement('div', { className: 'circle' })
	    ),
	    _react2.default.createElement(
	      'div',
	      { className: 'gap-patch' },
	      _react2.default.createElement('div', { className: 'circle' })
	    ),
	    _react2.default.createElement(
	      'div',
	      { className: 'circle-clipper right' },
	      _react2.default.createElement('div', { className: 'circle' })
	    )
	  );
	};
	
	Spinner.defaultProps = {
	  only: true
	};
	
	Spinner.propTypes = {
	  color: _react.PropTypes.string,
	  only: _react.PropTypes.bool
	};
	
	exports.default = Spinner;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ProgressBar = function ProgressBar(_ref) {
	  var progress = _ref.progress,
	      className = _ref.className;
	
	  var style = void 0;
	  var classes = {
	    indeterminate: progress === undefined,
	    determinate: !!progress
	  };
	  if (progress) {
	    style = {
	      width: progress + '%'
	    };
	  }
	
	  return _react2.default.createElement(
	    'div',
	    { className: (0, _classnames2.default)('progress lighten-5', className) },
	    _react2.default.createElement('div', { className: (0, _classnames2.default)(classes, className), style: style })
	  );
	};
	
	ProgressBar.propTypes = {
	  className: _react.PropTypes.string,
	  /**
	   * A number between 0..100 that indicates the current progress,
	   * when provided, a determinate bar with the progress is displayed,
	   * otherwise a indeterminate bar is shown
	   */
	  progress: _react.PropTypes.number
	};
	
	exports.default = ProgressBar;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Icon = __webpack_require__(10);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var SearchForm = function SearchForm() {
	  return _react2.default.createElement(
	    'form',
	    null,
	    _react2.default.createElement(
	      'div',
	      { className: 'input-field' },
	      _react2.default.createElement('input', { id: 'search', type: 'search', required: true }),
	      _react2.default.createElement(
	        'label',
	        { htmlFor: 'search' },
	        _react2.default.createElement(
	          _Icon2.default,
	          null,
	          'search'
	        )
	      ),
	      _react2.default.createElement(
	        _Icon2.default,
	        null,
	        'close'
	      )
	    )
	  );
	};
	
	exports.default = SearchForm;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Icon = __webpack_require__(10);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _idgen = __webpack_require__(11);
	
	var _idgen2 = _interopRequireDefault(_idgen);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var SideNav = function SideNav(_ref) {
	  var children = _ref.children,
	      _ref$id = _ref.id,
	      id = _ref$id === undefined ? ['sidenav_' + (0, _idgen2.default)()] : _ref$id;
	  return _react2.default.createElement(
	    'nav',
	    null,
	    _react2.default.createElement(
	      'ul',
	      { className: 'right hide-on-med-and-down' },
	      children
	    ),
	    _react2.default.createElement(
	      'ul',
	      { id: id, className: 'side-nav' },
	      children
	    ),
	    _react2.default.createElement(
	      'a',
	      { href: '#', 'data-activates': id, className: 'button-collapse' },
	      _react2.default.createElement(
	        _Icon2.default,
	        null,
	        'view_headline'
	      )
	    )
	  );
	};
	
	SideNav.propTypes = {
	  children: _react.PropTypes.node,
	  id: _react.PropTypes.string,
	  right: _react.PropTypes.bool,
	  left: _react.PropTypes.bool
	};
	
	exports.default = SideNav;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _constants = __webpack_require__(8);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Slide = function (_Component) {
	  _inherits(Slide, _Component);
	
	  function Slide(props) {
	    _classCallCheck(this, Slide);
	
	    var _this = _possibleConstructorReturn(this, (Slide.__proto__ || Object.getPrototypeOf(Slide)).call(this, props));
	
	    _this.renderCaption = _this.renderCaption.bind(_this);
	    return _this;
	  }
	
	  _createClass(Slide, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'li',
	        null,
	        _react2.default.createElement('img', { src: this.props.src }),
	        this.renderCaption()
	      );
	    }
	  }, {
	    key: 'renderCaption',
	    value: function renderCaption() {
	      var _props = this.props,
	          title = _props.title,
	          className = _props.className,
	          alignment = _props.alignment,
	          children = _props.children,
	          props = _objectWithoutProperties(_props, ['title', 'className', 'alignment', 'children']);
	
	      delete props.placement;
	
	      var classes = _defineProperty({
	        caption: true
	      }, alignment + '-align', alignment);
	
	      if (typeof title !== 'undefined' || typeof children !== 'undefined') {
	        return _react2.default.createElement(
	          'div',
	          _extends({ className: (0, _classnames2.default)(classes) }, props),
	          _react2.default.createElement(
	            'h3',
	            null,
	            title
	          ),
	          _react2.default.createElement(
	            'h5',
	            { className: className },
	            children
	          )
	        );
	      } else return null;
	    }
	  }]);
	
	  return Slide;
	}(_react.Component);
	
	Slide.propTypes = {
	  /**
	  * Aliment of the caption
	  * @default 'center'
	  */
	  alignment: _react.PropTypes.oneOf(_constants2.default.PLACEMENTS),
	  className: _react.PropTypes.string,
	  children: _react.PropTypes.node,
	  /**
	  * The tagline of the caption
	  */
	  title: _react.PropTypes.string,
	  /**
	   * The path of the background image
	   */
	  src: _react.PropTypes.string.isRequired
	};
	
	Slide.defaultProps = {
	  placement: 'center'
	};
	
	exports.default = Slide;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Slider = function (_Component) {
	  _inherits(Slider, _Component);
	
	  function Slider() {
	    _classCallCheck(this, Slider);
	
	    return _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).apply(this, arguments));
	  }
	
	  _createClass(Slider, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _props = this.props,
	          fullscreen = _props.fullscreen,
	          indicators = _props.indicators,
	          interval = _props.interval,
	          transition = _props.transition;
	
	
	      $('.slider').slider({
	        full_width: fullscreen,
	        indicators: indicators,
	        interval: interval,
	        transition: transition
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props,
	          fullscreen = _props2.fullscreen,
	          children = _props2.children,
	          className = _props2.className;
	
	      var classes = {
	        fullscreen: fullscreen,
	        slider: true
	      };
	
	      return _react2.default.createElement(
	        'div',
	        { className: (0, _classnames2.default)(classes, className) },
	        _react2.default.createElement(
	          'ul',
	          { className: 'slides' },
	          children
	        )
	      );
	    }
	  }]);
	
	  return Slider;
	}(_react.Component);
	
	Slider.propTypes = {
	  className: _react.PropTypes.string,
	  children: _react.PropTypes.node,
	  fullscreen: _react.PropTypes.bool,
	  /**
	  * Set to false to hide slide indicators
	  * @default true
	  */
	  indicators: _react.PropTypes.bool,
	  /**
	  * The interval between transitions in ms
	  * @default 6000
	  */
	  interval: _react.PropTypes.number,
	  /**
	  * The duration of the transation animation in ms
	  * @default 500
	  */
	  transition: _react.PropTypes.number
	};
	
	Slider.defaultProps = {
	  fullscreen: false,
	  indicators: true,
	  interval: 6000
	};
	
	exports.default = Slider;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// This is just a holder for the props and children for tab, thus
	// there is no logic here.
	var Tab = function (_React$Component) {
	  _inherits(Tab, _React$Component);
	
	  function Tab() {
	    _classCallCheck(this, Tab);
	
	    return _possibleConstructorReturn(this, (Tab.__proto__ || Object.getPrototypeOf(Tab)).apply(this, arguments));
	  }
	
	  _createClass(Tab, [{
	    key: 'render',
	    value: function render() {
	      return null;
	    }
	  }]);
	
	  return Tab;
	}(_react2.default.Component);
	
	Tab.propTypes = {
	  /**
	  * The title shown in the tabs list
	  */
	  title: _react2.default.PropTypes.node.isRequired,
	  /**
	  * The width of the Tab
	  */
	  tabWidth: _react2.default.PropTypes.number,
	  /**
	  * Pre-select the tab
	  * @default false
	  */
	  active: _react2.default.PropTypes.bool,
	  /**
	  * Disable the tab
	  * @default false
	  */
	  disabled: _react2.default.PropTypes.bool
	};
	
	Tab.defaultProps = {
	  active: false,
	  disabled: false
	};
	
	exports.default = Tab;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Row = __webpack_require__(22);
	
	var _Row2 = _interopRequireDefault(_Row);
	
	var _Col = __webpack_require__(7);
	
	var _Col2 = _interopRequireDefault(_Col);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Tabs = function (_Component) {
	  _inherits(Tabs, _Component);
	
	  function Tabs() {
	    _classCallCheck(this, Tabs);
	
	    return _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).apply(this, arguments));
	  }
	
	  _createClass(Tabs, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (typeof $ !== 'undefined') {
	        $(this.tabsEl).tabs();
	      }
	    }
	  }, {
	    key: '_onSelect',
	    value: function _onSelect(idx, e) {
	      var onChange = this.props.onChange;
	
	
	      if (onChange) onChange(idx, e);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var _props = this.props,
	          children = _props.children,
	          className = _props.className,
	          defaultValue = _props.defaultValue;
	
	
	      return _react2.default.createElement(
	        _Row2.default,
	        null,
	        _react2.default.createElement(
	          _Col2.default,
	          { s: 12 },
	          _react2.default.createElement(
	            'ul',
	            { className: (0, _classnames2.default)('tabs', className), ref: function ref(el) {
	                return _this2._tabsEl = el;
	              } },
	            _react2.default.Children.map(children, function (child, idx) {
	              var _classes;
	
	              var _child$props = child.props,
	                  active = _child$props.active,
	                  className = _child$props.className,
	                  disabled = _child$props.disabled,
	                  tabWidth = _child$props.tabWidth,
	                  title = _child$props.title;
	
	
	              var classes = (_classes = {}, _defineProperty(_classes, 's' + tabWidth, tabWidth), _defineProperty(_classes, 'tab', true), _defineProperty(_classes, 'disabled', disabled), _defineProperty(_classes, 'col', true), _classes);
	
	              return _react2.default.createElement(
	                'li',
	                { className: (0, _classnames2.default)(classes, className), key: idx },
	                _react2.default.createElement(
	                  'a',
	                  _extends({ href: '#tab_' + idx, className: active || defaultValue === idx ? 'active' : ''
	                  }, disabled ? {} : { onClick: _this2._onSelect.bind(_this2, idx) }),
	                  title
	                )
	              );
	            })
	          )
	        ),
	        children.map(function (child, idx) {
	          return _react2.default.createElement(
	            _Col2.default,
	            { id: 'tab_' + idx, s: 12, key: 'tab_' + idx },
	            child.props.children
	          );
	        })
	      );
	    }
	  }]);
	
	  return Tabs;
	}(_react.Component);
	
	Tabs.propTypes = {
	  children: _react.PropTypes.node.isRequired,
	  className: _react.PropTypes.string,
	  defaultValue: _react.PropTypes.string,
	  onChange: _react.PropTypes.func
	};
	
	exports.default = Tabs;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Table = function (_Component) {
	  _inherits(Table, _Component);
	
	  function Table() {
	    _classCallCheck(this, Table);
	
	    return _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).apply(this, arguments));
	  }
	
	  _createClass(Table, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          bordered = _props.bordered,
	          centered = _props.centered,
	          children = _props.children,
	          className = _props.className,
	          hoverable = _props.hoverable,
	          responsive = _props.responsive,
	          stripped = _props.stripped,
	          props = _objectWithoutProperties(_props, ['bordered', 'centered', 'children', 'className', 'hoverable', 'responsive', 'stripped']);
	
	      var classes = {
	        centered: centered,
	        highlight: hoverable,
	        'responsive-table': responsive,
	        stripped: stripped,
	        bordered: bordered
	      };
	
	      return _react2.default.createElement(
	        'table',
	        _extends({ className: (0, _classnames2.default)(classes, className) }, props),
	        children
	      );
	    }
	  }]);
	
	  return Table;
	}(_react.Component);
	
	Table.propTypes = {
	  className: _react.PropTypes.string,
	  children: _react.PropTypes.node,
	  /**
	  * Center align all the text in the table
	  * @default false
	  */
	  centered: _react.PropTypes.bool,
	  /**
	  * Highlight the row that's hovered
	  * @default false
	  */
	  hoverable: _react.PropTypes.bool,
	  /**
	  * Enable response to make the table horizontally scrollable on smaller screens
	  * @default false
	  */
	  responsive: _react.PropTypes.bool,
	  /**
	  * Stripped style
	  * @default false
	  */
	  stripped: _react.PropTypes.bool,
	  /**
	  * Add border to each row
	  * @default false
	  */
	  bordered: _react.PropTypes.bool
	};
	
	exports.default = Table;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Chip = __webpack_require__(15);
	
	var _Chip2 = _interopRequireDefault(_Chip);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Tag = function Tag(_ref) {
	  var children = _ref.children;
	  return _react2.default.createElement(
	    _Chip2.default,
	    { close: true },
	    children
	  );
	};
	
	Tag.propTypes = {
	  children: _react.PropTypes.node
	};
	
	exports.default = Tag;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Button = __webpack_require__(9);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Toast = function (_Component) {
	  _inherits(Toast, _Component);
	
	  function Toast(props) {
	    _classCallCheck(this, Toast);
	
	    var _this = _possibleConstructorReturn(this, (Toast.__proto__ || Object.getPrototypeOf(Toast)).call(this, props));
	
	    _this.onClick = _this.onClick.bind(_this);
	    return _this;
	  }
	
	  _createClass(Toast, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          children = _props.children,
	          rounded = _props.rounded;
	
	      var classes = { toast: true, rounded: rounded };
	
	      return _react2.default.createElement(
	        _Button2.default,
	        { onClick: this.onClick, className: (0, _classnames2.default)(classes) },
	        children
	      );
	    }
	  }, {
	    key: 'onClick',
	    value: function onClick() {
	      Materialize.toast(this.props.toast, 1000);
	    }
	  }]);
	
	  return Toast;
	}(_react.Component);
	
	Toast.propTypes = {
	  toast: _react.PropTypes.string.isRequired,
	  children: _react.PropTypes.node,
	  rounded: _react.PropTypes.bool
	};
	
	exports.default = Toast;

/***/ },
/* 46 */
/***/ function(module, exports) {

	/**
	 * Created by cesar on 13/12/16.
	 */
	
	const Container = React.createClass({
	    displayName: 'Container',
	
	
	    getInitialState: function () {
	        return { data: [] };
	    },
	
	    load: function () {
	
	        var slice = '';
	
	        if (this.props.colecao) {
	            slice = this.props.colecao;
	        }
	
	        $.get('/api/categorias/' + slice, function (result) {
	            this.setState({ data: result });
	        }.bind(this));
	    },
	
	    componentDidMount: function () {
	        this.load();
	    },
	
	    render: function () {
	
	        var view = React.createElement(
	            'div',
	            { id: 'index-banner', className: 'teal' },
	            React.createElement(
	                'div',
	                { className: 'section no-pad-bot' },
	                React.createElement(
	                    'div',
	                    { className: 'container' },
	                    React.createElement(
	                        'div',
	                        { className: 'section' },
	                        React.createElement(
	                            'div',
	                            { className: 'row' },
	                            React.createElement(
	                                'h3',
	                                { className: 'center white-text' },
	                                React.createElement(
	                                    'i',
	                                    { className: 'material-icons' },
	                                    'error_outline'
	                                ),
	                                ' Opss.. Nada Encontrado.'
	                            )
	                        )
	                    )
	                )
	            )
	        );
	
	        if (this.state.data.length !== 0) {
	            view = React.createElement(
	                'div',
	                { id: 'index-banner', className: 'teal' },
	                React.createElement(
	                    'div',
	                    { className: 'section no-pad-bot' },
	                    React.createElement(
	                        'div',
	                        { className: 'container' },
	                        React.createElement(
	                            'div',
	                            { className: 'section' },
	                            React.createElement(
	                                'div',
	                                { className: 'row' },
	                                this.state.data.map(function (categoria) {
	                                    var href = '/categoria/' + categoria.nome.toLowerCase().replace(/ /g, '-');
	                                    var img = '/assets/custom/img/' + categoria.imagem;
	                                    return React.createElement(
	                                        'div',
	                                        { className: 'col s12 m4', key: categoria.id },
	                                        React.createElement(
	                                            'div',
	                                            { className: 'card' },
	                                            React.createElement(
	                                                'a',
	                                                { href: href, className: 'black-text' },
	                                                React.createElement(
	                                                    'div',
	                                                    { className: 'card-image' },
	                                                    React.createElement('img', { src: img }),
	                                                    React.createElement(
	                                                        'span',
	                                                        { className: 'card-title' },
	                                                        categoria.nome
	                                                    )
	                                                ),
	                                                React.createElement(
	                                                    'div',
	                                                    { className: 'card-content black-text' },
	                                                    React.createElement(
	                                                        'p',
	                                                        null,
	                                                        categoria.nome
	                                                    )
	                                                )
	                                            )
	                                        )
	                                    );
	                                })
	                            )
	                        )
	                    )
	                )
	            );
	        }
	
	        return React.createElement(
	            'div',
	            null,
	            view
	        );
	    }
	});
	
	const Render = React.createClass({
	    displayName: 'Render',
	
	
	    render: function () {
	        return React.createElement(Container, { colecao: this.props.colecao });
	    }
	
	});
	
	if (document.getElementById('list')) {
	
	    var colecao = $("#list").data('colecao');
	
	    ReactDOM.render(React.createElement(Render, { colecao: colecao }), document.getElementById('list'));
	}

/***/ },
/* 47 */
/***/ function(module, exports) {

	/**
	 * Created by cesar on 13/12/16.
	 */
	
	const NavBar = React.createClass({
	    displayName: "NavBar",
	
	    render: function () {
	        return React.createElement(
	            "nav",
	            { className: "white", role: "navigation" },
	            React.createElement(
	                "div",
	                { className: "nav-wrapper container" },
	                React.createElement(
	                    "a",
	                    { id: "logo-container", href: "/", className: "brand-logo" },
	                    "Temple"
	                ),
	                React.createElement(
	                    "ul",
	                    { className: "right hide-on-med-and-down" },
	                    React.createElement(
	                        "li",
	                        null,
	                        React.createElement(
	                            "a",
	                            { href: "#" },
	                            "Entrar"
	                        )
	                    )
	                ),
	                React.createElement(
	                    "ul",
	                    { id: "nav-mobile", className: "side-nav" },
	                    React.createElement(
	                        "li",
	                        null,
	                        React.createElement(
	                            "a",
	                            { href: "#" },
	                            "Entrar"
	                        )
	                    )
	                ),
	                React.createElement(
	                    "a",
	                    { href: "#", "data-activates": "nav-mobile", className: "button-collapse" },
	                    React.createElement(
	                        "i",
	                        { className: "material-icons" },
	                        "menu"
	                    )
	                )
	            )
	        );
	    }
	});
	
	if (document.getElementById('layout')) {
	    ReactDOM.render(React.createElement(NavBar, null), document.getElementById('layout'));
	}

/***/ },
/* 48 */
/***/ function(module, exports) {

	/**
	 * Created by cesar on 14/12/16.
	 */
	
	const Footer = React.createClass({
	    displayName: "Footer",
	
	
	    render: function () {
	        return React.createElement(
	            "footer",
	            { className: "page-footer teal" },
	            React.createElement(
	                "div",
	                { className: "container" },
	                React.createElement(
	                    "div",
	                    { className: "row" },
	                    React.createElement(
	                        "div",
	                        { className: "col l6 s12" },
	                        React.createElement(
	                            "h5",
	                            { className: "white-text" },
	                            "Company Bio"
	                        ),
	                        React.createElement(
	                            "p",
	                            { className: "grey-text text-lighten-4" },
	                            "We are a team of college students working on this project like it's our full time job. Any amount would help support and continue development on this project and is greatly appreciated."
	                        )
	                    ),
	                    React.createElement(
	                        "div",
	                        { className: "col l3 s12" },
	                        React.createElement(
	                            "h5",
	                            { className: "white-text" },
	                            "Settings"
	                        ),
	                        React.createElement(
	                            "ul",
	                            null,
	                            React.createElement(
	                                "li",
	                                null,
	                                React.createElement(
	                                    "a",
	                                    { className: "white-text", href: "#!" },
	                                    "Link 1"
	                                )
	                            ),
	                            React.createElement(
	                                "li",
	                                null,
	                                React.createElement(
	                                    "a",
	                                    { className: "white-text", href: "#!" },
	                                    "Link 2"
	                                )
	                            ),
	                            React.createElement(
	                                "li",
	                                null,
	                                React.createElement(
	                                    "a",
	                                    { className: "white-text", href: "#!" },
	                                    "Link 3"
	                                )
	                            ),
	                            React.createElement(
	                                "li",
	                                null,
	                                React.createElement(
	                                    "a",
	                                    { className: "white-text", href: "#!" },
	                                    "Link 4"
	                                )
	                            )
	                        )
	                    ),
	                    React.createElement(
	                        "div",
	                        { className: "col l3 s12" },
	                        React.createElement(
	                            "h5",
	                            { className: "white-text" },
	                            "Connect"
	                        ),
	                        React.createElement(
	                            "ul",
	                            null,
	                            React.createElement(
	                                "li",
	                                null,
	                                React.createElement(
	                                    "a",
	                                    { className: "white-text", href: "#!" },
	                                    "Link 1"
	                                )
	                            ),
	                            React.createElement(
	                                "li",
	                                null,
	                                React.createElement(
	                                    "a",
	                                    { className: "white-text", href: "#!" },
	                                    "Link 2"
	                                )
	                            ),
	                            React.createElement(
	                                "li",
	                                null,
	                                React.createElement(
	                                    "a",
	                                    { className: "white-text", href: "#!" },
	                                    "Link 3"
	                                )
	                            ),
	                            React.createElement(
	                                "li",
	                                null,
	                                React.createElement(
	                                    "a",
	                                    { className: "white-text", href: "#!" },
	                                    "Link 4"
	                                )
	                            )
	                        )
	                    )
	                )
	            ),
	            React.createElement(
	                "div",
	                { className: "footer-copyright" },
	                React.createElement(
	                    "div",
	                    { className: "container" },
	                    "Made by ",
	                    React.createElement(
	                        "a",
	                        { className: "brown-text text-lighten-3",
	                            href: "http://materializecss.com" },
	                        "Materialize"
	                    )
	                )
	            )
	        );
	    }
	});
	
	if (document.getElementById('footer')) {
	    ReactDOM.render(React.createElement(Footer, null), document.getElementById('footer'));
	}

/***/ },
/* 49 */
/***/ function(module, exports) {

	/**
	 * Created by cesar on 13/12/16.
	 */
	
	const Container = React.createClass({
	    displayName: 'Container',
	
	
	    getInitialState: function () {
	        return { data: [] };
	    },
	
	    load: function () {
	
	        var slice = '';
	
	        if (this.props.categoria) {
	            slice = this.props.categoria;
	        }
	
	        $.get('/api/musicas/' + slice, function (result) {
	            this.setState({ data: result });
	        }.bind(this));
	    },
	
	    componentDidMount: function () {
	        this.load();
	    },
	
	    render: function () {
	        return React.createElement(
	            'div',
	            { id: 'index-banner', className: 'teal' },
	            React.createElement(
	                'div',
	                { className: 'section no-pad-bot' },
	                React.createElement(
	                    'div',
	                    { className: 'container' },
	                    React.createElement(
	                        'div',
	                        { className: 'section' },
	                        React.createElement(
	                            'div',
	                            { className: 'row' },
	                            this.state.data.map(function (musica) {
	                                var href = '/musica/' + musica.nome.toLowerCase().replace(/ /g, '-');
	                                var img = '/assets/custom/img/background1.jpg';
	                                return React.createElement(
	                                    'div',
	                                    { className: 'col s12 m4', key: musica.id },
	                                    React.createElement(
	                                        'div',
	                                        { className: 'card' },
	                                        React.createElement(
	                                            'a',
	                                            { href: href, className: 'black-text' },
	                                            React.createElement(
	                                                'div',
	                                                { className: 'card-image' },
	                                                React.createElement('img', { src: img }),
	                                                React.createElement(
	                                                    'span',
	                                                    {
	                                                        className: 'card-title' },
	                                                    musica.numero,
	                                                    ' ',
	                                                    musica.nome
	                                                )
	                                            ),
	                                            React.createElement(
	                                                'div',
	                                                { className: 'card-content black-text' },
	                                                React.createElement(
	                                                    'p',
	                                                    null,
	                                                    musica.numero,
	                                                    ' ',
	                                                    musica.nome
	                                                )
	                                            )
	                                        )
	                                    )
	                                );
	                            })
	                        )
	                    )
	                )
	            )
	        );
	    }
	});
	
	const Render = React.createClass({
	    displayName: 'Render',
	
	
	    render: function () {
	        return React.createElement(Container, { categoria: this.props.categoria });
	    }
	
	});
	
	if (document.getElementById('views')) {
	
	    var categoria = $("#views").data('categoria');
	
	    ReactDOM.render(React.createElement(Render, { categoria: categoria }), document.getElementById('views'));
	}

/***/ },
/* 50 */
/***/ function(module, exports) {

	/**
	 * Created by cesar on 13/12/16.
	 */
	
	const Anexos = React.createClass({
	    displayName: 'Anexos',
	
	
	    getInitialState: function () {
	        return { data: [] };
	    },
	
	    load: function () {
	
	        let slice = '';
	
	        if (this.props.musica) {
	            slice = this.props.musica;
	        }
	
	        $.get('/api/anexos/' + slice, function (result) {
	            this.setState({ data: result });
	        }.bind(this));
	    },
	
	    componentDidMount: function () {
	        this.load();
	    },
	
	    render: function () {
	        return React.createElement(
	            'div',
	            null,
	            this.state.data.map(function (anexo) {
	                return React.createElement(
	                    'div',
	                    { className: 'col s12 m4', key: anexo.id },
	                    React.createElement(
	                        'div',
	                        { className: 'card' },
	                        React.createElement(
	                            'div',
	                            { className: 'card-content black-text' },
	                            React.createElement(
	                                'h3',
	                                null,
	                                anexo.nome
	                            )
	                        )
	                    )
	                );
	            })
	        );
	    }
	});
	
	const Container = React.createClass({
	    displayName: 'Container',
	
	
	    getInitialState: function () {
	        return { data: [] };
	    },
	
	    load: function () {
	
	        var slice = '';
	
	        if (this.props.musica) {
	            slice = this.props.musica;
	        }
	
	        $.get('/api/musica/' + slice, function (result) {
	            this.setState({ data: result });
	        }.bind(this));
	    },
	
	    componentDidMount: function () {
	        this.load();
	    },
	
	    render: function () {
	        return React.createElement(
	            'div',
	            { id: 'index-banner', className: 'teal' },
	            React.createElement(
	                'div',
	                { className: 'section no-pad-bot' },
	                React.createElement(
	                    'div',
	                    { className: 'container' },
	                    React.createElement(
	                        'div',
	                        { className: 'section' },
	                        React.createElement(
	                            'div',
	                            { className: 'row' },
	                            React.createElement(
	                                'div',
	                                { className: 'card' },
	                                React.createElement(
	                                    'div',
	                                    { className: 'card-content black-text' },
	                                    React.createElement(
	                                        'h3',
	                                        null,
	                                        this.state.data.nome
	                                    )
	                                )
	                            ),
	                            React.createElement(Anexos, { musica: this.props.musica })
	                        )
	                    )
	                )
	            )
	        );
	    }
	});
	
	const Render = React.createClass({
	    displayName: 'Render',
	
	
	    render: function () {
	        return React.createElement(Container, { musica: this.props.musica });
	    }
	
	});
	
	if (document.getElementById('single')) {
	
	    var musica = $("#single").data('musica');
	
	    ReactDOM.render(React.createElement(Render, { musica: musica }), document.getElementById('single'));
	}

/***/ }
]);
//# sourceMappingURL=bundle.js.map