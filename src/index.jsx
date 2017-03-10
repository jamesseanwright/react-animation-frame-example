'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const Timer = require('./Timer.jsx');

ReactDOM.render(
	<Timer message="Let's Time Stuff!" durationMs={5000} />,
	document.querySelector('#app')
);