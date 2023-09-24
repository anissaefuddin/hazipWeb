/* Instruments */
import { dataAppSlice } from './dataApp'
import { teamMembersSlice }  from './teamMember'
export const reducer = {
  appData: dataAppSlice.reducer,
  teamMembers:teamMembersSlice.reducer 
}