import React from 'react';
import FontAwesome from 'react-fontawesome';
import './styles.css'
const Button = props => {
  const {
    onClick,
    className,
    style,
    label,
    icon
  } = props;

  return (
    <button className={className} style={style} onClick={onClick}>
    { icon ?   <FontAwesome style={{ marginRight: '10px' }} name={icon} /> : null }
      {label}
    </button>
  );
};

export default Button;
