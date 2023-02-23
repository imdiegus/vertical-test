export interface userInterface {
  email: string
  firstName: string
  lastName: string
}

export interface emailResponse extends emailInterface {
  fromData: userInterface[]
  toData: userInterface[]
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
  emails: emailResponse[]
  selectedEmail: emailResponse | null
}

export type emailScreenType = 'inbox' | 'sent'
