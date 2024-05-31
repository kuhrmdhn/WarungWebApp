import React from 'react'
import NavigationBar from './components/NavigationBar'
import Summary from './dashboard/Summary'
import PageTitle from '../ui/elements/PageTitle'
import SalesReport from './dashboard/SalesReport'

export default function OwnerDashboard() {
  return (
    <>
      <NavigationBar />
      <main className='bg-body-gray min-h-[87svh] h-max w-full px-2 sm:px-5 pt-3 sm:pt-7'>
        <PageTitle>
          <PageTitle.Title>
            Dashboard
          </PageTitle.Title>
        </PageTitle>
        <Summary />
        <SalesReport />
      </main>
    </>
  )
}
