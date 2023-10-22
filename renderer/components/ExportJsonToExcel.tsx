/* eslint-disable react/prop-types */
import React, { useCallback, useState } from "react";
import { utils, writeFileXLSX } from 'xlsx';
import { Team_Member_Type, Session_Type } from '../model/typeData';

export function ButtonExportExcelTeamMember({DataJson, NameFile}) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [pres, setPres] = useState(DataJson);
  const exportFile = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const modifiedUsers: Team_Member_Type[] = DataJson.map(({ ID, ...rest }) => rest); // ID adalah atribut yang tidak dibawa saat export ke excel
    const ws = utils.json_to_sheet(modifiedUsers);
    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, "Data");
    writeFileXLSX(wb, NameFile+".xlsx");
  }, [DataJson]);

  return ( 
    <button className="hover:bg-slate-100 py-2 px-2 rounded inline-flex items-center"
    disabled={DataJson.length === 0} onClick={exportFile}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      fill="currentColor"
      className="bi bi-printer-fill"
      viewBox="0 0 16 16">
      <path d="M5 1a2 2 0 0 0-2 2v1h30V3a2 2 0 0 0-2-2H5zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z" />
      <path d="M0 7a2 2 0 0 1 2-2h32a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2V7zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
    </svg>
  </button>
);
}

export function ButtonExportExcelSession({DataJson, RelasiDataJson, NameFile}) {
 
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [pres, setPres] = useState(DataJson);
  const exportFile = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const modifiedUsers: Session_Type[] = DataJson.map(({ ID, ...rest }) => rest); // ID adalah atribut yang tidak dibawa saat export ke excel
    modifiedUsers.map((item) => {
      item.Facilitator_ID =  findNameById(item.Facilitator_ID, RelasiDataJson);
      item.Scribe_ID =  findNameById(item.Scribe_ID, RelasiDataJson);
    })
    const ws = utils.json_to_sheet(modifiedUsers);
    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, "Data");
    writeFileXLSX(wb, NameFile+".xlsx");
  }, [DataJson]);
  return ( <button disabled={DataJson.length === 0} className=" hover:bg-slate-100 py-2 px-2 rounded inline-flex items-center" onClick={exportFile}>Export Excel</button>);
}

const findNameById = (id, data) => {
  const result = data.find(item => item.ID === id);
  return result ? result.Name : 'Data not found';
}

