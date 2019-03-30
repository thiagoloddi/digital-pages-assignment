import React from 'react';
import injectSheet from 'react-jss';

const style = {
  container: {
    marginTop: '10px',
    display: 'inline-block',
    border: '1px solid #DCDCDC',
    height: '35px',
    '& div + div': {
      borderLeft: '1px solid #DCDCDC'
    },
    '& > div': {
      color: '#00ACED',
      display: 'inline-block',
      height: '100%',
      minWidth: '35px',
      lineHeight: '35px',
      cursor: 'pointer',
      padding: '0 5px',
      '&:hover': {
        backgroundColor: '#f5f5f5'
      },
      '&.-selected': {
        color: 'white',
        backgroundColor: '#00ACED'
      }
    }
  }
  
};

const Paginator = ({ classes, current, last, onClick }) => {
  const location = current > 5 ? current <= last -5 ? 'center' : 'right' : 'left'; 
  const labels = {
    left: [1, 2, 3, 4, 5, 6, "...", last - 1, last],
    center: [1, 2, "...", current - 1, current, current + 1, "...", last - 1, last],
    right: [1, 2, "...", last - 5, last - 4, last - 3, last - 2, last - 1, last]
  }

  return (
    <div className={classes.container}>
      <div onClick={onClick}>{"<<"}</div>
      <div onClick={onClick}>{"<"}</div>
      {labels[location].map((label, i) => 
        <div key={i} className={label == current ? '-selected' : ''} onClick={onClick}>{label}</div>
      )}
      <div onClick={onClick}>{">"}</div>
      <div onClick={onClick}>{">>"}</div>
    </div>
  );
}

export default injectSheet(style)(Paginator);