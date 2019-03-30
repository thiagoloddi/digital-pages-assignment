import React from 'react';
import injectSheet from 'react-jss';
import Paper from '@material-ui/core/Paper';
import Image from '../../../components/ui/Image';

const style = {
  paper: {
    padding: '15px',
    marginTop: '20px',
    '& > *': {
      display: 'inline-block'
    }
  },
  image: {
    height: '200px',
    width: '200px'
  },
  info: {
    verticalAlign: 'top',
    paddingLeft: '20px',
    width: 'calc(100% - 200px)',
    fontSize: '18px',
    '& > *': {
      display: 'inline-block'
    }
  },
  right: {
    float: 'right'
  }
};

const ComicCard = ({ title, issueNumber, thumbnail, description, classes }) => {
  
  return (
    <Paper className={classes.paper}>
      <Image src={`${thumbnail.path}.${thumbnail.extension}`} className={classes.image}/>
      <div className={classes.info}>
        <span><strong>TÍTULO: </strong>{title}</span>
        <span className={classes.right}><strong>NÚMERO DE CAPA: </strong>{issueNumber}</span>
        <p>{description}</p>
      </div>
    </Paper>
  )
}

export default injectSheet(style)(ComicCard);
