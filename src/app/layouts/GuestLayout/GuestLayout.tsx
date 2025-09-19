import { type ReactNode } from 'react'
import Header from './partials/Header'
import Footer from './partials/Footer'

const GuestLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main className='min-h-screen'>{children}</main>
      <Footer />
    </>
  )
}

export default GuestLayout
