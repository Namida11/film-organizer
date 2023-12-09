import React from 'react'
import './Button.css'

function Button({name,className}) {
  return (
    <>
      <button className= {`p-1 font-semibold text-base  border w-[180px] ${className}`} >
        {name}
      </button>
    </>
  )
}

export default Button