import React from 'react';
import './Button.css';

const Button = (props) => {
  return (
    <a className="ctn" style={props.style}>
      Learn More
    </a>
  );
};

export default Button;
