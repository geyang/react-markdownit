'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _markdownIt = require('markdown-it');

var _markdownIt2 = _interopRequireDefault(_markdownIt);

exports['default'] = _react2['default'].createClass({
  displayName: 'index',

  getDefaultProps: function getDefaultProps() {
    return {
      container: 'div',
      options: {}
    };
  },

  render: function render() {
    var Container = this.props.container;

    return _react2['default'].createElement(
      Container,
      null,
      this.content()
    );
  },

  componentWillUpdate: function componentWillUpdate(nextProps, nextState) {
    if (nextProps.options !== this.props.options) {
      this.md = new _markdownIt2['default'](nextProps.options);
    }
  },

  content: function content() {
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
  },

  renderMarkdown: function renderMarkdown(source) {
    if (!this.md) {
      this.md = new _markdownIt2['default'](this.props.options);
    }

    return this.md.render(source);
  }

});
module.exports = exports['default'];