import React from 'react'
import { Task } from '../../types/taskTypes'
import { useGetTasksQuery } from '../api/apiSlice'
import { TaskItem } from './TaskItem'
import styles from './ListAllTasks.module.scss'
import { useNavigate } from 'react-router-dom'

export const ListAllTasks = () => {
  const { data: tasks, isLoading, isError } = useGetTasksQuery()
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
                data-testid={`task-item-${task.AbxTaskId}`}
                onClick={() => onTaskChange(task.AbxTaskId)}
              >
                <TaskItem
                  AbxTaskId={task.AbxTaskId}
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
