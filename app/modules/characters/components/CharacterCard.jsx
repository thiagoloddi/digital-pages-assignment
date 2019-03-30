import React from 'react';
import Paper from '@material-ui/core/Paper';
import injectSheet from 'react-jss';
import Image from '../../../components/ui/Image';

const style = {
  paper: {
    marginTop: '20px',
    padding: '15px',
    '& > *': {
      display: 'inline-block'
    }
  },
  image: {
    height: '250px',
    width: '250px',
  },
  heading: {
    margin: 0
  },
  info: {
    verticalAlign: 'top',
    paddingLeft: '20px',
    width: 'calc(100% - 250px)'
  }
}

const CharacterCard = ({ name, thumbnail, description, classes }) => {
  return (
    <Paper className={classes.paper}>
      <Image className={classes.image} src={`${thumbnail.path}.${thumbnail.extension}`} />
      <div className={classes.info}>
        <h1 className={classes.heading}>{name}</h1>
        <p>{description}</p>
      </div>
    </Paper>
  )
}

export default injectSheet(style)(CharacterCard);