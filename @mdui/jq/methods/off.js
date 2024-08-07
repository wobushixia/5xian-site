import { $ } from '../$.js';
import { remove } from '../shared/event.js';
import { isFunction, isObjectLike, returnFalse, eachObject, } from '../shared/helper.js';
import './each.js';
$.fn.off = function (types, 
// eslint-disable-next-line
selector, 
// eslint-disable-next-line
callback) {
    // types 是对象
    if (isObjectLike(types)) {
        eachObject(types, (type, fn) => {
            // this.off('click', undefined, function () {})
            // this.off('click', '.box', function () {})
            this.off(type, selector, fn);
        });
        return this;
    }
    // selector 不存在
    if (selector === false || isFunction(selector)) {
        callback = selector;
        selector = undefined;
        // this.off('click', undefined, function () {})
    }
    // callback 传入 `false`，相当于 `return false`
    if (callback === false) {
        callback = returnFalse;
    }
    return this.each(function () {
        remove(this, types, callback, selector);
    });
};
