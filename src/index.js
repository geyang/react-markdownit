import React, {PropTypes, Component, cloneElement} from 'react';
import Markdown from 'markdown-it';
import flatMap from './flatmap';
import Html2React from "./html2react";
import stripIndent from 'strip-indent';

var parser = new Html2React();
var {string, bool, object} = PropTypes;

export default class MarkdownIt extends Component {

    static propTypes = {
        /** the tagName of the container element */
        tagName: string,
        /** option to turn on string indent removal */
        stripIndent: bool,
        /** option to pass into the markdown-it constructor */
        options: object
    };

    static defaultProps = {
        /** the tagName should be <article> if it is the top-level  */
        tagName: 'div',
        stripIndent: false,
        options: {}
    };

    render() {
        var {source, tagName, children, stripIndent, options, ..._props} = this.props;
        var Container = tagName;
        if (source) return (
            <Container dangerouslySetInnerHTML={{__html: this.renderMarkdown(this.props.source)}} {..._props} />
        );
        if (!Array.isArray(children)) children = [children];
        var _children = Array.prototype.slice.call(children).map((child, index) => {
            if (typeof child === "string") return parser.parse(this.renderMarkdown(child), true, index);
            else {
                cloneElement(child, {key: "@@key:" + index}, child.children);
                return child;
            }
        });
        return (
            <Container {..._props}>
                {flatMap(_children)}
            </Container>
        );
    }

    componentWillUpdate(nextProps, nextState) {
        if (nextProps.options !== this.props.options) {
            this.md = new Markdown(nextProps.options)
        }
    }

    content() {
    }

    renderMarkdown(source) {
        if (!this.md) this.md = new Markdown(this.props.options);
        return this.md.render(stripIndent(source))
    }
}
