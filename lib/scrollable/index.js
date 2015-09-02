/**
 * Module dependencies
 */

'use strict';

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _timers = require('timers');

var _raf = require('raf');

var _raf2 = _interopRequireDefault(_raf);

var _virtualDomDiff = require('virtual-dom/diff');

var _virtualDomDiff2 = _interopRequireDefault(_virtualDomDiff);

var _virtualDomPatch = require('virtual-dom/patch');

var _virtualDomPatch2 = _interopRequireDefault(_virtualDomPatch);

var _virtualDomCreateElement = require('virtual-dom/create-element');

var _virtualDomCreateElement2 = _interopRequireDefault(_virtualDomCreateElement);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _iscrollBuildIscrollLite = require('iscroll/build/iscroll-lite');

var _iscrollBuildIscrollLite2 = _interopRequireDefault(_iscrollBuildIscrollLite);

/**
 * Widget
 */

var Scrollable = (function () {
  function Scrollable(vnode) {
    var props = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    _classCallCheck(this, Scrollable);

    this.type = 'Widget';

    if (!(this instanceof Scrollable)) {
      return new Scrollable(vnode);
    }

    this.vnode = vnode;
    this.props = _Object$assign({}, props);
    this.scroller = null;
  }

  _createClass(Scrollable, [{
    key: 'init',
    value: function init() {
      var _this = this;

      var elem = (0, _virtualDomCreateElement2['default'])(this.vnode);

      var wrapper = document.createElement('div');
      wrapper.className = (0, _classnames2['default'])('amaze-Scrollable', this.props.className);
      // TODO: Make it better
      if (this.props.style) _Object$assign(wrapper.style, this.props.style);

      var scroller = document.createElement('div');
      scroller.className = 'amaze-Scrollable-scroller';

      scroller.appendChild(elem);
      wrapper.appendChild(scroller);

      var opts = _Object$assign({
        bounce: false
      }, this.props.iscroll || {});

      (0, _timers.setImmediate)(function () {
        (0, _raf2['default'])(function () {
          _this.scroller = new _iscrollBuildIscrollLite2['default'](wrapper, opts);
          (0, _raf2['default'])(function () {
            return _this.scroller.refresh();
          });
        });
      });

      return wrapper;
    }
  }, {
    key: 'update',
    value: function update(prev, elem) {
      var _this2 = this;

      var prevVnode = prev.vnode;
      var currVnode = this.vnode;

      var patches = (0, _virtualDomDiff2['default'])(prevVnode, currVnode);
      var rootNode = elem.childNodes[0];
      var newNode = (0, _virtualDomPatch2['default'])(rootNode, patches);

      if (newNode !== elem.childNodes[0]) {
        elem.replaceChild(newNode, elem.childNodes[0]);

        (0, _raf2['default'])(function () {
          return _this2.scroller.refresh();
        });
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() /*elem*/{
      this.scroller.destroy();
      this.scroller = null;
    }
  }]);

  return Scrollable;
})();

exports['default'] = Scrollable;
module.exports = exports['default'];
//# sourceMappingURL=index.js.map