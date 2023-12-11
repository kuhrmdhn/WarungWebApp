import Header from '../../../atom/Header'

function CashierHeader() {
  return (
    <Header>
        <Header.Navigation/>
        <section className='w-full h-full flex flex-col md:flex-row items-center justify-center'>
        <Header.CashierLogo/>
        <Header.CashierSearchBar/>
        </section>
    </Header>
  )
}

export default CashierHeader
