import React from 'react'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../../app/hooks/hooks'
import { getOrganisation } from '../../features/auth/authSlice'
import { ListAllTasks } from '../../features/tasks'
import { TaskDetails } from '../../features/tasks/TaskDetails'

export const Dashboard = () => {
  const { taskId } = useParams()
  const organisation = useAppSelector(getOrganisation)

  return (
    <div className="page dashboard">
      <header>
        <h1>All tasks for organisation {organisation}</h1>
      </header>
      <aside>
        <ListAllTasks />
      </aside>
      <main>
        <TaskDetails taskId={taskId} />
      </main>
    </div>
  )
}
