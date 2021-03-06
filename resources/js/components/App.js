import React from 'react'
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Pages';
import Signup from './SignUp';

function App() {
    return (
        <Router>
            <Home/>
            <Switch>
                <Route path='/sign-up' exact component={Signup}></Route>
            </Switch>
        </Router>
        
    )
}

export default App

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}