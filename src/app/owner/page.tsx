"use client"
import React, { useEffect } from 'react'
import Summary from './dashboard/Summary'
import PageTitle from '../ui/elements/PageTitle'
import SalesReport from './dashboard/SalesReport'
import { ownerRouter } from '@/lib/database/ownerRouter'

export default function OwnerDashboard() {
  useEffect(() => {
    ownerRouter.getOwnerData()
  },[])

  return (
      <section className='bg-body-gray min-h-[87svh] h-max w-full px-2 sm:px-5 pt-3 sm:pt-7'>
        <PageTitle>
          <PageTitle.Title>
            Dashboard
          </PageTitle.Title>
        </PageTitle>
        <Summary />
        <SalesReport />
      </section>
  )
}
