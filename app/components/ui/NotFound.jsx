import React from 'react';
import injectSheet from 'react-jss';

const style = {
	container: {
        fontSize: '5rem',
        textAlign: 'center',
        marginTop: '40vh',
        fontWeight: 'bold',
        color: 'grey'
    }
}

const NotFound = ({ classes }) => {
  return (
    <div className={classes.container}>
      404 NOT FOUND
    </div>
  )
}

export default injectSheet(style)(NotFound);