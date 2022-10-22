import {
  Action,
  configureStore,
  getDefaultMiddleware,
  ThunkAction,
} from '@reduxjs/toolkit'

import authReducer from '../features/auth/authSlice'
import { apiSlice } from '../features/api/apiSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
