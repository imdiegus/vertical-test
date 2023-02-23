export interface userInterface {
  email: string
  firstName: string
  lastName: string
}

export interface emailInterface {
  to: string[]
  message: string
  time: string
  from: string
  subject: string
}

export interface userSliceInterface {
  user: userInterface
  emails: emailInterface[]
}
