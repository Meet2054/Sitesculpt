import Image from 'next/image'
import React from 'react'

const loading = () => {
  return (
    <div className='w-full h-full flex items-center justify-center '>
        <Image src={'./assests/plura-logo.svg'} alt='logo' height={1200} width={1200} />
    </div>
  )
}

export default loading
