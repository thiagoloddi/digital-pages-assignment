import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import qs from 'query-string';

import Loading from '../../components/ui/Loading';
import Button from '../../components/ui/Button';
import { getCharacter, getComics } from '../../repositories/marvel.repository';
import CharacterCard from './components/CharacterCard';
import ComicCard from './components/ComicCard';

class CharacterDetails extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      character: null,
      magazines: []
    }

    this.onBackClick = this.onBackClick.bind(this);
  }

  async componentDidMount() {
    const { publicKey, privateKey } = this.props.credentials;
    const { id } = this.props.match.params;

    try {
      const charRes = await getCharacter(privateKey, publicKey, id)  
      const character = charRes.data.data.results[0];

      const comicsRes = await getComics(privateKey, publicKey, id);
      const comics = comicsRes.data.data.results;
      this.setState({ character, comics, loading: false });
    } catch(e) {
      console.log(e);
    }
  }

  onBackClick() {
    const { from } = qs.parse(this.props.location.search);
    this.props.history.push(`/personagens${from ? `?current=${from}` : ''}`);
  }
  

  render() {
    if(this.state.loading) return <Loading show={true} />

    const { name, description, thumbnail } = this.state.character;

    return (
      <div>
        <Button onClick={this.onBackClick} label="VOLTAR"/>
        <CharacterCard name={name} description={description} thumbnail={thumbnail} />
        <h2>FASCÍCULOS</h2>
        {this.state.comics.map(comic => <ComicCard key={comic.id} {...comic} />)}
      </div>
    )
  }
}

export default withRouter(CharacterDetails);