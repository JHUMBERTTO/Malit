import React from 'react'

const Button = ({ styles}) => {
  return (
    <a href="https://wa.me/5215620153736?text=Hola,%20Solicito%20información%20detallada%20sobre%20sus%20menús%20digitales,%20incluyendo,%20precios,%20opciones%20y%20disponibilidad.%20Agradezco%20su%20atención%20y%20espero%20su%20respuesta%20a%20la%20brevedad.%20" target="_blank">
      <button type="button" className={` btnContact py-4 px-6 bg-realorange font-poppins font-medium text-[18px] text-white outline-none ${styles} rounded-[10px]`}>
        Contactanos
      </button>
    </a>
  )
}
export default Button