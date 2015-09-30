'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _markdownItDistMarkdownItJs = require('markdown-it/dist/markdown-it.js');

var _markdownItDistMarkdownItJs2 = _interopRequireDefault(_markdownItDistMarkdownItJs);

var _stripIndent = require('strip-indent');

var _stripIndent2 = _interopRequireDefault(_stripIndent);

var _default = (function (_React$Component) {
	_inherits(_default, _React$Component);

	function _default() {
		_classCallCheck(this, _default);

		_get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(_default, [{
		key: 'render',
		value: function render() {
			var Container = this.props.container;
			return _react2['default'].createElement(
				Container,
				null,
				this.content()
			);
		}
	}, {
		key: 'componentWillUpdate',
		value: function componentWillUpdate(nextProps, nextState) {
			if (nextProps.options !== this.props.options) {
				this.md = new _markdownItDistMarkdownItJs2['default'](nextProps.options);
			}
		}
	}, {
		key: 'content',
		value: function content() {
			var _this = this;

			if (this.props.source) {
				return _react2['default'].createElement('span', { dangerouslySetInnerHTML: { __html: this.renderMarkdown(this.props.source) } });
			} else {
				return _react2['default'].Children.map(this.props.children, function (child) {
					if (typeof child === 'string') {
						return _react2['default'].createElement('span', { dangerouslySetInnerHTML: { __html: _this.renderMarkdown(child) } });
					} else {
						return child;
					}
				});
			}
		}
	}, {
		key: 'renderMarkdown',
		value: function renderMarkdown(source) {
			if (!this.md) {
				this.md = new _markdownItDistMarkdownItJs2['default'](this.props.options);
			}
			return this.md.render((0, _stripIndent2['default'])(source));
		}
	}], [{
		key: 'defaultProps',
		value: {
			container: 'div',
			options: {}
		},
		enumerable: true
	}]);

	return _default;
})(_react2['default'].Component);

exports['default'] = _default;
module.exports = exports['default'];