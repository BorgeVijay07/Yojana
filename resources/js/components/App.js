import React from 'react'
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Pages';

function App() {
    return (
        <Router>
            <Home/>
        </Router>
    )
}

export default App

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}