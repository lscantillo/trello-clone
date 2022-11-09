import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <header className='bg-black/40'>
      <p className='logo'>
        <Image src="/logo.png" alt="Logo" width={30} height={30}/>
        <a className='uppercase text-logo' href="lscantillo.github.io">
        TrelloClone.com
        </a>
      </p>
    </header>
  )
}

export default Header