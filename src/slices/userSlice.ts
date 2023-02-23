import {
  emailInterface,
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
      action: PayloadAction<emailInterface[]>,
    ) => {
      state.emails = action.payload
    },
  },
})

export const { setUser, setEmails } = userSlice.actions
export default userSlice.reducer
