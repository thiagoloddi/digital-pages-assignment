import React from 'react';
import injectSheet from 'react-jss';

import Router from './Router';

const globals = {
	'@global': {
    html: {
        fontSize: '16+px',
        color: '#424242'
    },
    body: {
        margin: '50px 100px',
        fontFamily: 'Roboto'
    },
    '*': {
        boxSizing: 'border-box'
    }
  }
};

class App extends React.Component {

  render = () => <Router />;
  
}

export default injectSheet(globals)(App);