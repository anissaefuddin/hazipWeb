'use client'
import { useState } from 'react'
import {
    useSelector,
    useDispatch,
    teamMembersSlice,
    selectTeamMember
  } from '@/lib/redux'
import { v4 as uuidv4 } from 'uuid';
const TeamMembers = () => {
    const dispatch = useDispatch()
    const store = useSelector(selectTeamMember)

  // State untuk form
  const [listTaeamMember, setListTeamMember] = useState([])
    const [ID, setID] = useState('');
    const [Name, setName] = useState('');
    const [Company, setCompany] = useState('');
    const [Title, setTitle] = useState('');
    const [Department, setDepartment] = useState('');
    const [Expertise, setExpertise] = useState('');
    const [Experience, setExperience] = useState('');
    const [Phone_Number, setPhone_Number] = useState('');
    const [E__Mail_Address, setE__Mail_Address] = useState('');
    const [Team_Member_Comments, setTeam_Member_Comments] = useState('');

  const handleAddTeamMember = () => {
    const newMember = {
        ID	: uuidv4()	,
        Name	:Name	,
        Company	:Company	,
        Title	:Title	,
        Department	:Department	,
        Expertise	:Expertise	,
        Experience	:Experience,
        Phone_Number	:Phone_Number	,
        E__Mail_Address	:E__Mail_Address	,
        Team_Member_Comments	:Team_Member_Comments 
    };
    dispatch(teamMembersSlice.actions.addTeamMember(newMember));
  };

  const handleUpdateTeamMember = (id: number, newName: string, newCompany: string) => {
    const updatedMember = {
        ID	:ID	,
        Name	:newName	,
        Company	:newCompany	,
        Title	:newCompany	,
        Department	:newCompany	,
        Expertise	:newCompany	,
        Experience	:newCompany,
        Phone_Number	:newCompany	,
        E__Mail_Address	:newCompany	,
        Team_Member_Comments	:newCompany
    };
    dispatch(teamMembersSlice.actions.updateTeamMember(updatedMember));
  };

  const handleRemoveTeamMember = (id: string) => {
    dispatch(teamMembersSlice.actions.removeTeamMember(id));
  };

  return (
    <div>
      <h1>Team Members</h1>
      <ul>
        {store.data.map((member) => (
          <li key={member.ID}>
            <span>{member.Name} - {member.Name}</span>
            <button onClick={() => handleRemoveTeamMember(member.ID)}>Remove</button>
          </li>
        ))}
      </ul>
      <h2>Add Team Member</h2>
      <input
        type="text"
        placeholder="Name"
        value={Name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Role"
        value={Company}
        onChange={(e) => setCompany(e.target.value)}
      />
      <button onClick={handleAddTeamMember}>Add</button>
    </div>
  );
};

export default TeamMembers;