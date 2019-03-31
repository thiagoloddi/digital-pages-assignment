import React from 'react';
import injectSheet from 'react-jss';
import propTypes from 'prop-types';

const style = {
  container: {
    '& > *': {
      display: 'block',
      width: '100%',
      textAlign: 'left'
    }
  },
  error: {
    marginTop: '5px',
    fontSize: '1rem',
    color: '#B00020'
  },
  input: {
    border: '1px solid black',
    padding: '5px'
  },
  inputError: {
    borderColor: '#B00020'
  },
}

const TextInput = ({ label, value, error, id, onChange, className, classes, type="text" }) => {
  return (
    <div className={` ${classes.container} ${className}`}>
      <label>{label}</label>
      <input className={`${classes.input} ${error ? classes.inputError : ''}`} id={id} value={value} onChange={onChange} type={type}/> 
      <div className={classes.error}>{error || ''}&nbsp;</div>
    </div>
  );
}

export default injectSheet(style)(TextInput);