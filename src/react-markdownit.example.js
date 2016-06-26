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
                <Markdown style={exampleStyle} stripIndent={true} tagName="td">{`
                    The protein we add into the sandwich.
                    For example:
                    - Teriyaki Chicken
                    - Phily-cheese Steak
                    - Tuna Salad
                    - Seafood Salad
                    - fake chicken patty (veg)
                    `}
                    <div>Nested component</div>
                    {`Test`}
                </Markdown>
            </div>
        )
    }
}


