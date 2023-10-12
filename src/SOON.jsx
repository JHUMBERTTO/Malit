import React, { useEffect, useState } from 'react'
import { logo, instagram } from './assets'
import DarkButton from './components/DarkButton'

const soon = () => {
  const [randomWord, setRandomWord] = useState('')

  useEffect(() => {
    const words = [
      'Seguimos trabajando para ofrecerte un sitio web cada vez mejor y más completo. Proximamente nuevas features',
      'Estamos implementando nuevas features en Malit. ¡Muy pronto podrás disfrutar de ellas!',
      'Estamos en pleno desarrollo y crecimiento. Pronto podrás disfrutar de nuevas secciones y contenido emocionante.',
      'Estamos afinando nuestra página web como un chef perfeccionando su receta secreta. Pronto estará para chuparse los dedos',
      'Estamos comprometidos en ofrecerte una página web actualizada y relevante. Estamos trabajando en nuevos contenidos que te sorprenderán.'
    ]
    const randomIndex = Math.floor(Math.random() * words.length)
    setRandomWord(words[randomIndex])
  }, [])

  return (
    <div className='flex flex-col h-screen justify-center items-center bg-slate-200 dark:bg-slate-900 dark:text-slate-200'>
      <div className='flex flex-col  items-center mt-4'>
        <img className='max-w-full max-h-full dark:invert' src={logo} alt='Logo' />

        <h1 className='text-3xl font-semibold mt-20 w-3/4 tracking-wide max-sm:text-xl text-center'>{randomWord}</h1>
      </div>
      <h3 className='text-xl mt-10'>¡Contáctanos!</h3>
      <div className='flex flex-col items-center   sm:flex-row sm:items-center'>
        <div className='flex pr-5 text-[40px]'>
          <DarkButton />
        </div>

        <a href='mailto:malitcontacto@gmail.com' className='btnContact py-4 px-6 bg-realorange font-poppins font-medium text-[18px] text-white outline-none rounded-full'>malitcontacto@gmail.com</a>
        <a href='https://www.instagram.com/malitservice/' className='relative group'>
          <img src={instagram} alt='Instagram' className='hover:scale-110 m-10 w-8 h-8 dark:invert' />
        </a>
      </div>
    </div>

  )
}

export default soon
