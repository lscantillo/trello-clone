import React from 'react'

export default function Layout({ children }) {
  return (
    <div className='flex flex-col h-screen bg-primary'>
      { children }
    </div>
  )
}
