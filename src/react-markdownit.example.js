import React from 'react'
import Markdown from './index'

const exampleStyle = {
    border: "1px solid #ccc",
    padding: "20px"
};
export default class MarkdownitExample extends React.Component {
    render() {
        return (
            <div>
                {/* Pass Markdown source to the `source` prop */}
                <Markdown style={exampleStyle} source="**Markdown is awesome!**"/>
                {/* Or pass it as children */}
                {/* You can nest React components, too */}
                <Markdown style={exampleStyle} stripIndent={true}>
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


