import React, { Suspense, lazy } from 'react'
import { useRoutes } from 'react-router-dom'
import Loader from 'components/Loader'
import Header from 'components/Header'

const HomePage = lazy(() => import('components/HOCs/Home'))
const AboutPage = lazy(() => import('components/HOCs/About'))
const CategoryPage = lazy(() => import('components/HOCs/Category'))
const DeliveryPage = lazy(() => import('components/HOCs/Delivery'))

const routes = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/metal-detectors',
    element: <CategoryPage />,
  },
  {
    path: '/metal-detector-coils',
    element: <CategoryPage />,
  },
  {
    path: '/magnets',
    element: <CategoryPage />,
  },
  {
    path: '/accessories',
    element: <CategoryPage />,
  },
  {
    path: '/delivery',
    element: <DeliveryPage />,
  },
]

const RouteList = function () {
  return useRoutes(routes)
}

export default function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <RouteList />
      </Suspense>
    </>
  )
}
