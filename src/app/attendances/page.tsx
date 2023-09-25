'use client'
import React, { useState, useEffect, useRef } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import PageHeader from "@/partials/PageHeader";
import { v4 as uuidv4 } from 'uuid';
import { useDataGlobal } from '../../model/DataGlobalContext';
import { Sessions, Team_Members, Team_Members_Sessions } from '@/model/classModel';
import { Transform } from 'stream';
const Attendances: React.FC  = () => {
  const { dataGlobal, updateDataGlobal } = useDataGlobal();
  const initialSessions: Sessions[] = 
  [{ID:"101",Session:"Sesi 1", Date:"01/01/2023"},
  {ID:"102",Session:"Sesi 2", Date:"02/02/2023"}];
  const initialMembers: Team_Members[] = [{ID:"1",Name:"Ipung"},{ID:"2",Name:"Diana"},{ID:"3",Name:"Budi"}];
  const initialAttendances: Team_Members_Sessions[] =[
  new Team_Members_Sessions('a1', '1', '101', 'Present'),
  new Team_Members_Sessions('a2', '2', '101', 'Absent'),
  new Team_Members_Sessions('a3', '3', '101', 'Partial'),
  new Team_Members_Sessions('a4', '1', '102', 'Present'),
  new Team_Members_Sessions('a5', '2', '102', 'Absent'),
  new Team_Members_Sessions('a6', '3', '102', 'Partial')];//dataGlobal.Team_Members_Sessions;
  const [sessions, setSessions] = useState<Sessions[]>(initialSessions);
  const [members, setMembers] = useState<Team_Members[]>(initialMembers);
  const [attendances, setAttendances] = useState<Team_Members_Sessions[]>(initialAttendances);
  const [activeRow, setActiveRow] = useState<number | null>(null);
  const [showError, setShowError] = useState(false);
  const handleCloseError = () => {
    setShowError(false)
  };
  const handleActiveRow = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
   setActiveRow(index)
  };

  const handleAttendanceChange = (teamMemberID : string, sessionID: string, newValue:string) => {
    // Update the attendanceData state based on user selection
    const updatedData = attendances.map((attendance) => {
      if (attendance.Team_Member_ID === teamMemberID && attendance.Session_ID === sessionID) {
        return { ...attendance, Value: newValue };
      }
      return attendance;
    });
    setAttendances(updatedData);
  };
  return (
    <>
    <PageHeader title="Attendances" />
      <section className="section-sm">
        <div className="container">
        <div className="row">
            <div className="w-1/6">
              <ul>
                <li className="mb-4 lg:mb-2"><a href="/overview" className="block hover:text-gray-900 font-medium text-gray-600">Overview</a></li>
                <li className="mb-4 lg:mb-2"><a href="/team-members" className="block hover:text-gray-900 font-medium text-gray-600">Team Member</a></li>
                <li className="mb-4 lg:mb-2"><a href="/sessions" className="block hover:text-gray-900 font-medium text-gray-600">Sessions</a></li>
                <li className="mb-4 lg:mb-2"><a href="/attendances" className="block hover:text-gray-900 text-lg text-black">Attendances</a></li>
                <li className="mb-4 lg:mb-2"><a href="/documents" className="block hover:text-gray-900 font-medium text-gray-600">Documents</a></li>
                <li className="mb-4 lg:mb-2"><a href="/setting-columns" className="block hover:text-gray-900 font-medium text-gray-600">Setting Column</a></li>
                </ul>
            </div>
            <div className="w-5/6">
      <h1>Attendances</h1>
      <button className="hover:bg-slate-100 py-2 px-2 rounded inline-flex items-center" ><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-printer-fill" viewBox="0 0 16 16"><path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2H5zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z"/><path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2V7zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/></svg></button>
      <table className='table-auto'>
          {members.map((teamMember, index) => (
            <tr key={teamMember.ID}>    
            {index === 0 ? <td rowSpan={members.length} className='rotate'><b>Member</b></td> : ''}  
              <td className='border px-4 py-2'>{teamMember.Name}</td>
              {sessions.map((session) => (
                <td key={session.ID} className='border px-4 py-2'>
                  <select className='appearance-none bg-transparent border-none w-full leading-tight focus:outline-none'
                  value={attendances.find(
                    (attendance) =>
                      attendance.Team_Member_ID === teamMember.ID &&
                      attendance.Session_ID === session.ID
                  )?.Value}
                  onChange={(e) =>
                    handleAttendanceChange(teamMember.ID, session.ID, e.target.value)
                  } >
                    <option value=""></option>
                    <option value="Absent">Absent</option>
                    <option value="Partial">Partial</option>
                    <option value="Present">Present</option>
                  </select>
                </td>
              ))}
            </tr>
          ))}
          <tr>
          <td></td>
            <td></td>
            {sessions.map((session) => (
              <td key={session.ID} className='border px-4 py-2'>{session.Date}</td>
            ))}
          </tr>
          <tr>
          <td></td>
          <td></td>
          <td colSpan={sessions.length + 1} className='text-center'><b>Session</b></td>
        </tr>
      </table>
    </div>
  </div>
  </div>
</section>
    </>
  );
};

export default Attendances;

