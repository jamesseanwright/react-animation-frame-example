'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const Timer = require('./Timer.jsx');

ReactDOM.render(
	<Timer message="Let's Time Stuff!" durationMs={2000} />,
	document.querySelector('#app')
);