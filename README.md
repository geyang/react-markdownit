# react-markdown

A React component for rendering Markdown with
[markdown-it](https://github.com/markdown-it/markdown-it).

## Install

```
npm install --save react-markdown
```

## Usage

```jsx
var React = require('react')
var Markdown = require('react-markdown')

class Example extends React.Component {
	render() {
		return (
			<div>
				{/* Pass Markdown source to the `source` prop */}
				<Markdown source="**Markdown is awesome!**" />

				{/* Or pass it as children */}
				{/* You can nest React components, too */}
				<Markdown>
					{`
					## Header

					1. One
					2. Two
					`}

					<div>Nested component</div>

					{`Test`}
				</Markdown>
			</div>
		)
	}
}
```

## Props

### options

Type: `object`

Options for `markdown-it`.

### source

Type: `string`

Markdown source. You can also pass the source as children,
which allows you to mix React components and Markdown.

### container 

Element to use as container. Defaults to `div`.

## License

MIT
