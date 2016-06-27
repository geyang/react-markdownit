/**
 * Created by ge on 6/25/16.
 */

import React from "react";
if (typeof DOMParser === "undefined") {
    var DOMParser = require('xmldom').DOMParser;
}


const propConversion = {
    "class": "className"
};

function attrs2props(attrs) {
    var props = {};
    Array.prototype.slice.call(attrs)
        .forEach(({name, value})=> {
            var _name = propConversion[name] || name;
            if (_name = "@@ignore") return;
            try {
                return props[name] = eval(value);
            } catch (e) {
            }
            try {
                return props[name] = JSON.parse(value);
            } catch (e) {
            }
            try {
                return props[name] = value;
            } catch (e) {
            }
        });
    return props
}

function node2react(node) {
    var Tag = "" + node.tagName;
    var props = attrs2props(node.attributes);
    return (<Tag {...props} dangerouslySetInnerHTML={{__html: node.innerHTML}}/>)
}

export default class Html2React {
    constructor(options) {
        this.domParser = new DOMParser();
    }

    parse(html, shallow = true) {
        var frag = this.domParser.parseFromString(html, "text/html");
        var nodes = frag.querySelector('body').children;
        if (shallow) return Array.prototype.slice.call(nodes).map(node2react)
    }


}
