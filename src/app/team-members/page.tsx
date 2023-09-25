'use client'
import React, { useState, useEffect, useRef } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import PageHeader from "@/partials/PageHeader";
import { v4 as uuidv4 } from 'uuid';

import { useDataGlobal } from '../../model/DataGlobalContext';
import { Team_Members } from '@/model/classModel';
const Teammember: React.FC  = () => {
  const { dataGlobal, updateDataGlobal } = useDataGlobal();
  const initialTeamMembers: Team_Members[] = dataGlobal.team_members;
  const [teamMembers, setTeamMembers] = useState<Team_Members[]>(initialTeamMembers);
  const [activeRow, setActiveRow] = useState<number | null>(null);
  const [showError, setShowError] = useState(false);
  const handleAddRow = () => {
    const newTeamMember = { ID: uuidv4()};
    setTeamMembers([...teamMembers, newTeamMember]);
    dataGlobal.team_members = teamMembers;
  };
  const handleCloseError = () => {
    setShowError(false)
  };
  const handleRemoveActiveRow = () => {
    if (activeRow !== null) {
      const updatedTeamMembers = [...teamMembers];
      updatedTeamMembers.splice(activeRow, 1);
      setTeamMembers(updatedTeamMembers);
      dataGlobal.team_members = teamMembers;
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
      dataGlobal.team_members = teamMembers;
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
      dataGlobal.team_members = teamMembers;
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
  };
  const handleCompanyChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const updatedTeamMembers = [...teamMembers];
    updatedTeamMembers[index].Company = e.target.value;
    setTeamMembers(updatedTeamMembers);
  };
  const handleDepartementChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const updatedTeamMembers = [...teamMembers];
    updatedTeamMembers[index].Departement = e.target.value;
    setTeamMembers(updatedTeamMembers);
  };
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const updatedTeamMembers = [...teamMembers];
    updatedTeamMembers[index].Title = e.target.value;
    setTeamMembers(updatedTeamMembers);
  };
  const handleExpertiseChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const updatedTeamMembers = [...teamMembers];
    updatedTeamMembers[index].Expertise = e.target.value;
    setTeamMembers(updatedTeamMembers);
  };
  const handleExperienceChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const updatedTeamMembers = [...teamMembers];
    updatedTeamMembers[index].Experience = e.target.value;
    setTeamMembers(updatedTeamMembers);
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const updatedTeamMembers = [...teamMembers];
    updatedTeamMembers[index].E__Mail_Address = e.target.value;
    setTeamMembers(updatedTeamMembers);
  };
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const updatedTeamMembers = [...teamMembers];
    updatedTeamMembers[index].Phone_Number = e.target.value;
    setTeamMembers(updatedTeamMembers);
  };
  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const updatedTeamMembers = [...teamMembers];
    updatedTeamMembers[index].Team_Member_Comments = e.target.value;
    setTeamMembers(updatedTeamMembers);
  };
  return (
    <>
    <PageHeader title="Team Members" />
      <section className="section-sm">
        <div className="container">
        <div className="row">
            <div className="w-1/6">
              <div className="">
              <ul className="mt-4 overflow-x-hidden">
                <li className="mb-4 lg:mb-2"><a href="/overview" className="block hover:text-gray-900 font-medium text-gray-600">Overview</a></li>
                <li className="mb-4 lg:mb-2"><a href="/team-members" className="block hover:text-gray-900 font-medium text-lg text-black">Team Member</a></li>
                <li className="mb-4 lg:mb-2"><a href="/sessions" className="block hover:text-gray-900 font-medium text-gray-600">Sessions</a></li>
                <li className="mb-4 lg:mb-2"><a href="/attendances" className="block hover:text-gray-900 font-medium text-gray-600">Attendances</a></li>
                <li className="mb-4 lg:mb-2"><a href="/documents" className="block hover:text-gray-900 font-medium text-gray-600">Documents</a></li>
                <li className="mb-4 lg:mb-2"><a href="/setting-columns" className="block hover:text-gray-900 font-medium text-gray-600">Setting Column</a></li>
                </ul>
                </div>
                </div>
            <div className="w-5/6">
                <div className="flex mb-4">
                  <div className="w-1/4 h-12">
      <h1>Team Members</h1>
      <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" onClick={handleAddRow}>
        <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
        <span>Add</span>
      </button>
      <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" onClick={handleRemoveActiveRow}>
        <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
        <span>Remove</span>
      </button>
      <button onClick={moveUp}>Move Up</button>
      <button onClick={moveDown}>Move Down</button>
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
              <td className="border px-4 py-2">
                <input type="text" className='appearance-none bg-transparent border-none w-full leading-tight focus:outline-none' 
                value={member.Name} onChange={(e) => handleNameChange(e, index)}  onFocus={(e) => handleActiveRow(e,index)}/>
              </td>
              <td className="border px-4 py-2">
                <input type="text" className='appearance-none bg-transparent border-none w-full leading-tight focus:outline-none' 
                value={member.Company} onChange={(e) => handleCompanyChange(e, index)} onFocus={(e) => handleActiveRow(e,index)}/>
              </td>
              <td className="border px-4 py-2">
                <input type="text" className='appearance-none bg-transparent border-none w-full leading-tight focus:outline-none' 
                value={member.Title} onChange={(e) => handleTitleChange(e, index)} onFocus={(e) => handleActiveRow(e,index)}/>
              </td>
              <td className="border px-4 py-2">
                <input type="text" className='appearance-none bg-transparent border-none w-full leading-tight focus:outline-none' 
                value={member.Departement} onChange={(e) => handleDepartementChange(e, index)}  onFocus={(e) => handleActiveRow(e,index)}/>
              </td>
              <td className="border px-4 py-2">
                <input type="text" className='appearance-none bg-transparent border-none w-full leading-tight focus:outline-none' 
                value={member.Expertise} onChange={(e) => handleExpertiseChange(e, index)}  onFocus={(e) => handleActiveRow(e,index)}/>
              </td>
              <td className="border px-4 py-2">
                <input type="text" className='appearance-none bg-transparent border-none w-full leading-tight focus:outline-none' 
                value={member.Experience} onChange={(e) => handleExperienceChange(e, index)}  onFocus={(e) => handleActiveRow(e,index)}/>
              </td>
              <td className="border px-4 py-2">
                <input type="text" className='appearance-none bg-transparent border-none w-full leading-tight focus:outline-none' 
                value={member.Phone_Number} onChange={(e) => handlePhoneChange(e, index)}  onFocus={(e) => handleActiveRow(e,index)}/>
              </td>
              <td className="border px-4 py-2">
                <input type="email" className='appearance-none bg-transparent border-none w-full leading-tight focus:outline-none' 
                value={member.E__Mail_Address} onChange={(e) => handleEmailChange(e, index)}  onFocus={(e) => handleActiveRow(e,index)}/>
              </td>
              <td className="border px-4 py-2">
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
  </div>
  </div>
</section>
    </>
  );
};

export default Teammember;

