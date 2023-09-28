'use client'
import React, { useState, useEffect, useRef } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import PageHeader from "@/partials/PageHeader";
import { v4 as uuidv4 } from 'uuid';
import Link from "next/link"
import { useDataGlobal } from '../../model/DataGlobalContext';
import { Team_Members ,Sessions,Team_Members_Sessions} from '@/model/classModel';
const Teammember: React.FC  = () => {
  const { dataGlobal, updateDataGlobal } = useDataGlobal();
  const initialSessions: Sessions[] = dataGlobal.Sessions;
  const initialTeamMembers: Team_Members[] = dataGlobal.Team_Members;
  const initialAttendances: Team_Members_Sessions[] =dataGlobal.Team_Members_Sessions;
  const [teamMembers, setTeamMembers] = useState<Team_Members[]>(initialTeamMembers);
  const [sessions, setSessions] = useState<Sessions[]>(initialSessions);
  const [attendances, setAttendances] = useState<Team_Members_Sessions[]>(initialAttendances);
  const [activeRow, setActiveRow] = useState<number | null>(null);
  const [showError, setShowError] = useState(false);
  const handleAddRow = () => {
    const newTeamMember = new Team_Members();
    setTeamMembers([...teamMembers, newTeamMember]);
    sessions.map((session) => {
      const newAttendance = {
        ID:  uuidv4().toLowerCase().replace(/-/g, ''),
        Team_Member_ID: newTeamMember.ID,
        Session_ID: session.ID,
        Value: "", // You can set the default value as needed
      };
      setAttendances([...attendances, newAttendance]);
    });
    const dataApa = dataGlobal;
    dataApa.Team_Members_Sessions = attendances;
    dataApa.Team_Members = teamMembers;
    updateDataGlobal(dataApa);
  };
  const handleCloseError = () => {
    setShowError(false)
  };
  const handleRemoveActiveRow = () => {
    if (activeRow !== null) {
      const updatedTeamMembers = [...teamMembers];
      updatedTeamMembers.splice(activeRow, 1);
      setTeamMembers(updatedTeamMembers);
      const dataApa = dataGlobal;
      dataApa.Team_Members_Sessions = attendances;
      dataApa.Team_Members = teamMembers;
      updateDataGlobal(dataApa);
      setActiveRow(null);
      setShowError(false);
    }else{
      setShowError(true);
    }
  };
  const handleActiveRow = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
   setActiveRow(index)
  };
  const moveUp = () => {
    if (activeRow !== null) {
      if(activeRow>0){
      const updatedTeamMembers = [...teamMembers];
      const temp = updatedTeamMembers[activeRow];
      updatedTeamMembers[activeRow] =updatedTeamMembers[activeRow-1];
      updatedTeamMembers[activeRow-1]= temp;
      setTeamMembers(updatedTeamMembers);
      dataGlobal.Team_Members = teamMembers;
      setActiveRow(activeRow-1);
      setShowError(false);
      }
    }else{
      setShowError(true);
    }
  };

  const moveDown = () => {
    if (activeRow !== null) {
      if(activeRow< teamMembers.length - 1){
      const updatedTeamMembers = [...teamMembers];
      const temp = updatedTeamMembers[activeRow];
      updatedTeamMembers[activeRow] =updatedTeamMembers[activeRow+1];
      updatedTeamMembers[activeRow+1]= temp;
      setTeamMembers(updatedTeamMembers);
      dataGlobal.Team_Members = teamMembers;
      setActiveRow(activeRow+1);
      setShowError(false);
      }
    }else{
      setShowError(true);
    }
  };
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const updatedTeamMembers = [...teamMembers];
    
    updatedTeamMembers[index].Name = e.target.value;
    setTeamMembers(updatedTeamMembers);
    const dataApa = dataGlobal;
    dataApa.Team_Members = teamMembers;
    updateDataGlobal(dataApa);
  };
  const handleCompanyChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const updatedTeamMembers = [...teamMembers];
    updatedTeamMembers[index].Company = e.target.value;
    setTeamMembers(updatedTeamMembers);
    const dataApa = dataGlobal;
    dataApa.Team_Members = teamMembers;
    updateDataGlobal(dataApa);
  };
  const handleDepartementChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const updatedTeamMembers = [...teamMembers];
    updatedTeamMembers[index].Departement = e.target.value;
    setTeamMembers(updatedTeamMembers);
    const dataApa = dataGlobal;
    dataApa.Team_Members = teamMembers;
    updateDataGlobal(dataApa);
  };
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const updatedTeamMembers = [...teamMembers];
    updatedTeamMembers[index].Title = e.target.value;
    setTeamMembers(updatedTeamMembers);
    const dataApa = dataGlobal;
    dataApa.Team_Members = teamMembers;
    updateDataGlobal(dataApa);
  };
  const handleExpertiseChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const updatedTeamMembers = [...teamMembers];
    updatedTeamMembers[index].Expertise = e.target.value;
    setTeamMembers(updatedTeamMembers);
    const dataApa = dataGlobal;
    dataApa.Team_Members = teamMembers;
    updateDataGlobal(dataApa);
  };
  const handleExperienceChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const updatedTeamMembers = [...teamMembers];
    updatedTeamMembers[index].Experience = e.target.value;
    setTeamMembers(updatedTeamMembers);
    const dataApa = dataGlobal;
    dataApa.Team_Members = teamMembers;
    updateDataGlobal(dataApa);
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const updatedTeamMembers = [...teamMembers];
    updatedTeamMembers[index].E__Mail_Address = e.target.value;
    setTeamMembers(updatedTeamMembers);
    const dataApa = dataGlobal;
    dataApa.Team_Members = teamMembers;
    updateDataGlobal(dataApa);
  };
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const updatedTeamMembers = [...teamMembers];
    updatedTeamMembers[index].Phone_Number = e.target.value;
    setTeamMembers(updatedTeamMembers);
    const dataApa = dataGlobal;
    dataApa.Team_Members = teamMembers;
    updateDataGlobal(dataApa);
  };
  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const updatedTeamMembers = [...teamMembers];
    updatedTeamMembers[index].Team_Member_Comments = e.target.value;
    setTeamMembers(updatedTeamMembers);
    const dataApa = dataGlobal;
    dataApa.Team_Members = teamMembers;
    updateDataGlobal(dataApa);
  };
  return (
    <>
    <PageHeader title="Team Members" />
      <section className="section-sm">
        <div className="container">
        <div className="row">
            <div className="w-1/6">
              <ul>
              <li className="mb-4 lg:mb-2"><Link href={'/overview'} className="block hover:text-gray-900 font-medium text-gray-600" >Overview</Link></li>
                <li className="mb-4 lg:mb-2"><Link href={"/team-members"} className="block hover:text-gray-900 text-lg text-black">Team Member</Link></li>
                <li className="mb-4 lg:mb-2"><Link href={"/sessions"} className="block hover:text-gray-900 font-medium text-gray-600">Sessions</Link></li>
                <li className="mb-4 lg:mb-2"><Link href={"/attendances"} className="block hover:text-gray-900 font-medium text-gray-600">Attendances</Link></li>
                <li className="mb-4 lg:mb-2"><Link href={"/documents"} className="block hover:text-gray-900 font-medium text-gray-600">Documents</Link></li>
                <li className="mb-4 lg:mb-2"><Link href={"/setting-columns"} className="block hover:text-gray-900 font-medium text-gray-600">Setting Column</Link></li>
                </ul>
                </div>
            <div className="w-5/6">
      <h1>Team Members</h1>
      <button className="hover:bg-slate-100 py-2 px-2 rounded inline-flex items-center" onClick={handleAddRow}><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-plus-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/></svg></button>
      <button className=" hover:bg-slate-100 py-2 px-2 rounded inline-flex items-center" onClick={handleRemoveActiveRow}><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16"><path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/></svg></button>
      <button className=" hover:bg-slate-100 py-2 px-2 rounded inline-flex items-center" onClick={moveUp}><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-arrow-up-square-fill" viewBox="0 0 16 16"><path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/></svg></button>
      <button className=" hover:bg-slate-100 py-2 px-2 rounded inline-flex items-center" onClick={moveDown}><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-arrow-down-square-fill" viewBox="0 0 16 16"><path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/></svg></button>
      {showError && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
  <strong className="font-bold">Tidak ada row yang dipilih!</strong>
  <span className="block sm:inline"> Pilih Row terlebih dahulu</span>
  <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
    <svg className="fill-current h-6 w-6 text-red-500" role="button" onClick={handleCloseError}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
  </span>
</div>} {/* Pesan error */}
      <table className='table-auto'>
        <thead className='bg-slate-300'>
          <tr>
            <td className="border px-4 py-2">Name</td>
            <td className="border px-4 py-2">Company</td>
            <td className="border px-4 py-2">Title</td>
            <td className="border px-4 py-2">Departement</td>
            <td className="border px-4 py-2">Expertise</td>
            <td className="border px-4 py-2">Experience</td>
            <td className="border px-4 py-2">Phone Number</td>
            <td className="border px-4 py-2">Email</td>
            <td className="border px-4 py-2">Comment</td>
          </tr>
        </thead>
        <tbody>
          {teamMembers.map((member,index) => (
           <tr key={member.ID} className={activeRow === index ? 'active-row' : ''}>
              <td className="border">
                <input type="text" className='appearance-none bg-transparent border-none w-full leading-tight focus:outline-none' 
                value={member.Name} onChange={(e) => handleNameChange(e, index)}  onFocus={(e) => handleActiveRow(e,index)}/>
              </td>
              <td className="border">
                <input type="text" className='appearance-none bg-transparent border-none w-full leading-tight focus:outline-none' 
                value={member.Company} onChange={(e) => handleCompanyChange(e, index)} onFocus={(e) => handleActiveRow(e,index)}/>
              </td>
              <td className="border">
                <input type="text" className='appearance-none bg-transparent border-none w-full leading-tight focus:outline-none' 
                value={member.Title} onChange={(e) => handleTitleChange(e, index)} onFocus={(e) => handleActiveRow(e,index)}/>
              </td>
              <td className="border">
                <input type="text" className='appearance-none bg-transparent border-none w-full leading-tight focus:outline-none' 
                value={member.Departement} onChange={(e) => handleDepartementChange(e, index)}  onFocus={(e) => handleActiveRow(e,index)}/>
              </td>
              <td className="border">
                <input type="text" className='appearance-none bg-transparent border-none w-full leading-tight focus:outline-none' 
                value={member.Expertise} onChange={(e) => handleExpertiseChange(e, index)}  onFocus={(e) => handleActiveRow(e,index)}/>
              </td>
              <td className="border">
                <input type="text" className='appearance-none bg-transparent border-none w-full leading-tight focus:outline-none' 
                value={member.Experience} onChange={(e) => handleExperienceChange(e, index)}  onFocus={(e) => handleActiveRow(e,index)}/>
              </td>
              <td className="border">
                <input type="text" className='appearance-none bg-transparent border-none w-full leading-tight focus:outline-none' 
                value={member.Phone_Number} onChange={(e) => handlePhoneChange(e, index)}  onFocus={(e) => handleActiveRow(e,index)}/>
              </td>
              <td className="border">
                <input type="email" className='appearance-none bg-transparent border-none w-full leading-tight focus:outline-none' 
                value={member.E__Mail_Address} onChange={(e) => handleEmailChange(e, index)}  onFocus={(e) => handleActiveRow(e,index)}/>
              </td>
              <td className="border">
                <input type="text" className='appearance-none bg-transparent border-none w-full leading-tight focus:outline-none' 
                value={member.Team_Member_Comments} onChange={(e) => handleCommentChange(e, index)}  onFocus={(e) => handleActiveRow(e,index)}/>
              </td>
           </tr>
            ))}
        </tbody>
      </table>
    </div>
  </div>
  </div>
</section>
    </>
  );
};

export default Teammember;

