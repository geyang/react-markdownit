/**
 * Created by ge on 6/24/16.
 */
import React from "react";
import Markdown from "../index";

import Highlight from "react-highlight";
// import Badge from "../../react-doc-components/react-badge";
// import PropsTable from "../../react-doc-components/react-component-props-table";

import MarkdownExample from "../react-markdownit.example";
import MarkdownExampleSource from "!!raw!../react-markdownit.example";
import MarkdownAST from "!!react-docgen!../index";
// import HappySandwichMakerExample from "../HappySandwichMaker.example";
// import HappySandwichMakerSource from "!!raw!../HappySandwichMaker.example";
// const HappySandwichMakerAST = require("!!react-docgen!../HappySandwichMaker");

export default function Readme({}) {
    return (
        <Markdown>
            {`
            # React ES6 Component Template
            [![npm](https://img.shields.io/npm/v/npm.svg?maxAge=2592000)]()

            1. some stuff
            2. some other stuff

            ## Usage
            `}
            <Highlight>
                npm install @uber/react-color-scales
            </Highlight>
            {`
            ## \`HappySandwichMaker\` Component
            This component makes you a delicious Subway sandwich.
            `}
            <MarkdownExample/>{`
            ## Props
            `}
            {`
            ## Code
            `}
            <Highlight>{MarkdownExampleSource}</Highlight>
        </Markdown>
    )
}

//<PropsTable propMetaData={MarkdownAST.props}/>
