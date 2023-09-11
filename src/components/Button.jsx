import { Link } from 'react-router-dom'
import React from 'react'

const Button = ({ styles }) => {
  return (
    <div>
      <Link
        to='/soon'
        className={`btnContact py-4 px-6 bg-realorange font-poppins font-medium text-[18px] text-white outline-none ${styles} rounded-[10px]`}
      >
        Contactanos
      </Link>
    </div>
  )
}

export default Button
