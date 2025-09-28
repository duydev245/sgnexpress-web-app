import { Navigate, useRoutes } from 'react-router-dom'
import { PATH } from './path'
import GuestLayout from '@/layouts/GuestLayout/GuestLayout'
import LandingPage from '@/modules/Guest/LandingPage/LandingPage'
import BlogPage from '@/modules/Guest/BlogPage/BlogPage'
// import ServicePage from '@/modules/Guest/ServicePage/ServicePage'
import ContactPage from '@/modules/Guest/ContactPage/ContactPage'
import BlogDetailPage from '@/modules/Guest/BlogDetailPage/BlogDetailPage'
import NotFoundPage from '@/modules/Guest/NotFoundPage/NotFoundPage'
import ServicePage from '@/modules/Guest/ServicePage/ServicePage'

const useRouteElement = () => {
  const routes = useRoutes([
    // Guest Module
    {
      path: PATH.HOME,
      children: [
        {
          index: true,
          element: <Navigate to={PATH.LANDING_PAGE} />
        },
        {
          path: PATH.LANDING_PAGE,
          element: (
            <GuestLayout>
              <LandingPage />
            </GuestLayout>
          )
        },
        {
          path: PATH.BLOG_PAGE,
          element: (
            <GuestLayout>
              <BlogPage />
            </GuestLayout>
          )
        },
        {
          path: PATH.BLOG_DETAIL_PAGE,
          element: (
            <GuestLayout>
              <BlogDetailPage />
            </GuestLayout>
          )
        },
        {
          path: PATH.SERVICE_PAGE,
          element: (
            <GuestLayout>
              <ServicePage />
            </GuestLayout>
          )
        },
        {
          path: PATH.CONTACT_PAGE,
          element: (
            <GuestLayout>
              <ContactPage />
            </GuestLayout>
          )
        }
      ]
    },
    {
      path: PATH.NOTFOUND,
      element: <NotFoundPage />
    },
    {
      path: '*',
      index: true,
      element: <Navigate to={PATH.NOTFOUND} />
    }
  ])

  return routes
}

export default useRouteElement
