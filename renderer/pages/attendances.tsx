"use client";
import React, { useState } from "react";
import { useDataGlobal } from "../model/DataGlobalContext";
import {
  Sessions,
  Team_Members,
  Team_Members_Sessions,
} from "../model/classModel";
import Sidebar from "../components/Sidebar";
import { ButtonExportExcelAttendances } from "../components/ExportJsonToExcel";
const Attendances: React.FC = () => {
  const { dataGlobal, updateDataGlobal } = useDataGlobal();
  const initialSessions: Sessions[] = dataGlobal.Sessions;
  const initialMembers: Team_Members[] = dataGlobal.Team_Members;
  const initialAttendances: Team_Members_Sessions[] =
    dataGlobal.Team_Members_Sessions;
  const [sessions] = useState<Sessions[]>(initialSessions);
  const [members] = useState<Team_Members[]>(initialMembers);
  const [attendances, setAttendances] =
    useState<Team_Members_Sessions[]>(initialAttendances);
  const handleAttendanceChange = (
    teamMemberID: string,
    sessionID: string,
    newValue: string
  ) => {
    const updatedData = attendances.map((attendance) => {
      if (
        attendance.Team_Member_ID === teamMemberID &&
        attendance.Session_ID === sessionID
      ) {
        return { ...attendance, Value: newValue };
      }
      return attendance;
    });
    setAttendances(updatedData);
    const data = dataGlobal;
    data.Team_Members_Sessions = attendances;
    updateDataGlobal(data);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="w-1/6">
            <ul className="mt-4 overflow-x-hidden">
              <Sidebar index={0} />
            </ul>
          </div>
          <div className="w-5/6">
            <h3>Attendances</h3>
            <ButtonExportExcelAttendances
              DataJson={attendances}
              DataMember={members}
              DataSession={sessions}
              NameFile={"Export_Attendances"}
            />
            {members.length > 0 ? (
              <table className="table-auto">
                <thead></thead>
                <tbody>
                  {members.map((teamMember, index) => (
                    <tr key={teamMember.ID}>
                      {index === 0 ? (
                        <td rowSpan={members.length} className="rotate border p-0">
                          <b>Member</b>
                        </td>
                      ) : (
                        ""
                      )}
                      <td className="border">{teamMember.Name}</td>
                      {sessions.map((session) => (
                        <td key={session.ID} className="border">
                          <select
                            className="appearance-none bg-transparent border-none w-full leading-tight focus:outline-none"
                            value={
                              attendances.find(
                                (attendance) =>
                                  attendance.Team_Member_ID === teamMember.ID &&
                                  attendance.Session_ID === session.ID
                              )?.Value
                            }
                            onChange={(e) =>
                              handleAttendanceChange(
                                teamMember.ID,
                                session.ID,
                                e.target.value
                              )
                            }>
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
                      <td key={session.ID} className="border">
                        {session.Date}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td colSpan={2} className=""></td>
                    <td
                      colSpan={sessions.length + 1}
                      className="text-center border">
                      <b>Session</b>
                    </td>
                  </tr>
                </tbody>
              </table>
            ) : ""}
          </div>
        </div>
      </div>
    </>
  );
};

export default Attendances;
