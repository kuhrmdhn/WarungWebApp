"use client"
import UserForm from '@/ui/component/UserManage/UserForm'
import React from 'react'
import Image from "next/image"

export default function NewUser() {
  return (
    <section className="w-full min-h-[75svh] sm:h-[50svh] lg:min-h-[75svh] h-max flex flex-col items-center">
      <div className='w-1/2 sm:w-1/3 lg:w-1/5'>
        <Image alt='Welcome icon' src="/icons/welcome-icon.svg" height={100} width={100} className="w-full aspect-video" />
      </div>
      <UserForm />
    </section>
  )
}