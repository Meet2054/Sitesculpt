import { ModeToggle } from '@/components/global/mode-toggle'
import { User } from '@clerk/nextjs/server';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { UserButton } from '@clerk/nextjs'
type Props = {
    user? : null | User
}

const Navigation = ({user}: Props) => {
  return (
    <div className='p-4 flex items-center justify-between relative '>
        <aside className='flex items-center gap-2'>
            <Image src={'./assets/plura-logo.svg'} alt = "Plura Logo replace withyours " width={40} height={40} />
            <span className='text-xl font-bold'>SiteSculpt</span>
        </aside>
        <nav className="hidden md:block absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]">
        <ul className="flex items-center justify-center gap-8">
          <Link href={'#'}>Pricing</Link>
          <Link href={'#'}>About</Link>
          <Link href={'#'}>Documentation</Link>
          <Link href={'#'}>Features</Link>
        </ul>
      </nav>
        <aside className='flex items-center gap-2'>
            <Link href={'/agency/sign-in'} className='bg-primary hover:bg-primary/80 rounded-md text-white p-2 px-4 ' >Logn In</Link>
        <UserButton/>
        <ModeToggle/>
        </aside>
    </div >
  )
}
export default Navigation