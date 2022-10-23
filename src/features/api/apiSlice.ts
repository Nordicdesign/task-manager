import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { env } from '../../config/configuration'
import { Task } from '../../types/taskTypes'

const config = env()

interface UpdateTask {
  id: string
  task: Task
}

export const apiSlice = createApi({
  reducerPath: 'api',
  tagTypes: ['tasks'],
  baseQuery: fetchBaseQuery({
    baseUrl: `${config.api.apiHost}/v${config.api.apiVersion}`,
  }),
  endpoints: (builder) => ({
    login: builder.query({
      query: () => '/auth',
    }),
    // Tasks
    getTasks: builder.query<Task[], void>({
      query: () => '/tasks',
      providesTags: [{ type: 'tasks', id: 'LIST' }],
    }),
    getTaskById: builder.query<Task, string | undefined>({
      query: (taskId) => `/tasks/${taskId}`,
      providesTags: (result, error, id) => [{ type: 'tasks', id }],
    }),
    updateTask: builder.mutation<any, UpdateTask>({
      query: ({ id, task }) => ({
        url: `/tasks/${id}`,
        method: 'PUT',
        body: task,
      }),
      invalidatesTags: (result) =>
        result
          ? [
              { type: 'tasks', id: result.id },
              { type: 'tasks', id: 'LIST' },
            ]
          : [],
    }),
  }),
})

export const {
  useLoginQuery,
  useGetTasksQuery,
  useGetTaskByIdQuery,
  useUpdateTaskMutation,
} = apiSlice
