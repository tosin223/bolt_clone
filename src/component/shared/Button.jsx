import React from 'react'

const Button = ({text, width='8rem', padding='0.5rem 0.7rem', background='white',  color='black', border='none', fontSize='14px', fontWeight='500', onClick, borderRadius='2rem'}) => {
  return (
   <button style={{
    width: width,
    padding: padding,
    color: color,
    background: background,
    border: border,
    borderRadius: borderRadius,
    fontSize: fontSize,
    fontWeight:fontWeight,
   }}
   onClick={onClick}>{text}</button>
  )
}

export default Button