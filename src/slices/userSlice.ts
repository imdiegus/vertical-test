import {
  emailInterface,
  emailResponse,
  userInterface,
  userSliceInterface,
} from './../interfaces/userInterfaces'
import { PayloadAction } from './../../node_modules/@reduxjs/toolkit/src/createAction'
import { createSlice } from '@reduxjs/toolkit'

const initialState: userSliceInterface = {
  user: {
    email: '',
    firstName: '',
    lastName: '',
  },
  emails: [],
  selectedEmail: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUser: (
      state: userSliceInterface,
      action: PayloadAction<userInterface>,
    ) => {
      state.user = action.payload
    },
    setEmails: (
      state: userSliceInterface,
      action: PayloadAction<emailResponse[]>,
    ) => {
      state.emails = action.payload
    },
    setSelectedEmail: (
      state: userSliceInterface,
      action: PayloadAction<emailResponse>,
    ) => {
      state.selectedEmail = action.payload
    },
  },
})

export const { setUser, setEmails, setSelectedEmail } = userSlice.actions
export default userSlice.reducer
