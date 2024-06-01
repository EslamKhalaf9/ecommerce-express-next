import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-foreground text-background'>
      <div className="container mx-auto">
        <div className="flex justify-center items-center h-[10vh]">
          <p className='capitalize'>
            All rights reserved &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}
