/**
 * Created by ge on 6/25/16.
 */

import React from "react";
import * as xmldom from "xmldom";
var DOMParser = xmldom.DOMParser;
var serializer = new xmldom.XMLSerializer;

const propConversion = {
    "class": "className",
    // xmldom node properties need to be escaped
    "_ownerElement": "@@ignore"
};

function attrs2props(attrs) {
    var props = {};
    if (!attrs) return props;
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
    if (node.nodeType === 3) { // is a text node. nodeType == 3 never gets old!
        return serializer.serializeToString(node);
    } else {
        var __html = Array.prototype.slice.call(node.childNodes).map(n=> serializer.serializeToString(n)).join('');
        return (<Tag {...props} dangerouslySetInnerHTML={{__html}}/>)
    }
}

export default class Html2React {
    constructor(options) {
        this.domParser = new DOMParser;
    }

    parse(html, shallow = true) {
        var frag = this.domParser.parseFromString(html, "text/html");
        var nodes = frag.childNodes;
        if (shallow) return Array.prototype.slice.call(nodes).map(node2react)
    }


}
