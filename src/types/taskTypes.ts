enum PriorityEnum {
  low = 'LOW',
  medium = 'MEDIUM',
  high = 'HIGH',
}

export interface Task {
  id: string // added so json-server can do its magic
  abxTaskId: string // The Task Id used internally
  OrganisationTaskId: string // The Task Id used by the organisation
  organisationId: string // The Organisation Id
  priority: PriorityEnum // The priority given to the incident
  taskStatus: string
  assignedto: string // the vehicle id associated with the task
  timestamp: string // example: 2019-05-28T13:06:29.854+0000 when the incident happened
  latitude: number
  longitude: number
  tasksummary: string
  taskdescription: string
}
