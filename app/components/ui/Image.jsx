import React, { Component } from 'react';
import injectSheet from 'react-jss';

const style = {
  container: {
    position: 'relative',
    height: '50px',
    width: '50px'    
  },
  img: {
    height: 'inherit',
    width: 'inherit'
  },
  loading: {
    position: 'absolute',
    top: '35%',
    left: '35%',
    height: '30%',
    width: '30%'
  }
}

 class Image extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    this.refs.img.onload = () => {
      this.setState({ loading: false });
    }
  }

  componentWillUnmount() {
    this.refs.img.onload = null;
  }

  render() {
    const { classes, src, className = "" } = this.props;
    const { loading } = this.state;
    const hidden = { visibility: 'hidden ' }; 
    return (
      <div className={`${classes.container} ${className}`}>
        <img style={loading ? hidden : null} ref="img" className={classes.img} src={src} />
        <img style={loading ? null : hidden} className={classes.loading} src={"/assets/progress.gif"} />
      </div>
    )
  }
}

export default injectSheet(style)(Image);