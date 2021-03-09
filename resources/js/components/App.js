import React from 'react'
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Dashboard from './Dashboard';
import Home from './Pages';
import Schemes from './Schemes';
import Signup from './SignUp';

function App() {
    return (
        <Router>
            <Home/>
            <Switch>
                <Route path='/sign-up' exact component={Signup}></Route>
                <Route path='/schemes' exact component={Schemes}></Route>
                <Route path='/dashboard1' exact component={Dashboard}></Route>
            </Switch>
        </Router>
        
    )
}

export default App

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}