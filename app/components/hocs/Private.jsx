import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

import AsyncComponent from './AsyncComponent';


class Private extends Component {
  
  async componentDidMount() {
    const { credentials } = this.props;
    if(!credentials) return this.props.history.push('/');
  }

  render() {
    return (
      <AsyncComponent credentials={this.props.credentials} provider={this.props.provider} />
    )
  }
}

const mapStateToProps = state => state;

export default compose(
  withRouter,
  connect(mapStateToProps)
)(Private);