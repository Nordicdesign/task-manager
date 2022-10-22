import React from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../app/hooks/hooks'
import { logOut } from '../../features/auth/authSlice'
import { ScreenRoutes } from '../../screenRoutes'

export const Header = () => {
  const dispatch = useAppDispatch()
  const handleLogOut = () => {
    dispatch(logOut)
  }
  return (
    <header>
      <h1>
        <Link to={ScreenRoutes.DASHBOARD}>Task Manager</Link>
      </h1>
      <button onClick={handleLogOut}>Log out</button>
    </header>
  )
}
