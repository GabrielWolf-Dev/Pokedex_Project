import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Favorites from './components/Favorites';

export function Routes(){
    return(
        <>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/favorites" component={Favorites} />
                <Route component={() => <div>Page 404!</div>} />
            </Switch>
        </>
    );
}