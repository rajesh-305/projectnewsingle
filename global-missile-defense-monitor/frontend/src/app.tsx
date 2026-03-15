import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Simulation from './pages/Simulation';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/simulation" component={Simulation} />
            </Switch>
        </Router>
    );
};

export default App;