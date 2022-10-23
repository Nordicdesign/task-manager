import React, { useEffect, useState } from 'react'
import { Task } from '../../types/taskTypes'
import { useGetTasksByOrgQuery } from '../api/apiSlice'
import { TaskItem } from './TaskItem'
import styles from './ListAllTasks.module.scss'
import { useNavigate } from 'react-router-dom'
import { getOrganisation } from '../auth/authSlice'
import { useAppSelector } from '../../app/hooks/hooks'
import { Pagination } from './Pagination'

export const ListAllTasks = () => {
  const org = useAppSelector(getOrganisation)
  const [page, setPage] = useState(1)
  const [previous, setPrevious] = useState(false)
  const [next, setNext] = useState(false)
  const { data, isLoading, isError } = useGetTasksByOrgQuery(
    { org, page },
    { refetchOnMountOrArgChange: true },
  )
  const navigate = useNavigate()

  const onTaskChange = (id: string) => navigate(`/${id}`)

  const handlePrevious = () => {
    setPage(page - 1)
  }
  const handleNext = () => {
    setPage(page + 1)
  }

  useEffect(() => {
    if (!data) return
    if (!data.pagination) return

    if (data.pagination.next) setNext(true)
    if (!data.pagination.next) setNext(false)
    if (data.pagination.prev) setPrevious(true)
    if (!data.pagination.prev) setPrevious(false)
  }, [data])

  let content

  if (isLoading) {
    content = <p>Loading data...</p>
  } else if (isError) {
    content = <p>Something went wrong</p>
  } else {
    content = (
      <>
        <ul data-testid="task-list">
          {data &&
            data.data.map((task: Task, id: React.Key) => {
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
        <Pagination
          next={next}
          previous={previous}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
        />
      </>
    )
  }
  return <div className={styles.taskList}>{content}</div>
}
