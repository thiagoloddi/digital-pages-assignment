import React from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import NotFound from './components/ui/NotFound';
import AsyncComponent from './components/hocs/AsyncComponent';
import Private from './components/hocs/Private';

const signin = import(/* webpackChunkName: "signin" */ "./modules/signin/index");
const characters = import(/* webpackChunkName: "characters" */ "./modules/characters/index");

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={() => <AsyncComponent provider={signin} />} />
        <Route path="/personagens" component={() => <Private provider={characters} />} /> 
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
}