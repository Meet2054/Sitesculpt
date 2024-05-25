"use server"

import { currentUser } from '@clerk/nextjs/server'
import { db } from './db'

export const getAuthUserDetails = async () => {
  const authUser = await currentUser()
  if(!authUser) return null
  return db.user.findUnique({where:{id:authUser.id}})
}
