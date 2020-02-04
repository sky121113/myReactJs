import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import App1 from './app1'
import Timer from './Timer'

ReactDOM.render(<App/>, document.getElementById('abc'));
ReactDOM.render(<App1/>, document.getElementById('123'));
ReactDOM.render(<Timer/>, document.getElementById('timer'))