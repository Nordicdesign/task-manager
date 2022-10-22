import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

interface AuthState {
  isLoggedIn: boolean
  organisation: string | null
}

const initialState: AuthState = { isLoggedIn: false, organisation: null }

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loggedIn: (state, action) => {
      state.isLoggedIn = true
      state.organisation = action.payload
    },
    logOut: () => initialState,
  },
})

export const { loggedIn, logOut } = authSlice.actions

// selectors
export const isLoggedIn = (state: RootState) => state.auth.isLoggedIn

export default authSlice.reducer
