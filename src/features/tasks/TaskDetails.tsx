import React from 'react'
import { useGetTaskByIdQuery, useUpdateTaskMutation } from '../api/apiSlice'
import styles from './TaskDetails.module.scss'

type Props = {
  taskId: string | undefined
}
export const TaskDetails = (props: Props) => {
  const { taskId } = props
  // const [taskDetails, setTaskDetails ] = useState<Task | null>(null)
  const { data: taskDetails, isFetching, isError } = useGetTaskByIdQuery(taskId)
  const [updateTask] = useUpdateTaskMutation()

  if (taskDetails === undefined) {
    return null
  }

  const handleCompleteTasks = () => {
    const status =
      taskDetails.taskStatus === 'completed' ? 'pending' : 'completed'
    const newData = {
      ...taskDetails,
      taskStatus: status,
    }
    updateTask({ id: taskDetails.id, task: newData })
  }

  // content logic
  let content

  if (taskId === undefined) {
    content = <p>Select a task first</p>
  }

  if (isFetching) {
    content = <p>Loading, please wait</p>
  }

  if (isError) {
    content = <p>Can't read data right now. Please try again.</p>
  }

  if (taskDetails) {
    const {
      tasksummary,
      taskStatus,
      priority,
      assignedto,
      timestamp,
      taskdescription,
    } = taskDetails

    const status = taskStatus === 'completed' ? '✅ Completed' : '❌ Pending'
    const date = new Date(timestamp)
    content = (
      <div>
        <header className={styles.header}>
          <h2>{tasksummary}</h2>
          <div className={styles.status}>
            {status}
            <button onClick={handleCompleteTasks}>
              {taskDetails.taskStatus === 'completed' ? 'Undo' : 'Complete'}
            </button>
          </div>
        </header>
        <section>
          <ul className={styles.meta}>
            <li>
              <span>Priority</span> {priority}
            </li>
            <li>
              <span>Created</span> {date.toLocaleString()}
            </li>
            <li>
              <span>Assigned to</span> {assignedto}
            </li>
          </ul>
          <h3>Description</h3>
          <p>{taskdescription}</p>
        </section>
      </div>
    )
  } else {
    content = (
      <p>
        Well something went <em>really</em> wrong
      </p>
    )
  }

  return <div className="task-details">{content}</div>
}
