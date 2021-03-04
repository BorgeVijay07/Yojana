import React from 'react'
import ReactDOM from 'react-dom';
import Nbar from './NewNav/Nbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import SignUp from './pages/SignUp';
import Schemes from './pages/Schemes';

function App() {
    return (
        <Router>
            <Nbar />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/schemes' exact component={Schemes} />
                <Route path='/contact-us' exact component={ContactUs} />
                <Route path='/sign-up' exact component={SignUp} />
            </Switch>
        </Router>
    )
}

export default App

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}