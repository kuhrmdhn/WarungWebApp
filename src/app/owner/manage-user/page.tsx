"use client"
import { userRouter } from '@/lib/database/userRouter'
import { userManageStore } from '@/lib/store/userManageStore'
import UserList from '@/ui/component/UserManage/UserList'
import React, { useEffect } from 'react'

export default function ManageUserPage() {
  const { getAllUser, deleteUser } = userRouter
  const { allUser } = userManageStore()
  useEffect(() => {
    getAllUser()
  }, [getAllUser])

  return (
    <div className='h-[100svh]'>
      <UserList />
    </div>
  )
}
