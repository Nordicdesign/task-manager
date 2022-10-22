import React, { useEffect } from 'react'
import { appInit } from './app/appInit'
import { useAppDispatch, useAppSelector } from './app/hooks/hooks'
import { isLoggedIn, logIn } from './features/auth/authSlice'
import { ProtectedApp } from './ProtectedApp'
import { PublicApp } from './PublicApp'
import './assets/styles/app.scss'

function App() {
  const dispatch = useAppDispatch()
  const auth: boolean = useAppSelector(isLoggedIn)

  useEffect(() => {
    const existingOrg = appInit()
    if (existingOrg) {
      dispatch(logIn(existingOrg))
    }
  }, [])

  return <div className="App">{auth ? <ProtectedApp /> : <PublicApp />}</div>
}

export default App
