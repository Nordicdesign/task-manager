import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../app/hooks/hooks'
import { logOut } from '../../features/auth/authSlice'
import { ScreenRoutes } from '../../screenRoutes'
import styles from './Header.module.scss'

export const Header = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const handleLogOut = () => {
    dispatch(logOut())
    navigate(ScreenRoutes.LOGIN)
  }
  return (
    <header className={styles.header}>
      <h1>
        <Link to={ScreenRoutes.DASHBOARD}>Task Manager</Link>
      </h1>
      <button onClick={handleLogOut}>Log out</button>
    </header>
  )
}
