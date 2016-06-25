import React, {PropTypes, Component} from 'react';
import Markdown from 'markdown-it';
import stripIndent from 'strip-indent';

var {string, object} = PropTypes;

export default class MarkdownIt extends Component {

	static propTypes = {
		container: string,
		stringIndent: string,
		options: object
	};

	static defaultProps = {
		/** the container should be <article> if it is the top-level  */
		container: 'div',
		stripIndent: false,
		options: {}
	};

	render() {
		var {Container} = this.props;
		return (<Container>{this.content()}</Container>);
	}

	componentWillUpdate(nextProps, nextState) {
		if (nextProps.options !== this.props.options) {
			this.md = new Markdown(nextProps.options)
		}
	}

	content() {
		if (this.props.source)
			return (<span dangerouslySetInnerHTML={{__html: this.renderMarkdown(this.props.source)}}/>);
			return React.Children.map(this.props.children, child => {
				if (typeof child === 'string') {
					return <span dangerouslySetInnerHTML={{__html: this.renderMarkdown(child)}}/>
				} else {
					return child
				}
			})
	}

	renderMarkdown(source) {
		if (!this.md) {
			this.md = new Markdown(this.props.options)
		}
		return this.md.render(stripIndent(source))
	}
}
