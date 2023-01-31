import React from 'react'

const Button = ({ styles}) => {
  return (
    <button type="button" className={`py-4 px-6 bg-orange-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}>
      Contactanos
    </button>
  )
}

export default Button