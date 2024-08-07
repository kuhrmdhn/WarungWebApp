import React from 'react'
import LoadingAnimation from '../ui/elements/LoadingAnimation'

export default function Loading() {
  return (
    <div className='flex justify-center items-center w-full h-[100svh] flex-col gap-3'>
      <LoadingAnimation />
      <h1 className="text-xl font-thin">Loading resource</h1>
    </div>
  )
}
