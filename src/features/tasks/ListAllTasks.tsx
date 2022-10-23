import React from 'react'
import { Task } from '../../types/taskTypes'
import { useGetTasksQuery } from '../api/apiSlice'

export const ListAllTasks = () => {
  const { data: tasks, isLoading, isError } = useGetTasksQuery()

  let content

  if (isLoading) {
    content = <p>Loading data...</p>
  } else if (isError) {
    content = <p>Something went wrong</p>
  } else {
    content = (
      <ul>
        {tasks &&
          tasks.map((task: Task, id: React.Key) => {
            return <li>{task.tasksummary}</li>
          })}
      </ul>
    )
  }
  return <div>{content}</div>
}
