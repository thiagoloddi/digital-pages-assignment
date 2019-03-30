import React from 'react';
import injectSheet from 'react-jss';
import Image from '../../../components/ui/Image';


const style = {
  container: {
    height: '50px',
    '& > *': {
      display: 'inline-block',
      verticalAlign: 'middle'
    }
  },
  name: {
    maxWidth: 'calc(100% - 50px)',
    paddingLeft: '10px'
  }
};

const CharacterThumb = ({ name, classes, src }) => {
  return (
    <div className={classes.container}>
      <Image src={src}/>
      <div className={classes.name}>{name}</div>
    </div>
  )
}

export default injectSheet(style)(CharacterThumb);