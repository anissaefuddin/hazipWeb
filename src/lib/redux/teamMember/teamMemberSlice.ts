// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface TeamMember {
//     ID	:	number;
//     Name	:	string;
//     Company	:	string;
//     Title	:	string;
//     Department	:	string;
//     Expertise	:	string;
//     Experience	:string;
//     Phone_Number	:	string;
//     E__Mail_Address	:	string;
//     Team_Member_Comments	:string;
// }

// interface TeamMembersState {
//   data: TeamMember[];
// }

// const initialState: TeamMembersState = {
//   data: [],
// };

// const teamMembersSlice = createSlice({
//   name: 'teamMembers',
//   initialState,
//   reducers: {
//     addTeamMember: (state, action: PayloadAction<TeamMember>) => {
//       state.data.push(action.payload);
//     },
//     updateTeamMember: (state, action: PayloadAction<TeamMember>) => {
//       const index = state.data.findIndex((member) => member.ID === action.payload.ID);
//       if (index !== -1) {
//         state.data[index] = action.payload;
//       }
//     },
//     removeTeamMember: (state, action: PayloadAction<number>) => {
//       state.data = state.data.filter((member) => member.ID !== action.payload);
//     },
//   },
// });

// export const { addTeamMember, updateTeamMember, removeTeamMember } = teamMembersSlice.actions;
// //export default teamMembersSlice.reducer;