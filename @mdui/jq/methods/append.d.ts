import './after.js';
import './before.js';
import './clone.js';
import './each.js';
import './map.js';
import './remove.js';
import type { HTMLString, TypeOrArray } from '../shared/helper.js';
declare module '../shared/core.js' {
    interface JQ<T = HTMLElement> {
        /**
         * 在当前元素内部的后面插入指定内容。支持传入多个参数
         * @param contents HTML 字符串、DOM 元素、DOM 元素数组、或 JQ 对象
         * @returns 原始集合
         * @example
    ```js
    $('<p>I would like to say: </p>').append('<b>Hello</b>');
    // <p>I would like to say: <b>Hello</b></p>
    ```
         * @example
    ```js
    $('<p>I would like to say: </p>').append('<b>Hello</b>', '<b>World</b>');
    // <p>I would like to say: <b>Hello</b><b>World</b></p>
    ```
         */
        append(...contents: Array<HTMLString | TypeOrArray<Node> | JQ<Node>>): this;
        /**
         * 在当前元素内部的后面插入指定内容
         * @param callback
         * 一个返回 HTML 字符串、DOM 元素、DOM 元素数组、或 JQ 对象的回调函数
         *
         * 函数的第一个参数为元素的索引位置，第二个参数为元素的原始 HTML，`this` 指向当前元素
         * @returns 原始集合
         * @example
    ```js
    $('<p>Hello</p>').append(function (index, html) {
      return '<b>' + html + index + '</b>';
    });
    // <p>Hello<b>Hello0</b></p>
    ```
         */
        append(callback: (this: T, index: number, oldHTML: string) => HTMLString | TypeOrArray<Node> | JQ<Node>): this;
    }
}
