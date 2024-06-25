import React from 'react'
import s from "./Input.module.css"
const Input = ({onChange, placeholder, value, type}) => {
  return (
    
    <input className={s.input} placeholder={placeholder} value={value} type={type} onChange={onChange}/>
  )
}

export default Input