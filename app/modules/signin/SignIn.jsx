import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';

import TextInput from '../../components/ui/TextInput';
import Button from '../../components/ui/Button';
import { getCharacters } from '../../repositories/marvel.repository';
import { setCredentialsAction } from '../../actions/credentials.actions';
import Loading from '../../components/ui/Loading';

const style = {
  container: {
    textAlign: 'center'
  },
  heading: {
    marginTop: '50px'
  },
  form: {
    display: 'inline-block',
    maxWidth: "500px",
    width: "100%"
  },
  textInput: {
    marginTop: '10px'
  }
}

class SignIn extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      values: {
        private_key: "",
        public_key: ""
      },
      errors: {
        private_key: "",
        public_key: ""
      },
      loading: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    const { id, value } = e.target;
    this.setState({
      values: { ...this.state.values, [id]: value },
      errors: { ...this.state.errors, [id]: "" }
    });
  }

  async onSubmit(e) {
    e.preventDefault();

    const { private_key, public_key } = this.state.values;
    const errors = { ...this.state.errors };

    if(private_key && public_key) {
      await this.setState({ loading: true });
      try {
        await getCharacters(private_key, public_key);
        this.props.setCredentialsAction({
          privateKey: private_key,
          publicKey: public_key 
        });
        this.props.history.push('/personagens');
        
      } catch(e) {
        this.setState({
          errors: { 
            ...this.state.errors, 
            public_key: !e.response || e.response.status != 401 ? 
              "Erro desconhecido. Tente novamente mais tarde." :
              "Chaves de acesso inválidas."
            },
            loading: false
        });
      }
    } else {
      if(!public_key) errors.public_key = "Campo Obrigatório!";
      if(!private_key) errors.private_key = "Campo Obrigatório!";
      this.setState({ errors });
    }
  }

  render() {
    const { classes } = this.props;
    const { values, errors, loading } = this.state;

    return (
      <div className={classes.container}>
        <h1 className={classes.heading}>
          DADOS DE ACESSO
        </h1>
        <form onSubmit={this.onSubmit} className={classes.form}>
          <TextInput error={errors.private_key} value={values.private_key} id="private_key" onChange={this.onChange} className={classes.textInput} label="Private Key" />
          <TextInput error={errors.public_key} value={values.public_key} id="public_key" onChange={this.onChange} className={classes.textInput} label="Public Key" />
          <Button label="ACESSAR" type="submit" />
        </form>
        <Loading show={loading} />
      </div>
    )
  }
}

export default compose(
  withRouter,
  injectSheet(style),
  connect(null, { setCredentialsAction })
)(SignIn);