// store/jsonDataSlice.js
import { createSlice } from '@reduxjs/toolkit';

const jsonDataSlice = createSlice({
  name: 'jsonData',
  initialState: {},
  reducers: {
    importData: (state, action) => {
      return action.payload;
    },
  },
});

export const { importData } = jsonDataSlice.actions;
export default jsonDataSlice.reducer;