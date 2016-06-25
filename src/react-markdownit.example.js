import React from 'react'
import Markdown from './index'

export default class MarkdownitExample extends React.Component {
    render() {
        return (
            <div>
                {/* Pass Markdown source to the `source` prop */}
                <Markdown source="**Markdown is awesome!**"/>
                {/* Or pass it as children */}
                {/* You can nest React components, too */}
                <Markdown stripIndent={true}>
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


