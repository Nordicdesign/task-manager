import React from 'react'
import styles from './TaskItem.module.scss'

type Props = {
  AbxTaskId: string
  taskStatus: boolean
  tasksummary: string
}

export const TaskItem = (props: Props) => {
  const { taskStatus, tasksummary } = props

  const status = taskStatus ? <span>✅</span> : <span>⏳</span>

  return (
    <div className={styles.taskItem}>
      {status}
      {tasksummary}
    </div>
  )
}
