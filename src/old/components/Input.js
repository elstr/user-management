import React from 'react'

const Input = props => {
  const {
    className,
    name,
    onChange,
    onKeyPress,
    placeholder,
    style,
    type,
    value,
  } = props;

  return(
    <input
      autoFocus
      className={className}
      name={name}
      onChange={onChange}
      onKeyPress={onKeyPress}
      placeholder={placeholder}
      style={style}
      type={type}
      value={value}
    />
  )
}
export default Input;
