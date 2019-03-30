import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Characters from "./Characters";
import CharacterDetails from './CharacterDetails';

const Router = (props) => (
  <Switch>
    <Route exact path="/personagens" component={() => <Characters {...props} />} />
    <Route exact path="/personagens/:id" component={() => <CharacterDetails {...props} />} />
  </Switch>
)

export default Router;
export const Component = Router;