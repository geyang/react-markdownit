import React from 'react'
import ReactDOM from 'react-dom'

import Example from './example.js'

document.addEventListener('DOMContentLoaded', function () {
	ReactDOM.render(
		React.createElement(Example),
		document.querySelector('.container')
	)
}, false)
