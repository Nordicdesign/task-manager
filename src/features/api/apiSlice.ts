import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { env } from '../../config/configuration'

const config = env()

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: `${config.api.apiHost}/v${config.api.apiVersion}`,
  }),
  endpoints: (builder) => ({
    login: builder.query({
      query: () => '/auth',
    }),
  }),
})

export const { useLoginQuery } = apiSlice
