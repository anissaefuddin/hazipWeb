/* Core */
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { Team_Members, TeamMembersState  } from '../../../model/interfaceData';

const initialState: TeamMembersState = {
  data: [],
  status: 'idle',
}

export const teamMembersSlice = createSlice({
  name: 'Team_Members',
  initialState,
  reducers: {
    addTeamMember: (state, action: PayloadAction<Team_Members>) => {
      state.data.push(action.payload);
    },
    updateTeamMember: (state, action: PayloadAction<Team_Members>) => {
      const index = state.data.findIndex((member) => member.ID === action.payload.ID);
      if (index !== -1) {
        state.data[index] = action.payload;
      }
    },
    removeTeamMember: (state, action: PayloadAction<string>) => {
      state.data = state.data.filter((member) => member.ID !== action.payload);
    }
  },
})
