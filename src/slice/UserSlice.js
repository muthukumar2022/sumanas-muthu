import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null
};

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logginedUser(state, action) {
        console.log("Redux "+action.payload)
      return {
        ...state,
        user: action.payload
      }
    }
  }
})

export const { logginedUser } = UserSlice.actions

export default UserSlice.reducer