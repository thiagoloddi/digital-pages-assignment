import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import injectSheet from 'react-jss';
import qs from 'query-string';

import { getCharacters } from '../../repositories/marvel.repository';
import Loading from '../../components/ui/Loading';
import CharactersList from '../../modules/characters/components/CharactersList';
import Paginator from './components/Paginator';

const style = {
  container: {
    textAlign: 'center'
  }
}

class Characters extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      characters: [],
      currentPage: 1,
      lastPage: 0
    }

    this.onRowClick = this.onRowClick.bind(this);
    this.onPaginatorClick = this.onPaginatorClick.bind(this);
  }

  async componentDidMount() {
    const { credentials } = this.props;
    const currentPage = qs.parse(this.props.location.search).current || 1; 

    try {
      const response = await getCharacters(credentials.privateKey, credentials.publicKey, (currentPage - 1) * 10);
      this.setState({
        characters: response.data.data.results,
        loading: false,
        lastPage: Math.ceil(response.data.data.total / 10),
        currentPage
      })
    } catch(e) {
      console.log(e);
    }
  }
  
  
  onRowClick(e) {
    this.props.history.push(`/personagens/${e.currentTarget.id}?from=${this.state.currentPage}`)
  }

  async onPaginatorClick(e) {
    const button = e.target.innerText;

    if(button == currentPage || button == '...') return; 

    let currentPage;

    switch(button) {
      case '<<': currentPage = 1; break;
      case '<': currentPage = this.state.currentPage - 1; break;
      case '>>': currentPage = this.state.lastPage; break;
      case '>': currentPage = this.state.currentPage + 1; break; 
      default: currentPage = button; break;
    }

    try {
      await this.setState({ loading: true });
      const { privateKey, publicKey } = this.props.credentials;
      const response = await getCharacters(privateKey, publicKey, (currentPage - 1) * 10);
      this.setState({
        loading: false,
        characters: response.data.data.results, 
        currentPage: +currentPage
      });
      this.props.history.push(`/personagens?current=${currentPage}`);
    } catch(e) {
      console.log(e);
    }

  }

  render() {
    const { classes } = this.props;
    const { characters, lastPage, currentPage } = this.state;
    return (
      <div className={classes.container}>
        <h1>PERSONAGENS</h1>
        <CharactersList onRowClick={this.onRowClick} characters={characters}/>
        <Paginator onClick={this.onPaginatorClick} last={lastPage} current={currentPage}/>
        <Loading show={this.state.loading} />
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default compose(
  withRouter,
  injectSheet(style),
  connect(mapStateToProps)
)(Characters);