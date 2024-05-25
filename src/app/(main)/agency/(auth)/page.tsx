import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/dist/server/api-utils'
import React from 'react'

const Page = async() => {
  
  const authUser = await currentUser()
  if(!authUser){
    return redirect('/sign-in')
  }

  const user = await getAuthUserDetails()
  return (
    <div>
      Agency Dashboard
    </div>
  )
}

export default Page
