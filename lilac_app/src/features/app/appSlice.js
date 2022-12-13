import { createSlice } from '@reduxjs/toolkit'

export const appSlice = createSlice({
  name: 'app',
  initialState: {},
  reducers: {
    setLangCode: (state, action) => {
      state.langCode = action.payload
    },
  },
})

export const { setLangCode } = appSlice.actions

export default appSlice.reducer
