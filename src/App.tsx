import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import useRouteElement from '@/routes/useRouteElement'
import './App.css'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  const routeElement = useRouteElement()

  return (
    <>
      <ScrollToTop />
      {/* Your routes/components go here */}
      {routeElement}
    </>
  )
}

export default App
