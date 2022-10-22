import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Header } from './components/header'
import { Dashboard } from './pages/dashboard'

import { ScreenRoutes } from './screenRoutes'

export const ProtectedApp = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path={ScreenRoutes.DASHBOARD} element={<Dashboard />} />
      </Routes>
    </>
  )
}
