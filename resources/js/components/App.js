import React from 'react'
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Agriculture from './Agriculture';
import ApplicableSchemePage from './ApplicableSchemePage';
import ChildCare from './Child Care';
import ChildDevelopment from './Child Development';
import Dashboard from './Dashboard';
import Education from './Education';
import Employment from './Employment';
import FinancialInclusion from './Financial Inclusion';
import GenericMedicine from './Generic Medicine';
import Health from './Health';
import Insurance from './Insurance';
import ModelVillage from './Model Village';
import MotherCare from './Mother Care';
import Home from './Pages';
import Pension from './Pension';
import RuralDevelopment from './Rural Development';
import RuralElectrification from './Rural Electrification';
import SchemePage from './SchemePage';
import Signup from './SignUp';
import SkillDevelopment from './Skill Development';
import UrbanDevelopment from './Urban Development';
import UrbanHousing from './Urban Housing';

function App() {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={Home}></Route>
                <Route path='/sign-up' exact component={Signup}></Route>
                <Route path='/dashboard1' exact component={Dashboard}></Route>
                <Route path='/scheme-page' exact component={SchemePage}></Route>
                <Route path='/applicable-scheme-page' exact component={ApplicableSchemePage}></Route>
                <Route path='/agriculture' exact component={Agriculture}></Route>
                <Route path='/child-care' exact component={ChildCare}></Route>
                <Route path='/child-development' exact component={ChildDevelopment}></Route>
                <Route path='/education' exact component={Education}></Route>
                <Route path='/employment' exact component={Employment}></Route>
                <Route path='/financial-inclusion' exact component={FinancialInclusion}></Route>
                <Route path='/generic-medicine' exact component={GenericMedicine}></Route>
                <Route path='/health' exact component={Health}></Route>
                <Route path='/insurance' exact component={Insurance}></Route>
                <Route path='/model-village' exact component={ModelVillage}></Route>
                <Route path='/mother-care' exact component={MotherCare}></Route>
                <Route path='/pension' exact component={Pension}></Route>
                <Route path='/rural-development' exact component={RuralDevelopment}></Route>
                <Route path='/rural-electrification' exact component={RuralElectrification}></Route>
                <Route path='/skill-development' exact component={SkillDevelopment}></Route>
                <Route path='/urban-development' exact component={UrbanDevelopment}></Route>
                <Route path='/urban-housing' exact component={UrbanHousing}></Route>
            </Switch>
        </Router>
        
    )
}

export default App

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}