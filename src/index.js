import React, {PropTypes, Component} from 'react';
import Markdown from 'markdown-it';
import flatMap from "./flatmap";
import Html2React from "./html2react";
import stripIndent from 'strip-indent';

var parser = new Html2React();
var {string, bool, object} = PropTypes;

export default class MarkdownIt extends Component {

    static propTypes = {
        /** the tagName of the container element */
        tagName: string,
        /** option to turn on string indent removal */
        stringIndent: bool,
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
        var {source, tagName, children, ..._props} = this.props;
        var Container = tagName;
        if (source) return (
            <Container dangerouslySetInnerHTML={{__html: this.renderMarkdown(this.props.source)}}/>
        );
        else {
            var _children = Array.prototype.slice.call(children).map((child) => {
                if (typeof child === "string") return parser.parse(this.renderMarkdown(child));
                else return child;
            });
            return (
                <Container {..._props}>
                    {flatMap(_children)}
                </Container>
            );
        }
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
