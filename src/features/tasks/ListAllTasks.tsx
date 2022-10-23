import React, { useState } from 'react'
import { Task } from '../../types/taskTypes'
import { useGetTasksByOrgQuery } from '../api/apiSlice'
import { TaskItem } from './TaskItem'
import styles from './ListAllTasks.module.scss'
import { useNavigate } from 'react-router-dom'
import { getOrganisation } from '../auth/authSlice'
import { useAppSelector } from '../../app/hooks/hooks'

export const ListAllTasks = () => {
  const org = useAppSelector(getOrganisation)
  const [page, setPage] = useState(1)
  // const { data: tasks, isLoading, isError } = useGetTasksQuery()
  const {
    data: tasks,
    isLoading,
    isError,
  } = useGetTasksByOrgQuery({ org, page })
  const navigate = useNavigate()

  const onTaskChange = (id: string) => navigate(`/${id}`)

  let content

  if (isLoading) {
    content = <p>Loading data...</p>
  } else if (isError) {
    content = <p>Something went wrong</p>
  } else {
    content = (
      <ul data-testid="task-list">
        {tasks &&
          tasks.map((task: Task, id: React.Key) => {
            let status
            if (task.taskStatus === 'pending') {
              status = false
            } else {
              status = true
            }
            return (
              <li
                key={id}
                data-testid={`task-item-${task.abxTaskId}`}
                onClick={() => onTaskChange(task.abxTaskId)}
              >
                <TaskItem
                  AbxTaskId={task.abxTaskId}
                  tasksummary={task.tasksummary}
                  taskStatus={status}
                />
              </li>
            )
          })}
      </ul>
    )
  }
  return <div className={styles.taskList}>{content}</div>
}
