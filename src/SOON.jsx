import React, { useEffect, useState } from 'react';
import { logo, malit } from './assets';

const SOON = () => {
  const [randomWord, setRandomWord] = useState('');

  useEffect(() => {
    const words = [
    "Estamos en constante evolución y mejorando nuestra página web para brindarte la mejor experiencia.",
    "Seguimos trabajando arduamente para ofrecerte un sitio web cada vez mejor y más completo.",
    "Estamos implementando nuevas características y mejoras en nuestra página web. ¡Muy pronto podrás disfrutar de ellas!",
    "Nos encontramos en proceso de actualización para ofrecerte un diseño más moderno y funcional. ¡Mantente atento!",
    "Estamos en pleno desarrollo y crecimiento. Pronto podrás disfrutar de nuevas secciones y contenido emocionante.",
    "Estamos trabajando en los detalles para ofrecerte una página web más intuitiva y fácil de navegar. ¡Gracias por tu paciencia!",
    "Nuestro equipo está dedicado a perfeccionar cada aspecto de nuestra página web para brindarte la mejor experiencia posible.",
    "Nos encontramos en fase de mejora constante. Tu opinión es importante para nosotros, así que no dudes en compartir tus sugerencias.",
    "Estamos comprometidos en ofrecerte una página web actualizada y relevante. Estamos trabajando en nuevos contenidos que te sorprenderán.",
    "La optimización de nuestra página web es una prioridad para nosotros. Pronto podrás disfrutar de una experiencia más rápida y fluida.",
    ];
    const randomIndex = Math.floor(Math.random() * words.length);
    setRandomWord(words[randomIndex]);
  }, []);
  
  return (
<div class="flex flex-col h-screen justify-center items-center">
  <div className="flex flex-col items-center mt-4">
    <img className="max-w-full max-h-full " src={logo} alt="Logo"></img>
    <h1 className="text-xl mt-10">{randomWord}</h1>
  </div>
  <h3 className="text-xl mt-10">¡Contactanos!</h3>
  <a href="mailto:malitcontacto@gmail.com" className="btnContact py-4 px-6 bg-realorange font-poppins font-medium text-[18px] text-white outline-none rounded-full mt-3">malitcontacto@gmail.com</a>
</div>

  )
}

export default SOON
