import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { env } from '../../config/configuration'
import { Task } from '../../types/taskTypes'

const config = env()

// from https://joshgoestoflatiron.medium.com/february-10-pagination-in-a-json-server-api-with-the-link-header-dea63eb0a835
function parseLinkHeader(linkHeader: any) {
  if (!linkHeader) return

  const linkHeadersArray = linkHeader
    .split(', ')
    .map((header: any) => header.split('; '))
  const linkHeadersMap = linkHeadersArray.map((header: any) => {
    const thisHeaderRel = header[1].replace(/"/g, '').replace('rel=', '')
    const thisHeaderUrl = header[0].slice(1, -1)
    return [thisHeaderRel, thisHeaderUrl]
  })
  return Object.fromEntries(linkHeadersMap)
}

interface GetPaginatedOrgTasks {
  org: string | null
  page: number
}
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
    getTasksByOrg: builder.query<any, GetPaginatedOrgTasks>({
      query: ({ org, page }) => `/tasks/organisations/${org}/page/${page}`,
      providesTags: [{ type: 'tasks', id: 'LIST' }],
      transformResponse: (response: Task[], meta, arg) => {
        const headers = meta?.response?.headers
        const newResponse = {
          data: response,
          pagination: parseLinkHeader(headers?.get('Link')),
        }
        return newResponse
      },
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
  useGetTasksByOrgQuery,
  useGetTaskByIdQuery,
  useUpdateTaskMutation,
} = apiSlice
