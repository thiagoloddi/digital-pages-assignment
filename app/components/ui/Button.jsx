import React from 'react';
import injectSheet from 'react-jss';

const buttonStyle = {
  button: props => ({
      color: 'white',
      border: 'none',
      outline: 'none',
      padding: '15px 50px',
      cursor: 'pointer',
      backgroundColor: '#00ACED',
      fontWeight: 'bold',
      borderRadius: '10px',
      minWidth: '100px',
      fontSize: '20px',
      // float: props.right ? 'right' : ''
  })
};

const Button = ({ label, onClick, className, classes, type="button" }) => {
  return (
    <button onClick={onClick} className={`${classes.button} ${className}`} type={type}>
      {label}
    </button>
  );
}

export default injectSheet(buttonStyle)(Button);