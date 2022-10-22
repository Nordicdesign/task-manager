import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Login } from './pages/login'
import { ScreenRoutes } from './screenRoutes'

export const PublicApp = () => {
  return (
    <>
      <Routes>
        <Route path={ScreenRoutes.LOGIN} element={<Login />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </>
  )
}
