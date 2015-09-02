/**
 * Module dependencies
 */

import { setImmediate } from 'timers';
import raf from 'raf';
import diff from 'virtual-dom/diff';
import patch from 'virtual-dom/patch';
import createElement from 'virtual-dom/create-element';
import cx from 'classnames';
import IScroll from 'iscroll/build/iscroll-lite';

/**
 * Widget
 */

export default class Scrollable {
  type = 'Widget'

  constructor(vnode, props = {}) {
    if (!(this instanceof Scrollable)) {
      return new Scrollable(vnode);
    }

    this.vnode = vnode;
    this.props = Object.assign({}, props);
    this.scroller = null;
  }

  init() {
    const elem = createElement(this.vnode);

    const wrapper = document.createElement('div');
    wrapper.className = cx('amaze-Scrollable', this.props.className);
    // TODO: Make it better
    if (this.props.style) Object.assign(wrapper.style, this.props.style);

    const scroller = document.createElement('div');
    scroller.className = 'amaze-Scrollable-scroller';

    scroller.appendChild(elem);
    wrapper.appendChild(scroller);

    const opts = Object.assign({
      bounce: false,
    }, this.props.iscroll || {});

    setImmediate(() => {
      raf(() => {
        this.scroller = new IScroll(wrapper, opts);
        raf(() => this.scroller.refresh());
      });
    });

    return wrapper;
  }

  update(prev, elem) {
    const prevVnode = prev.vnode;
    const currVnode = this.vnode;

    const patches = diff(prevVnode, currVnode);
    const rootNode = elem.childNodes[0];
    const newNode = patch(rootNode, patches);

    if (newNode !== elem.childNodes[0]) {
      elem.replaceChild(newNode, elem.childNodes[0]);

      raf(() => this.scroller.refresh());
    }
  }

  destroy(/*elem*/) {
    this.scroller.destroy();
    this.scroller = null;
  }
}
