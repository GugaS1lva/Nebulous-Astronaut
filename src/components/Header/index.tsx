import { useState, useEffect } from "react"

import { RiSunFill, RiMoonFill } from "react-icons/ri";

const Header = () => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    if (localStorage.getItem('theme') === null) localStorage.setItem('theme', 'light')
  }, [])

  useEffect(() => {
    const html = document.querySelector('html')

    if (localStorage.getItem('theme') === 'dark') {
      html?.classList.remove('light')
      html?.classList.add('dark')
      setTheme('dark')
    } else {
      html?.classList.remove('dark')
      html?.classList.add('light')
      setTheme('light')
    }
  }, [theme])

  const handleThemeSwitch = () => {
    // [NO] LocalStorage Script
    {/*
    const html = document.querySelector('html')

    if (theme === 'light') {
      setTheme('dark')
      html?.classList.remove('light')
      html?.classList.add('dark')
    } else {
      html?.classList.remove('dark')
      html?.classList.add('light')
      setTheme('light')
    }
    */}

    // [YES] LocalStorage Script
    if (localStorage.getItem('theme') === 'light') {
      setTheme('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      setTheme('light')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <div className="flex items-center justify-between w-full h-20 p-4 sm:px-16 md:px-32">
      <div className={`w-14 h-[30px] bg-primary-700 dark:bg-zinc-200 text-primary-700 p-1 rounded-full flex items-center ${theme === 'light' ? 'justify-start' : 'justify-end'} hover:scale-105 transition-all`}>
        <button className="bg-zinc-200 dark:bg-primary-700 dark:text-white p-1 rounded-full" onClick={handleThemeSwitch}>
          {
            theme === 'light' ? <RiMoonFill /> : <RiSunFill />
          }
        </button>
      </div>

      <button className="w-20 h-10 rounded-lg bg-primary-700 text-white font-semibold hover:bg-primary-900 hover:scale-105 transition-all">Entrar</button>
    </div>
  )
}

export default Header